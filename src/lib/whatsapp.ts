// src/lib/whatsapp.ts
const WHATSAPP_NUMBER = "6282187792052";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
