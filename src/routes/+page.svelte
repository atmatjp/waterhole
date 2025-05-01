<script lang="ts">
  import { onMount } from "svelte";

  onMount(async () => {
    const L = await import("leaflet");
    await import("leaflet/dist/leaflet.css");

    const map = L.map("map").setView([34.649, 135.3834], 17);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);
  });
</script>

<div id="map"></div>

<style>
  #map {
    height: 100vh;
  }
</style>
