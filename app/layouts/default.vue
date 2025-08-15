<script setup>
import Topbar from '~/components/topbar.vue';

// layout mặc định cho mọi trang
</script>

<template>
  <div class="layout">
    <Topbar />
    <main class="page-body">
      <slot/>        <!-- Nội dung từng page sẽ render tại đây -->
    </main>
  </div>
</template>

<style scoped>
.layout{min-height:100vh;display:flex;flex-direction:column}
.page-body{
    flex:1;
    padding:20px;
    background: #009ee3;
    min-height: 100vh;
    font-family: 'Inter', Arial, sans-serif;
    }
</style>
