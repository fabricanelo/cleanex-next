import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import { clientes } from "@/lib/clientes-data";

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
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {clientes.map((cliente) => (
              <div
                key={cliente.logo}
                className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-gray-200 bg-white p-6"
              >
                <Image
                  src={`/images/clients/${cliente.logo}`}
                  alt={`Logo de ${cliente.nombre}`}
                  width={200}
                  height={150}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
