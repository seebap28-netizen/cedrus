import { site } from "@/lib/site";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M14.5 8.5V6.7c0-.7.5-1.2 1.2-1.2H17V3h-2.3C12.4 3 11 4.6 11 6.8V8.5H9v2.7h2V21h3.5v-9.8h2.3l.5-2.7h-2.8Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm0 2C5.7 4 4 5.7 4 7.8v8.4C4 18.3 5.7 20 7.8 20h8.4c2.1 0 3.8-1.7 3.8-3.8V7.8C20 5.7 18.3 4 16.2 4H7.8Zm9.65 1.5a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.82c4.46 0 8.09 3.63 8.09 8.09 0 4.46-3.63 8.09-8.09 8.09-1.42 0-2.8-.37-4.01-1.06l-.29-.17-3.12.82.83-3.04-.18-.31a8.07 8.07 0 0 1-1.23-4.33c0-4.46 3.63-8.09 8.09-8.09Zm4.59 11.4c-.25-.13-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.12-.12.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74 1.76.76 2.12.83 2.56.7.44-.13 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.3Z" />
    </svg>
  );
}

const iconClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 text-gold transition hover:bg-gold hover:text-cedar-deep";

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={site.facebookUrl}
        target="_blank"
        rel="noreferrer"
        className={iconClass}
        aria-label="Facebook de Cedrus"
      >
        <FacebookIcon />
      </a>
      <a
        href={site.instagramUrl}
        target="_blank"
        rel="noreferrer"
        className={iconClass}
        aria-label="Instagram de Cedrus"
      >
        <InstagramIcon />
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer"
        className={iconClass}
        aria-label="WhatsApp de Cedrus"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
