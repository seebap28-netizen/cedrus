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
    </div>
  );
}
