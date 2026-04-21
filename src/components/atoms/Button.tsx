"use client";

import { motion } from "framer-motion";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "ghost";
  className?: string;
  href: string;
  children: ReactNode;
  ariaLabel?: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function Button({
  variant = "primary",
  className = "",
  href,
  children,
  ariaLabel,
  target,
  rel,
  onClick,
}: ButtonProps) {
  const shared =
    "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const palette =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-strong"
      : "border border-stroke bg-white/85 text-foreground hover:bg-slate-100";

  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      href={href}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`${shared} ${palette} ${className}`}
    >
      {children}
    </motion.a>
  );
}
