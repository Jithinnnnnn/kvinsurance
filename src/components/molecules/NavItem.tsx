import type { NavLink } from "@/core/types/content";

type NavItemProps = {
  link: NavLink;
};

export function NavItem({ link }: NavItemProps) {
  return (
    <a
      href={link.href}
      className="text-sm font-medium text-foreground/80 transition-colors duration-300 hover:text-foreground"
    >
      {link.label}
    </a>
  );
}
