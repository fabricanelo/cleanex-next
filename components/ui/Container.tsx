import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  // Ancho ampliado (1536px) para navbar y footer; las secciones usan el default.
  wide?: boolean;
}

export default function Container({
  children,
  className = "",
  wide = false,
}: ContainerProps) {
  const width = wide ? "max-w-screen-2xl xl:px-10" : "max-w-7xl";

  return (
    <div className={`mx-auto px-6 ${width} ${className}`}>
      {children}
    </div>
  );
}
