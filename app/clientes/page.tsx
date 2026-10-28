import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import {
  cantidadClientesConfianza,
  clientes,
  mensajeConfianza,
} from "@/lib/clientes-data";

export default function ClientesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Clientes"
        title="Clientes"
        description="Trabajamos con diversas plantas de silos y campos, en todo el país."
      />

      <section className="py-20">
        <Container>
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {cantidadClientesConfianza} empresas confían en nosotros
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {mensajeConfianza}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {clientes.map((cliente) => (
              <div
                key={cliente.nombre}
                className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-gray-200 bg-white p-6"
              >
                {cliente.logo ? (
                  <Image
                    src={`/images/clients/${cliente.logo}`}
                    alt={`Logo de ${cliente.nombre}`}
                    width={200}
                    height={150}
                    className="h-full w-full object-contain"
                    style={
                      cliente.escala
                        ? { transform: `scale(${cliente.escala})` }
                        : undefined
                    }
                  />
                ) : (
                  <span className="text-center text-sm font-bold uppercase leading-snug tracking-[0.15em] text-gray-800 md:text-base">
                    {cliente.nombre}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
