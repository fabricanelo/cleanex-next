export interface Cliente {
  nombre: string;
  // Archivo dentro de /public/images/clients. Sin logo se muestra una
  // tarjeta tipográfica con el nombre.
  logo?: string;
  // Sin URL la tarjeta se muestra sin enlace.
  url?: string;
  // Corrige el tamaño visual en el carrusel de logos sin margen propio (default 1).
  escala?: number;
}

// Cifra comercial que se muestra en el título "N empresas confían en
// nosotros". Pendiente de validación comercial: no implica que todos los
// clientes del listado estén activos, por eso no se calcula desde `clientes`.
export const cantidadClientesConfianza = 30;

export const mensajeConfianza =
  "La confianza de nuestros clientes respalda nuestra experiencia y compromiso con cada proyecto.";

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
  // Logos oficiales: Basile, Granix y Nestlé desde sus sitios (al de Nestlé se
  // le recortó el eslogan del viewBox); Marolio desde Wikimedia Commons, tomado
  // de fundacionmarolio.org.ar. Sin margen propio, por eso llevan `escala`.
  { nombre: "Molinos Basile", logo: "molinos-basile.png", url: "https://molinosbasile.com.ar/es/", escala: 0.72 },
  // Tarjeta tipográfica: no se usa el logo de Inca. Sin sitio confirmado.
  { nombre: "Alimentos Premium S.A." },
  { nombre: "Nestlé", logo: "nestle.svg", url: "https://www.nestle.com.ar/", escala: 0.72 },
  { nombre: "Granix", logo: "granix.png", url: "https://granix.com.ar/", escala: 0.62 },
  // El certificado https del sitio venció el 19/10/2026; revisar si lo renuevan.
  { nombre: "Marolio", logo: "marolio.png", url: "https://www.marolio.com.ar/", escala: 0.62 },
];
