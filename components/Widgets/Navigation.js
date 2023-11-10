"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = ({ navLinks }) => {
  const pathname = usePathname();
  return (
      <nav
        className="flex items-center gap-[31px] sm:gap-10
    text-sm font-medium leading-[14px] tracking-tight text-headers sm:text-lg"
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          const linkClass = isActive ? "border-b-4 border-primary text-primary font-semibold" : "";
          return (
            <Link key={link.label} href={link.href}>
              <div className={`hover:text-primary py-[39px] ${linkClass}`}>{link.label}</div>
            </Link>
          );
        })}
      </nav>
  );
};
