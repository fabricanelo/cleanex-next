import ServiceDetail from "@/components/sections/ServiceDetail";

export default function HigieneEspaciosConfinadosPage() {
  return (
    <ServiceDetail
      title="Higiene en espacios confinados"
      sections={[
        {
          paragraphs: [
            "La industria alimentaria y agroalimentaria pertenece a un mercado que hoy en día a nivel mundial exige de forma progresiva diferentes normas de seguridad e inocuidad en sus productos. CLEANEX ARGENTINA asiste para alcanzar estos diversos estándares de calidad sugiriendo sistemas de desbloqueo, higienización y mantenimiento frecuencial de los distintos recintos según como se presente el caso.",
          ],
        },
        {
          heading: "¿Cómo trabajamos?",
          paragraphs: [
            "El sistema de limpieza utilizado es en seco de forma manual y mecánica. Nos especializamos en trabajos verticales donde los operarios que se introducen en los recintos están equipados con sus respectivos elementos de protección personal, herramientas y equipos necesarios para garantizar su seguridad y una óptima limpieza desde el interior.",
            "Es importante remarcar que nuestro personal se encuentra en constante capacitación y entrenamiento para desempeñar tareas de riesgo y/o altura.",
          ],
        },
        {
          heading: "Realizamos limpiezas técnicas de los siguientes espacios confinados",
          paragraphs: [
            "Silos de: Cereales / Harinas / Alimentos / Semillas / Azúcar / Arroz / Cebada / Grasa / Aceites / Jarabe / Sílice / Arena / Cemento / Pellets.",
          ],
          list: [
            "Entresilos (Intrebings)",
            "Tolvas",
            "Celdas",
            "Secadoras",
            "Cernidores",
            "Norias",
            "Tanques",
            "Otros",
          ],
        },
      ]}
      images={[
        { src: "/images/gallery/limpieza-de-silos-industrial/35.jpg", alt: "Limpieza de silos industrial" },
        { src: "/images/gallery/limpieza-de-silos-industrial/26.jpg", alt: "Limpieza de silos industrial" },
        { src: "/images/gallery/limpieza-de-filtros/5.jpg", alt: "Limpieza de filtros" },
        { src: "/images/gallery/limpieza-de-silos-industrial/46.jpg", alt: "Limpieza de silos industrial" },
        { src: "/images/gallery/limpieza-de-silos-industrial/9.jpg", alt: "Limpieza de silos industrial" },
        { src: "/images/gallery/limpieza-de-silos-industrial/38.jpg", alt: "Limpieza de silos industrial" },
        { src: "/images/gallery/limpieza-de-silos-industrial/40.jpg", alt: "Limpieza de silos industrial" },
      ]}
    />
  );
}
