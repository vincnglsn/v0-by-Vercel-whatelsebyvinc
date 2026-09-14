import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    // Mock API : simuler une latence et retourner un succès
    // (A remplacer par un appel à Resend, Mailchimp, Brevo...)
    await new Promise((resolve) => setTimeout(resolve, 800))

    return NextResponse.json({ success: true, message: 'Inscrit avec succès' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur serveur interne' },
      { status: 500 }
    )
  }
}
