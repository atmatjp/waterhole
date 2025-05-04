<!--<script lang="ts">
  export let mode: string;
  export let onChange: (value: string) => void;

  function handleChange(event: Event) {
    const selected = (event.target as HTMLSelectElement).value;
    onChange(selected);
  }
</script>

<div class="mode-selector">
  <label for="mode">何を探す？:</label>
  <select id="mode" bind:value={mode} on:change={handleChange}>
    <option value="トイレ">トイレ</option>
    <option value="自販機">自販機</option>
  </select>
</div>

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
  @media (max-width: 400px) {
    .mode-selector {
      font-size: 1.2em;
      position: absolute;
      bottom: 80px;
      left: 10px;
      z-index: 1002;
      background: white;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
</style>
-->
