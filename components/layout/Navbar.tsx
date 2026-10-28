"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { IconChevronDown, IconClose, IconMenu } from "@/components/ui/Icon";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Empresa", href: "/empresa" },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Higiene en espacios confinados", href: "/servicios/higiene-en-espacios-confinados" },
      { label: "Limpieza y mantenimiento industrial", href: "/servicios/limpieza-y-mantenimiento-industrial" },
      { label: "Montaje y reparación de plantas de silos", href: "/servicios/montaje-y-reparacion-de-plantas-de-silos" },
      { label: "Limpieza de ductos y campanas industriales", href: "/servicios/limpieza-de-ductos-y-campanas-industriales" },
    ],
  },
  {
    label: "Galería",
    href: "/galeria",
    children: [
      { label: "Aspiración industrial", href: "/galeria/aspiracion-industrial" },
      { label: "Ductos, campanas y hornos industriales", href: "/galeria/ductos-campanas-y-hornos-industriales" },
      { label: "Limpieza industrial", href: "/galeria/limpieza-industrial" },
      { label: "Limpieza de silos industrial", href: "/galeria/limpieza-de-silos-industrial" },
      { label: "Limpieza de silos particulares", href: "/galeria/limpieza-de-silos-particulares" },
      { label: "Limpieza de filtros", href: "/galeria/limpieza-de-filtros" },
      { label: "Hidrolavado", href: "/galeria/hidrolavado" },
      { label: "Pequeñas refacciones", href: "/galeria/pequenas-refacciones" },
    ],
  },
  { label: "Clientes", href: "/clientes" },
  { label: "Novedades", href: "/novedades" },
  { label: "Contacto", href: "/contacto" },
  { label: "Dejanos tu CV", href: "/dejanos-tu-cv" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <Container wide className="flex h-20 items-center justify-between">
        <Link href="/" onClick={closeMobile}>
          <Image
            src="/logos/cleanex-logo.svg"
            alt="Cleanex Argentina"
            width={240}
            height={80}
            priority
            className="h-auto w-[180px] md:w-[220px]"
          />
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium lg:flex">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3 py-8 transition hover:text-[var(--primary-dark)]"
              >
                {item.label}
                {item.children && (
                  <IconChevronDown className="h-3.5 w-3.5 transition duration-200 group-hover:rotate-180" />
                )}
              </Link>

              {item.children && (
                <div className="invisible absolute left-0 top-full z-10 min-w-[300px] -translate-y-2 rounded-2xl border border-gray-200 bg-white p-2 opacity-0 shadow-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-xl px-4 py-3 text-gray-700 transition hover:bg-gray-50 hover:text-[var(--primary-dark)]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-gray-200 bg-white lg:hidden">
          <Container wide className="flex flex-col py-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-gray-100 last:border-none">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="flex-1 py-3 font-medium text-gray-900"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <button
                      type="button"
                      className="p-3 text-gray-500"
                      aria-label={`Mostrar submenú de ${item.label}`}
                      aria-expanded={openSubmenu === item.label}
                      onClick={() =>
                        setOpenSubmenu((v) => (v === item.label ? null : item.label))
                      }
                    >
                      <IconChevronDown
                        className={`h-4 w-4 transition duration-200 ${
                          openSubmenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.children && openSubmenu === item.label && (
                  <div className="flex flex-col gap-1 pb-3 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50"
                        onClick={closeMobile}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
