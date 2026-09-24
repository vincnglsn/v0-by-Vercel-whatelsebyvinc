import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy')
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("ERREUR CRITIQUE: RESEND_API_KEY n'est pas définie dans les variables d'environnement Vercel.")
      return NextResponse.json(
        { error: "Configuration email manquante côté serveur. Veuillez contacter l'administrateur." },
        { status: 500 }
      )
    }

    // Ajouter le contact à l'audience Resend (si l'ID est configuré)
    const audienceId = process.env.RESEND_AUDIENCE_ID || ''
    
    if (audienceId) {
      const { error: contactError } = await resend.contacts.create({
        email,
        audienceId,
        unsubscribed: false,
      })
      if (contactError) {
        console.error("Erreur Resend Contacts:", contactError)
        // On continue tout de même pour essayer d'envoyer l'email
      }
    }

    // Envoyer un email de notification / bienvenue
    const { error: emailError } = await resend.emails.send({
      from: 'Select by Vinc <bonjour@whatelsebyvinc.com>', // Nécessite un domaine vérifié sur Resend, ou onboarding@resend.dev pour les tests
      to: [email],
      subject: 'Bienvenue sur Select by Vinc !',
      html: '<p>Merci pour votre inscription à la newsletter. Vous recevrez nos bons plans très bientôt !</p>',
    })
    
    if (emailError) {
      console.error("Erreur Resend Emails:", emailError)
      return NextResponse.json({ error: "Impossible de finaliser l'inscription (erreur d'envoi d'email)." }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'Inscrit avec succès' })
  } catch (error) {
    console.error("Erreur Catch:", error)
    return NextResponse.json(
      { error: 'Erreur serveur interne' },
      { status: 500 }
    )
  }
}
