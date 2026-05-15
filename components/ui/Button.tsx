import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "light";
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]",
    secondary:
      "border border-gray-300 text-gray-900 hover:bg-gray-100",
    light:
      "bg-white text-[var(--primary-dark)] hover:opacity-90",
  };

  return (
    <a
      href={href}
      className={`inline-flex rounded-full px-6 py-3 font-semibold transition ${styles[variant]}`}
    >
      {children}
    </a>
  );
}