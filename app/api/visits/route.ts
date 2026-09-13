import { NextResponse } from 'next/server'
import { getCloudflareContext } from '@opennextjs/cloudflare'

interface KVNamespaceLike {
  get(key: string): Promise<string | null>
  put(key: string, value: string): Promise<void>
}

function todayKey() {
  return `visits:${new Date().toISOString().slice(0, 10)}`
}

async function readCount(kv: KVNamespaceLike) {
  const raw = await kv.get(todayKey())
  return raw ? Number.parseInt(raw, 10) || 0 : 0
}

export async function GET() {
  try {
    const { env } = await getCloudflareContext({ async: true })
    const kv = env.VISITS_KV as unknown as KVNamespaceLike | undefined
    if (!kv) return NextResponse.json({ count: 0 })
    return NextResponse.json({ count: await readCount(kv) })
  } catch {
    return NextResponse.json({ count: 0 })
  }
}

export async function POST() {
  try {
    const { env } = await getCloudflareContext({ async: true })
    const kv = env.VISITS_KV as unknown as KVNamespaceLike | undefined
    if (!kv) return NextResponse.json({ count: 0 })
    const count = (await readCount(kv)) + 1
    await kv.put(todayKey(), String(count))
    return NextResponse.json({ count })
  } catch {
    return NextResponse.json({ count: 0 })
  }
}
