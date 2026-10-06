import Link from "next/link";

const baseClass =
  "inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium outline-none transition-opacity";

const availableClass =
  "bg-navy text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2";

const disabledClass = "cursor-not-allowed bg-line text-muted";

type DealCtaProps = {
  href: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  external?: boolean;
};

export function DealCta({
  href,
  label = "Bekijk deal",
  className = "",
  disabled = false,
  external = false,
}: DealCtaProps) {
  const classes = `${baseClass} ${disabled ? disabledClass : availableClass} ${className}`;

  if (disabled) {
    return (
      <span className={classes} aria-disabled="true">
        Niet beschikbaar
      </span>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}
