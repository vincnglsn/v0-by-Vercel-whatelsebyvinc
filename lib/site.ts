// Adresse publique du site : surchargeable via NEXT_PUBLIC_SITE_URL (changement de domaine sans toucher au code).
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://select.whatelsebyvinc.com'
export const SITE_HOST = new URL(SITE_URL).host
