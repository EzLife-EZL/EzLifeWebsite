<template>
  <div class="landing">
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import Topbar from '~/components/topbar.vue';

// Không cần logic JS cho layout này
</script>

<style scoped>
:global(html, body, #__nuxt){ min-height:100%; }
:global(body){ margin:0; }
.landing {
  background: linear-gradient(
    to bottom,
    #6fe5ff,
    #0b1f48
  );
  min-height: 100vh;
  font-family: 'Inter', Arial, sans-serif;
}
</style>