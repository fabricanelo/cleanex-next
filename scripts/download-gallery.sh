#!/bin/bash
set -e
BASE="https://cleanexargentina.com/wp-content/uploads/2021/11"
OUT="public/images/gallery"

download_series() {
  local urlname="$1"
  local slug="$2"
  local count="$3"
  for i in $(seq 1 "$count"); do
    src="${BASE}/${urlname}-${i}-400x284.jpg"
    dest="${OUT}/${slug}/${i}.jpg"
    if [ ! -f "$dest" ]; then
      curl -s -o "$dest" "$src"
    fi
  done
  echo "done: $slug ($count)"
}

download_series "Aspiraci%C3%B3n-Industrial" "aspiracion-industrial" 7
download_series "Ductos-y-campanas-y-hornos-industriales" "ductos-campanas-y-hornos-industriales" 20
download_series "Limpieza-industrial" "limpieza-industrial" 35
download_series "Limpieza-de-silos-Industrial" "limpieza-de-silos-industrial" 50
download_series "Limpieza-de-silos-particulares" "limpieza-de-silos-particulares" 7
download_series "Limpieza-de-filtros" "limpieza-de-filtros" 6
download_series "Hidrolavado" "hidrolavado" 5
download_series "Peque%C3%B1as-Refacciones" "pequenas-refacciones" 9
