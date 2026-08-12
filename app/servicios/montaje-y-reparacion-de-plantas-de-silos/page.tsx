import ServiceDetail from "@/components/sections/ServiceDetail";

export default function MontajeYReparacionDePlantasDeSilosPage() {
  return (
    <ServiceDetail
      title="Montaje y reparación de plantas de silos y estructuras metálicas"
      sections={[
        {
          heading: "Realizamos",
          list: [
            "Montaje y reparación de plantas de silos, galpones y tinglados",
            "Fabricación de estructuras metálicas: norias, sinfines, comederos",
            "Mecanizaciones",
            "Fabricación e instalación de sistemas de aireación y ventilación de silos",
            "Traslados de plantas de silos de un sitio a otro",
          ],
        },
        {
          paragraphs: [
            "Hoy en día es importante para el sector del agro contar con una planta de silos mecanizada y realizar un correcto mantenimiento de la misma, para agilizar así el proceso productivo que se demanda y hacerlo de forma eficiente, favoreciendo la conservación y calidad de los granos tanto en el período de acopio como durante el despacho.",
            "También contamos con sistemas que permiten prevenir la elevación de la temperatura del acopio y evitar posibles focos de incendio.",
            "Además, nuestro personal cuenta con años de experiencia en este rubro y se encuentra altamente capacitado para brindar un servicio de excelencia.",
          ],
        },
      ]}
      images={[
        { src: "/images/gallery/limpieza-industrial/3.jpg", alt: "Montaje y reparación de plantas de silos" },
        { src: "/images/gallery/limpieza-de-silos-industrial/11.jpg", alt: "Limpieza de silos industrial" },
        { src: "/images/gallery/limpieza-de-silos-particulares/6.jpg", alt: "Limpieza de silos particulares" },
        { src: "/images/gallery/limpieza-de-silos-industrial/41.jpg", alt: "Limpieza de silos industrial" },
        { src: "/images/gallery/limpieza-de-silos-industrial/22.jpg", alt: "Limpieza de silos industrial" },
        { src: "/images/gallery/aspiracion-industrial/6.jpg", alt: "Aspiración industrial" },
        { src: "/images/gallery/limpieza-de-silos-industrial/3.jpg", alt: "Limpieza de silos industrial" },
      ]}
    />
  );
}
