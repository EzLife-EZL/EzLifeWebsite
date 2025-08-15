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
.landing {
  background: #009ee3;
  min-height: 100vh;
  font-family: 'Inter', Arial, sans-serif;
}
</style>