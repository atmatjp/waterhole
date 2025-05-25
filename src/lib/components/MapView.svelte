<script lang="ts">
  import { onMount } from "svelte";
  import type { Pavilion } from "$lib/types";
  export let pavilions: Pavilion[] = [];
  export let filter: string;

  let map: any;
  let L: any;
  let markers: any[] = [];
  let userMarker: any;

  onMount(async () => {
    L = await import("leaflet");
    await import("leaflet/dist/leaflet.css");

    map = L.map("map").setView([34.649, 135.3834], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    updateMarkers();
  });

  $: if (map && pavilions && filter !== undefined) {
    updateMarkers();
  }

  const availableCategories = [
    ...new Set(pavilions.map((p) => p.category).filter(Boolean)),
  ];

  function updateMarkers() {
    if (!map) return;

    markers.forEach((marker) => map.removeLayer(marker));
    markers = [];

    const filtered = pavilions.filter((p) => {
      if (filter === "すべて") return true;

      if (availableCategories.includes(filter)) {
        return p.category === filter;
      }
      return false;
    });

    filtered.forEach((pavilion) => {
      const icon = L.icon({
        iconUrl: `/marker/${pavilion.iconColor || "gray"}.png`,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: "/marker/shadow.png",
        shadowSize: [41, 41],
        shadowAnchor: [12, 41],
      });

      const marker = L.marker([pavilion.lat, pavilion.lng], { icon }).addTo(map)
        .bindPopup(`
    <div>
      <strong>${pavilion.name}</strong><br />
      <p>売っているもの: ${pavilion.category}</p>
      ${pavilion.count ? `<p>台数: ${pavilion.count}</p>` : ""}
      ${pavilion.payment?.length ? `<p>決済方法: ${pavilion.payment.join("・")}</p>` : ""}
      ${pavilion.features?.length ? `<p>設備: ${pavilion.features.join("・")}</p>` : ""}
    </div>
  `);
      markers.push(marker);
    });

    map.on("popupopen", () => {
      document.querySelectorAll(".popup-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = (e.target as HTMLElement).getAttribute("data-id");
          console.log("Clicked pavilion ID:", id);
        });
      });
    });
  }

  function locateUser() {
    if (!map) return;
    if (!navigator.geolocation) {
      console.error("Geolocation API がサポートされていません");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        if (!userMarker) {
          userMarker = L.marker([latitude, longitude], {
            icon: L.icon({
              iconUrl: "/marker/blue.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              shadowUrl: "/marker/shadow.png",
              shadowSize: [41, 41],
              shadowAnchor: [12, 41],
            }),
          })
            .addTo(map)
            .bindPopup("あなたの現在地です")
            .openPopup();
        } else {
          userMarker.setLatLng([latitude, longitude]).openPopup();
        }

        map.setView([latitude, longitude], 18);
      },
      (error) => {
        console.error("現在地の取得に失敗しました:", error.message);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 10000,
      }
    );
  }
</script>

<div id="map"></div>
<button
  class="locate-button"
  on:click={() => {
    console.log("clicked");
    locateUser();
  }}
>
  現在地
</button>

<style>
  #map {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .locate-button {
    position: absolute;
    top: 150px;
    left: 10px;
    z-index: 1002;
    padding: 1em;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    pointer-events: auto;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  .locate-button {
    touch-action: manipulation;
    cursor: pointer;
  }
</style>
