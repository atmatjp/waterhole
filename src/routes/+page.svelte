<script lang="ts">
  import { onMount } from "svelte";
  import { pavilions } from "$lib/pavilions";
  import "../app.css";
  import Header from "$lib/components/Header.svelte"; // ←追加

  let menuOpen = false;

  onMount(async () => {
    const L = await import("leaflet");
    await import("leaflet/dist/leaflet.css");

    const map = L.map("map").setView([34.649, 135.3834], 17);

    const customIcon = L.icon({
      iconUrl: "/static/red.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: "/static/marker-shadow.png",
      shadowSize: [41, 41],
    });

    pavilions.forEach((pavilion) => {
      L.marker([pavilion.lat, pavilion.lng])
        .addTo(map)
        .bindPopup(
          `<button class="popup-btn" data-id="${pavilion.id}">${pavilion.name}</button>`
        );
    });

    map.on("popupopen", () => {
      document.querySelectorAll(".popup-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = (e.target as HTMLElement).getAttribute("data-id");
          console.log("Clicked pavilion ID:", id);
        });
      });
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);
  });
</script>

<div id="map"></div>
