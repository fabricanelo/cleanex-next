import Image from "next/image";
import Container from "@/components/ui/Container";
import { IconArrowRight } from "@/components/ui/Icon";

type ServiceSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

type ServiceImage = {
  src: string;
  alt: string;
};

interface ServiceDetailProps {
  title: string;
  sections: ServiceSection[];
  images: ServiceImage[];
  mailto?: string;
}

export default function ServiceDetail({
  title,
  sections,
  images,
  mailto = "comercial@cleanexargentina.com",
}: ServiceDetailProps) {
  return (
    <main className="py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          Servicios
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-bold text-gray-900">
          {title}
        </h1>

        <div className="mt-12 max-w-4xl space-y-10">
          {sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="text-2xl font-semibold text-gray-900">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs?.map((p, j) => (
                <p
                  key={j}
                  className={`leading-relaxed text-gray-600 ${
                    section.heading || j > 0 ? "mt-4" : ""
                  }`}
                >
                  {p}
                </p>
              ))}

              {section.list && (
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <a
          href={`mailto:${mailto}`}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--primary-dark)]"
        >
          Solicitar más información
          <IconArrowRight className="h-4 w-4" />
        </a>

        {images.length > 0 && (
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {images.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}
