<script lang="ts">
  import { onMount } from "svelte";
  import "../../app.css";

  let menuOpen = false;
</script>

<header>
  <div class="header-container">
    <h1><a href="/">大阪万博自販機マップβ</a></h1>
    <button class="hamburger" on:click={() => (menuOpen = !menuOpen)}>
      ☰
    </button>
    <nav class:open={menuOpen}>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </div>
</header>
