<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import MapView from "$lib/components/MapView.svelte";
  import FilterMenu from "$lib/components/FilterMenu.svelte";
  import ModeSelector from "$lib/components/ModeSelector.svelte";
  import easttoilet from "$lib/data/toilet/toilet-east.json";
  import westtoilet from "$lib/data/toilet/toilet-west.json";
  import underRingToilet from "$lib/data/toilet/toilet-underRing.json";
  import outsideRingtoilet from "$lib/data/toilet/toilet-outsideRing.json";
  import insideRingtoilet from "$lib/data/toilet/toilet-insideRing.json";
  import vending from "$lib/data/vending.json";
  import type { Pavilion } from "$lib/types";

  $: categories =
    mode === "トイレ"
      ? ["車椅子トイレ", "男女兼用トイレ", "男女別トイレのみ", "すべて"]
      : ["飲料", "すべて"];

  let filter = "すべて";
  let mode = "トイレ";

  $: pavilions =
    mode === "トイレ"
      ? [
          ...(easttoilet as Pavilion[]),
          ...(westtoilet as Pavilion[]),
          ...(insideRingtoilet as Pavilion[]),
          ...(outsideRingtoilet as Pavilion[]),
          ...(underRingToilet as Pavilion[]),
        ]
      : (vending as Pavilion[]);

  function handleFilterChange(value: string) {
    filter = value;
  }

  function handleModeChange(value: string) {
    mode = value;
    filter = "すべて";
  }
</script>

<Header />
<ModeSelector {mode} onChange={handleModeChange} />
<FilterMenu {filter} {categories} onChange={handleFilterChange} />
<MapView {pavilions} {filter} />

<style>
</style>
