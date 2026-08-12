export interface GaleriaCategoria {
  slug: string;
  titulo: string;
  cantidad: number;
}

export const galeriaCategorias: GaleriaCategoria[] = [
  { slug: "aspiracion-industrial", titulo: "Aspiración industrial", cantidad: 7 },
  {
    slug: "ductos-campanas-y-hornos-industriales",
    titulo: "Ductos, campanas y hornos industriales",
    cantidad: 20,
  },
  { slug: "limpieza-industrial", titulo: "Limpieza industrial", cantidad: 35 },
  {
    slug: "limpieza-de-silos-industrial",
    titulo: "Limpieza de silos industrial",
    cantidad: 50,
  },
  {
    slug: "limpieza-de-silos-particulares",
    titulo: "Limpieza de silos particulares",
    cantidad: 7,
  },
  { slug: "limpieza-de-filtros", titulo: "Limpieza de filtros", cantidad: 6 },
  { slug: "hidrolavado", titulo: "Hidrolavado", cantidad: 5 },
  { slug: "pequenas-refacciones", titulo: "Pequeñas refacciones", cantidad: 9 },
];

export function getGaleriaCategoria(slug: string) {
  return galeriaCategorias.find((categoria) => categoria.slug === slug);
}

export function getGaleriaImagenes(categoria: GaleriaCategoria) {
  return Array.from({ length: categoria.cantidad }, (_, i) => {
    const n = i + 1;
    return {
      src: `/images/gallery/${categoria.slug}/${n}.jpg`,
      alt: `${categoria.titulo} ${n}`,
    };
  });
}
