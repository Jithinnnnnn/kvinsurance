import type { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function DisplayTitle({ children, className = "", id }: TextProps) {
  return (
    <h1
      id={id}
      className={`text-[clamp(2.875rem,7vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em] text-foreground ${className}`}
    >
      {children}
    </h1>
  );
}

export function SectionTitle({ children, className = "", id }: TextProps) {
  return (
    <h2 id={id} className={`text-[clamp(2rem,4vw,2.5rem)] font-semibold leading-tight tracking-[-0.01em] ${className}`}>
      {children}
    </h2>
  );
}

export function BodyText({ children, className = "" }: TextProps) {
  return <p className={`text-lg leading-[1.6] text-muted ${className}`}>{children}</p>;
}
