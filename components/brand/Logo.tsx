import Link from "next/link";

type LogoProps = {
  size?: "header" | "hero";
  href?: string;
};

const sizes = {
  header: {
    mark: 32,
    word: "text-lg",
    gap: "gap-2.5",
  },
  hero: {
    mark: 48,
    word: "text-2xl sm:text-3xl",
    gap: "gap-3",
  },
} as const;

export function Logo({ size = "header", href = "/" }: LogoProps) {
  const { mark, word, gap } = sizes[size];

  return (
    <Link
      href={href}
      className={`inline-flex items-center ${gap} text-navy outline-none focus-visible:ring-2 focus-visible:ring-orange`}
      aria-label="PadelDealz"
    >
      <LogoMark size={mark} />
      <span className={`${word} font-semibold tracking-tight`}>PadelDealz</span>
    </Link>
  );
}

function LogoMark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="14" cy="14" r="8.25" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M20.2 20.2 27 27"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M10.2 14.2 13.1 17l5.2-6.2"
        stroke="#FF6A00"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
