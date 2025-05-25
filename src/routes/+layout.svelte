<script lang="ts">
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
</script>

<Header />
<main style="padding-top: 30px;">
  <slot />
</main>
