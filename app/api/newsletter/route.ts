import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      // Pour les tests en local si la clé n'est pas configurée
      console.warn('RESEND_API_KEY is not defined. Simulating success.')
      await new Promise((resolve) => setTimeout(resolve, 800))
      return NextResponse.json({ success: true, message: 'Inscrit avec succès (Mode Simulation)' })
    }

    // Ajouter le contact à l'audience Resend
    // L'Audience ID peut être défini dans RESEND_AUDIENCE_ID, sinon on prend une audience par défaut (ex: null pour les contacts généraux)
    const audienceId = process.env.RESEND_AUDIENCE_ID || ''
    
    if (audienceId) {
      const { error } = await resend.contacts.create({
        email,
        audienceId,
        unsubscribed: false,
      })
      if (error) {
        console.error("Erreur Resend Contacts:", error)
        return NextResponse.json({ error: "Impossible de s'inscrire à la newsletter." }, { status: 500 })
      }
    } else {
      // S'il n'y a pas d'audience configurée, on envoie juste un email de notification / bienvenue
      const { error } = await resend.emails.send({
        from: 'What Else by Vinc <newsletter@whatelsebyvinc.fr>', // L'utilisateur devra configurer un vrai domaine d'expédition vérifié sur Resend
        to: [email],
        subject: 'Bienvenue dans la newsletter What Else by Vinc !',
        html: '<p>Merci pour votre inscription à la newsletter. Vous recevrez nos bons plans très bientôt !</p>',
      })
      if (error) {
        console.error("Erreur Resend Emails:", error)
        return NextResponse.json({ error: "Impossible de s'inscrire à la newsletter." }, { status: 500 })
      }
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
