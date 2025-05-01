import type { Pavilion } from './pavilions';

export function addPavilionMarkers(map: L.Map, pavilions: Pavilion[], onClick: (id: string) => void) {
  pavilions.forEach((pavilion) => {
    const color = pavilion.iconColor || 'blue'; // デフォルト: blue

    const icon = L.icon({
      iconUrl: `/static/marker-icon-${color}.png`,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: '/static/marker-shadow.png',
      shadowSize: [41, 41],
    });

    L.marker([pavilion.lat, pavilion.lng], { icon })
      .addTo(map)
      .bindPopup(`<button class="popup-btn" data-id="${pavilion.id}">${pavilion.name}</button>`);
  });

  map.on('popupopen', () => {
    document.querySelectorAll('.popup-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = (e.target as HTMLElement).dataset.id;
        if (id) onClick(id);
      });
    });
  });
}