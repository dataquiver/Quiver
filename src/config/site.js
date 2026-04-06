export const SITE_INFO = {
  brandName: 'DataQuiver',
  tagline: 'Design. Develop. Brand. Deliver.',
  city: 'Bangalore, India',
  email: 'info@dataquiver.in',
  phoneDisplay: '+91 9972309439',
  phoneE164: '+919972309439',
  whatsappNumber: '919972309439'
}

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`
}
