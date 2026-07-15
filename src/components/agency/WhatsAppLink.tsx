// src/components/agency/WhatsAppLink.tsx
"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { whatsappUrl } from "@/lib/whatsapp";

export default function WhatsAppLink({
  message,
  source,
  className,
  children,
  onClick,
}: {
  message: string;
  source: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        sendGAEvent("event", "whatsapp_click", { source });
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
