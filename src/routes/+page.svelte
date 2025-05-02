<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import MapView from "$lib/components/MapView.svelte";
  import FilterMenu from "$lib/components/FilterMenu.svelte";
  import easttoilet from "$lib/data/toilet/toilet-east.json";
  import westtoilet from "$lib/data/toilet/toilet-west.json";
  import underRingToilet from "$lib/data/toilet/toilet-underRing.json";
  import outsideRingtoilet from "$lib/data/toilet/toilet-outsideRing.json";
  import insideRingtoilet from "$lib/data/toilet/toilet-insideRing.json";
  import vending from "$lib/data/vending.json";
  import type { Pavilion } from "$lib/types";

  $: categories =
    mode === "トイレ"
      ? ["男女兼用トイレ", "一般トイレ", "車椅子トイレ", "すべて"]
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

  function handleModeChange(event: Event) {
    mode = (event.target as HTMLSelectElement).value;
    filter = "すべて";
  }
</script>

<Header />
<div class="mode-selector">
  <label for="mode">モードを選択:</label>
  <select id="mode" bind:value={mode} on:change={handleModeChange}>
    <option value="トイレ">トイレ</option>
    <option value="自販機">自販機</option>
  </select>
</div>
<FilterMenu {filter} {categories} onChange={handleFilterChange} />
<MapView {pavilions} {filter} />

<style>
  .mode-selector {
    font-size: 1.2em;
    position: absolute;
    bottom: 100px;
    left: 30px;
    z-index: 1002;
    background: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
</style>
