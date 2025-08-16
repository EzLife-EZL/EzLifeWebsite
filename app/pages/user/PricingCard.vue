<template>
  <div class="pricing-card">
    <img :src="icon" alt="" class="pricing-icon" />
    <h3 class="pricing-title">{{ title }}</h3>
    <ul class="pricing-list">
      <li v-for="(item, index) in features" :key="index">{{ item }}</li>
    </ul>
    <div class="pricing-price">
      <span class="currency">$</span> {{ price }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  features: Array,
  price: String
})
</script>


