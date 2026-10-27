"use client";

import { FocusEvent, ReactNode } from "react";

interface MarqueeViewportProps {
  children: ReactNode;
  className?: string;
}

// Al navegar con teclado, el navegador desplaza el contenedor para mostrar
// el logo enfocado. Cuando el foco sale del carrusel se vuelve a cero para
// que la animación siga empalmando sin huecos. Con movimiento reducido no hay
// animación y el desplazamiento es manual, así que se respeta.
export default function MarqueeViewport({
  children,
  className = "",
}: MarqueeViewportProps) {
  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!reducedMotion && !event.currentTarget.contains(event.relatedTarget)) {
      event.currentTarget.scrollLeft = 0;
    }
  }

  return (
    <div className={className} onBlur={handleBlur}>
      {children}
    </div>
  );
}
