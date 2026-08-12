import Link from "next/link";
import Container from "@/components/ui/Container";

export default function GraciasPage() {
  return (
    <main className="flex min-h-[60vh] items-center py-24">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          Gracias
        </p>

        <h1 className="mt-4 text-4xl font-bold text-gray-900">
          Recibimos tu mensaje
        </h1>

        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-gray-600">
          Nos pondremos en contacto a la brevedad. Mientras tanto, podés
          seguir recorriendo el sitio.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--primary-dark)]"
        >
          Volver al inicio
        </Link>
      </Container>
    </main>
  );
}
