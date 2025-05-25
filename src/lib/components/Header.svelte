<script lang="ts">
  import { onMount } from "svelte";
  import "../../app.css";

  let menuOpen = false;
  let menuRef: HTMLDivElement;

  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuOpen && menuRef && !menuRef.contains(event.target as Node)) {
        menuOpen = false;
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });
</script>

<header>
  <div bind:this={menuRef}>
    <div class="header-container">
      <h1><a href="/">大阪・関西万博自販機マップ</a></h1>
      <button class="hamburger" on:click={() => (menuOpen = !menuOpen)}>
        ☰
      </button>
      <nav class:open={menuOpen}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/link">Link</a>
      </nav>
    </div>
  </div>
</header>
