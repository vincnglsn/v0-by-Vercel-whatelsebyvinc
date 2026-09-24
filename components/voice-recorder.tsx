'use client'

import { useEffect, useRef, useState } from 'react'
import { Mic, Pause, Play, Square, Download, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

type RecordingState = 'idle' | 'recording' | 'paused' | 'stopped'

function formatDuration(seconds: number) {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0')
  return `${mins}:${secs}`
}

export function VoiceRecorder() {
  const [state, setState] = useState<RecordingState>('idle')
  const [duration, setDuration] = useState(0)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      streamRef.current?.getTracks().forEach((track) => track.stop())
      if (audioUrl) URL.revokeObjectURL(audioUrl)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function stopTimer() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  function startTimer() {
    stopTimer()
    intervalRef.current = setInterval(() => {
      setDuration((prev) => prev + 1)
    }, 1000)
  }

  async function handleStart() {
    setError(null)
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl)
      setAudioUrl(null)
    }
    setDuration(0)
    chunksRef.current = []

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream

      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : 'audio/webm'
      const mediaRecorder = new MediaRecorder(stream, { mimeType })
      mediaRecorderRef.current = mediaRecorder

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mimeType })
        setAudioUrl(URL.createObjectURL(blob))
        streamRef.current?.getTracks().forEach((track) => track.stop())
        streamRef.current = null
      }

      mediaRecorder.start()
      setState('recording')
      startTimer()
    } catch {
      setError(
        "Impossible d'accéder au micro. Vérifie les autorisations de ton navigateur.",
      )
    }
  }

  function handlePause() {
    mediaRecorderRef.current?.pause()
    setState('paused')
    stopTimer()
  }

  function handleResume() {
    mediaRecorderRef.current?.resume()
    setState('recording')
    startTimer()
  }

  function handleStop() {
    mediaRecorderRef.current?.stop()
    setState('stopped')
    stopTimer()
  }

  function handleReset() {
    if (audioUrl) URL.revokeObjectURL(audioUrl)
    setAudioUrl(null)
    setDuration(0)
    setState('idle')
    setError(null)
  }

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-6 rounded-2xl border border-border bg-card p-8 text-center">
      <div
        className={`flex size-20 items-center justify-center rounded-full ${
          state === 'recording'
            ? 'animate-pulse bg-destructive/10 text-destructive'
            : 'bg-muted text-muted-foreground'
        }`}
      >
        <Mic className="size-9" />
      </div>

      <div className="font-mono text-3xl tabular-nums">{formatDuration(duration)}</div>

      {error ? <p className="text-sm text-destructive">{error}</p> : null}

      <div className="flex items-center gap-3">
        {state === 'idle' || state === 'stopped' ? (
          <Button onClick={handleStart} size="lg">
            <Mic /> Démarrer l'enregistrement
          </Button>
        ) : null}

        {state === 'recording' ? (
          <>
            <Button onClick={handlePause} variant="outline" size="lg">
              <Pause /> Pause
            </Button>
            <Button onClick={handleStop} variant="destructive" size="lg">
              <Square /> Arrêter
            </Button>
          </>
        ) : null}

        {state === 'paused' ? (
          <>
            <Button onClick={handleResume} size="lg">
              <Play /> Reprendre
            </Button>
            <Button onClick={handleStop} variant="destructive" size="lg">
              <Square /> Arrêter
            </Button>
          </>
        ) : null}
      </div>

      {audioUrl ? (
        <div className="flex w-full flex-col items-center gap-4 border-t border-border pt-6">
          <audio src={audioUrl} controls className="w-full" />
          <div className="flex items-center gap-3">
            <Button
              render={
                <a href={audioUrl} download={`enregistrement-${Date.now()}.webm`} />
              }
              nativeButton={false}
              variant="secondary"
            >
              <Download /> Télécharger
            </Button>
            <Button onClick={handleReset} variant="ghost">
              <Trash2 /> Nouvel enregistrement
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
