import { NextResponse } from 'next/server'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let email: unknown
  try {
    const body = await request.json()
    email = body?.email
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  if (typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'Adresse e-mail invalide.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const audienceId = process.env.RESEND_AUDIENCE_ID

  if (!apiKey || !audienceId) {
    console.error(
      'Newsletter signup received but RESEND_API_KEY / RESEND_AUDIENCE_ID is not configured.',
    )
    return NextResponse.json(
      { error: "L'inscription n'est pas encore active, réessayez plus tard." },
      { status: 503 },
    )
  }

  const response = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, unsubscribed: false }),
  })

  if (!response.ok) {
    const details = await response.text()
    console.error('Resend contact creation failed:', response.status, details)
    return NextResponse.json(
      { error: "L'inscription a échoué, réessayez dans quelques instants." },
      { status: 502 },
    )
  }

  return NextResponse.json({ success: true })
}
