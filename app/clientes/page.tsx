import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

const logos = [
  "la-piamontesa.png",
  "electrolux.png",
  "molino-argentino.jpg",
  "boortmalt.jpg",
  "agroideas.png",
  "web-01.jpg",
  "web-02.jpg",
  "web-03.jpg",
  "web-04.jpg",
  "web-05.jpg",
  "web-06.jpg",
  "web-07.jpg",
  "web-08.jpg",
  "web-09.jpg",
  "logos-10.jpg",
  "logos-11.jpg",
  "logos-12.jpg",
  "logos-13.jpg",
  "logos-14.jpg",
  "logos-15.jpg",
  "logos-16.jpg",
  "clientes-02.jpg",
  "clientes-03.jpg",
  "clientes-04.jpg",
  "clientes-mesa-trabajo-1.jpg",
];

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
            {logos.map((logo) => (
              <div
                key={logo}
                className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-gray-200 bg-white p-6"
              >
                <Image
                  src={`/images/clients/${logo}`}
                  alt="Logo de cliente de Cleanex Argentina"
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
