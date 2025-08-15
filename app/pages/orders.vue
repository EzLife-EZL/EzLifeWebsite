<script setup lang="ts">

import OrderCard from '~/components/OrderCard.vue'
import { ORDERS_MOCK } from '../../server/utils/mockOrders'

const orders: Order[] = ORDERS_MOCK
</script>

<template>
  <div class="page-wrap">
    <h1 class="title">Đơn Đặt Hàng</h1>

    <OrderCard
      v-for="order in orders"
      :key="order.id"
      :order="order"
    />
  </div>
</template>

<style scoped>
.page-wrap {
  padding: 24px;
}
.title {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #fff;
}
</style>
