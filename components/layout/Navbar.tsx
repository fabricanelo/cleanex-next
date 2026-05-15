import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/">
          <Image
            src="/logos/cleanex-logo.svg"
            alt="Cleanex Argentina"
            width={240}
            height={80}
            priority
            className="h-auto w-[180px] md:w-[220px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link className="transition hover:text-[var(--primary)]" href="/">
            Inicio
          </Link>

          <Link className="transition hover:text-[var(--primary)]" href="/empresa">
            Empresa
          </Link>

          <Link className="transition hover:text-[var(--primary)]" href="/servicios">
            Servicios
          </Link>

          <Link className="transition hover:text-[var(--primary)]" href="/contacto">
            Contacto
          </Link>

          <Link className="transition hover:text-[var(--primary)]" href="/dejanos-tu-cv">
            Dejanos tu CV
          </Link>
        </nav>
      </Container>
    </header>
  );
}