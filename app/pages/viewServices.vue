<script setup>
import ServiceCard from '~/components/ServiceCard.vue'

import smartphone from '@/assets/images/smartphone.png';
import laptop from '@/assets/images/laptop.png';
import appdevelopment from '@/assets/images/app-development.png';
</script>

<template>
  <div class="services-page">
    <h1 class="services-title">CÁC DỊCH VỤ</h1>
    <div class="services-wrap">
      <ServiceCard
        :icon="smartphone"
        title="Thiết kế App Mobile"
        description="Thiết kế và lập trình mọi loại App cho điện thoại di động cả 2 hệ điều hành Android & IOS. Giá thành tốt, chất lượng và chuyên nghiệp."
      />
      <ServiceCard
        :icon="laptop"
        title="Thiết kế Website"
        description="Mọi giải pháp về Website, thiết kế Web & lập trình chuyên sâu, uy tín, chất lượng, hỗ trợ bạn tận tình, không vẽ vời chi phí."
      />
      <ServiceCard
        :icon="appdevelopment"
        title="Thiết kế WebApp"
        description="Giải pháp tuyệt vời cho một dự án đa nền tảng, tất cả dữ liệu đều được đồng bộ hóa, luôn hỗ trợ nếu có bất kì lỗi mà không màn đến chi phí."
      />
    </div>
  </div>
</template>


