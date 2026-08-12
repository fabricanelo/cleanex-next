import ServiceDetail from "@/components/sections/ServiceDetail";

export default function LimpiezaDeDuctosYCampanasIndustrialesPage() {
  return (
    <ServiceDetail
      title="Limpieza de ductos y campanas industriales"
      sections={[
        {
          heading: "CLEANEX realiza limpiezas de",
          list: ["Ductos", "Campanas", "Extractores"],
        },
        {
          paragraphs: [
            "Es importante realizar esta limpieza en los conductos de ventilación y cocinas industriales de forma periódica para evitar un posible riesgo de incendio, malos olores y no acumular contaminantes y residuos que podrían incidir directamente en la calidad de los productos.",
            "Una correcta higienización y posterior mantenimiento frecuencial garantizan un mejor funcionamiento de los extractores y también es una estrategia fundamental para evitar posibles focos de incendios causados por este depósito de residuos.",
          ],
        },
      ]}
      images={[
        { src: "/images/gallery/ductos-campanas-y-hornos-industriales/12.jpg", alt: "Ductos, campanas y hornos industriales" },
        { src: "/images/gallery/ductos-campanas-y-hornos-industriales/5.jpg", alt: "Ductos, campanas y hornos industriales" },
        { src: "/images/gallery/ductos-campanas-y-hornos-industriales/17.jpg", alt: "Ductos, campanas y hornos industriales" },
        { src: "/images/gallery/ductos-campanas-y-hornos-industriales/15.jpg", alt: "Ductos, campanas y hornos industriales" },
        { src: "/images/gallery/ductos-campanas-y-hornos-industriales/16.jpg", alt: "Ductos, campanas y hornos industriales" },
        { src: "/images/gallery/ductos-campanas-y-hornos-industriales/8.jpg", alt: "Ductos, campanas y hornos industriales" },
        { src: "/images/gallery/ductos-campanas-y-hornos-industriales/2.jpg", alt: "Ductos, campanas y hornos industriales" },
      ]}
    />
  );
}
