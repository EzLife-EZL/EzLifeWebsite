<template>
  <div class="svc-card">
    <img :src="icon" alt="" class="svc-card__icon" />
    <h3 class="svc-card__title">{{ title }}</h3>
    <p class="svc-card__desc">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
});
</script>

<style scoped>
.svc-card {
  width: 320px;
  max-width: 90vw;
  min-width: 260px;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  padding: 24px;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.svc-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.18);
}

.svc-card__icon {
  width: 56px;
  height: 56px;
  object-fit: contain;
  margin: 0 auto 16px;
  filter: drop-shadow(0 2px 0 rgba(13, 128, 145, 0.15));
}

.svc-card__title {
  font-size: 20px;
  font-weight: 800;
  color: #009ee3;
  margin-bottom: 10px;
  letter-spacing: 0.2px;
}

.svc-card__desc {
  font-size: 15px;
  line-height: 1.6;
  color: #444;
}
</style>
