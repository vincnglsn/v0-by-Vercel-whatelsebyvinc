'use client'

import { useEffect, useState } from 'react'

export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10)
    const storageKey = `wev-visited-${today}`

    const alreadyCounted = (() => {
      try {
        return sessionStorage.getItem(storageKey) === '1'
      } catch {
        return false
      }
    })()

    const method = alreadyCounted ? 'GET' : 'POST'

    fetch('/api/visits', { method })
      .then((res) => res.json())
      .then((data: { count: number }) => {
        setCount(data.count)
        if (!alreadyCounted) {
          try {
            sessionStorage.setItem(storageKey, '1')
          } catch {
            // stockage indisponible, tant pis pour la dédup de session
          }
        }
      })
      .catch(() => setCount(null))
  }, [])

  if (count === null) return null

  return (
    <p className="text-xs text-muted-foreground">
      {count} {count > 1 ? 'visites' : 'visite'} aujourd&apos;hui
    </p>
  )
}
