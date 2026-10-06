import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const variants = {
  primary:
    "bg-orange text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2",
  ghost:
    "border border-line bg-white text-navy hover:bg-line/60 focus-visible:ring-2 focus-visible:ring-orange",
} as const;

type ButtonProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  href?: string;
} & Omit<ComponentProps<"button">, "className" | "children">;

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium outline-none transition-opacity ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
