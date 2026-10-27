export interface Cliente {
  nombre: string;
  // Archivo dentro de /public/images/clients
  logo: string;
  url: string;
  // Corrige el tamaño visual en el carrusel de logos sin margen propio (default 1).
  escala?: number;
}

// Orden original de /clientes. Fuente única para /clientes y el carrusel del inicio.
export const clientes: Cliente[] = [
  { nombre: "La Piamontesa", logo: "la-piamontesa.png", url: "https://www.lapiamontesa.com/", escala: 0.7 },
  { nombre: "Electrolux", logo: "electrolux.png", url: "https://www.electrolux.com.ar/", escala: 0.75 },
  { nombre: "Molino Argentino S.A.", logo: "molino-argentino.jpg", url: "https://www.molinoargentino.com.ar/" },
  { nombre: "Boortmalt", logo: "boortmalt.jpg", url: "https://www.boortmalt.com/" },
  { nombre: "Agroideas S.A.", logo: "agroideas.png", url: "https://www.agroideassa.com.ar/" },
  // Trigalia es actualmente una marca de Molino Cañuelas.
  { nombre: "Trigalia", logo: "web-01.jpg", url: "https://www.molinocanuelas.com/es/nuestras-marcas" },
  { nombre: "COFCO Agri", logo: "web-02.jpg", url: "https://ar.cofcointernational.com/" },
  // El logo es de AFA (Agricultores Federados Argentinos), no de ACA.
  { nombre: "AFA - Agricultores Federados Argentinos", logo: "web-03.jpg", url: "https://www.afascl.coop/" },
  // cargill.com.ar redirige por http a este dominio.
  { nombre: "Cargill", logo: "web-04.jpg", url: "https://www.cargillargentina.com.ar/" },
  // Sitio de la empresa brasileña; no hay sitio vigente de la operación argentina histórica.
  { nombre: "Petrobras", logo: "web-05.jpg", url: "https://petrobras.com.br/" },
  // nidera.com.ar no responde; la marca continúa en Nidera Semillas.
  { nombre: "Nidera", logo: "web-06.jpg", url: "https://niderasemillas.com.ar/" },
  { nombre: "Molinos Río de la Plata", logo: "web-07.jpg", url: "https://www.molinos.com.ar/" },
  { nombre: "General Motors", logo: "web-08.jpg", url: "https://www.gm.com/" },
  { nombre: "Molino Cañuelas", logo: "web-09.jpg", url: "https://www.molinocanuelas.com/" },
  { nombre: "Cooperativa Agrícola Ganadera Los Molinos", logo: "logos-10.jpg", url: "https://www.coop-losmolinos.com.ar/" },
  { nombre: "Aramark", logo: "logos-11.jpg", url: "https://www.aramark.ar/" },
  { nombre: "Pampa Energía", logo: "logos-12.jpg", url: "https://pampa.com/" },
  { nombre: "Molinos Agro", logo: "logos-13.jpg", url: "https://molinosagro.com.ar/" },
  { nombre: "Eternit", logo: "logos-14.jpg", url: "https://www.eternit.com.ar/es-AR/" },
  { nombre: "Vicentin", logo: "logos-15.jpg", url: "https://www.vicentin.com.ar/" },
  { nombre: "Oxbow", logo: "logos-16.jpg", url: "https://www.oxbow.com/" },
  { nombre: "Campo Austral", logo: "clientes-02.jpg", url: "https://campoaustral.com.ar/" },
  { nombre: "Grupo Estisol", logo: "clientes-03.jpg", url: "https://grupoestisol.com/" },
  { nombre: "Pronexo", logo: "clientes-04.jpg", url: "https://www.pro-nexo.com/" },
  { nombre: "Coca-Cola Andina", logo: "clientes-mesa-trabajo-1.jpg", url: "https://www.koandina.com/" },
];
