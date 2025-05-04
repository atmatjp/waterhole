<!-- src/lib/components/VendCount.svelte -->
<script lang="ts">
  export let total: number;
  export let max: number = 252;
</script>

<div class="counter-box">
  {total} / {max}
</div>

<style>
  .counter-box {
    font-size: 1.2em;
    position: absolute;
    bottom: 20px;
    right: 10px;
    z-index: 1001;
    background: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 500px) {
    .counter-box {
      font-size: 1em;
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 1001;
      background: white;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
</style>
