<script lang="ts">
  export let filter: string;
  export let categories: string[];
  export let onChange: (value: string) => void;

  function handleChange(event: Event) {
    const selected = (event.target as HTMLSelectElement).value;
    onChange(selected);
  }
</script>

<div class="filter">
  <label for="filter">何が欲しい？</label>
  <select id="filter" bind:value={filter} on:change={handleChange}>
    {#each categories as category}
      <option value={category}>{category}</option>
    {/each}
  </select>
</div>

<style>
  .filter {
    font-size: 1.2em;
    position: absolute;
    bottom: 20px;
    left: 10px;
    z-index: 1001;
    background: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 500px) {
    .filter {
      font-size: 0.9em;
      position: absolute;
      bottom: 10px;
      left: 10px;
      z-index: 1001;
      background: white;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
</style>
