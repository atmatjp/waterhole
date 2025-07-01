<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import MapView from "$lib/components/MapView.svelte";
  import FilterMenu from "$lib/components/FilterMenu.svelte";
  import vending from "$lib/data/vending.json";
  import type { Pavilion } from "$lib/types";

  let filter = "すべて";
  const pavilions = vending as Pavilion[];

  const categories = [
    "すべて",
    ...Array.from(
      new Set(pavilions.map((p) => p.category).filter((c): c is string => !!c))
    ),
  ];

  function handleFilterChange(value: string) {
    filter = value;
  }
</script>

<Header />
<FilterMenu {filter} {categories} onChange={handleFilterChange} />
<MapView {pavilions} {filter} />
