<script setup>
import { ref, onMounted } from "vue";
import ServiceCard from "~/pages/user/ServiceCard.vue";
import PricingCard from "~/pages/user/PricingCard.vue";
import smartphone from "@/assets/images/smartphone.png";
import laptop from "@/assets/images/laptop.png";
import appdevelopment from "@/assets/images/app-development.png";

const cards = ref([]);
let currentIndex = 0;
let total = 0;

onMounted(() => {
  cards.value = document.querySelectorAll(".services-carousel .service-card");
  total = cards.value.length;
  updateCarousel();

  setInterval(() => {
    currentIndex = (currentIndex + 1) % total;
    updateCarousel();
  }, 2000);
});

function updateCarousel() {
  cards.value.forEach((card, i) => {
    const diff = (i - currentIndex + total) % total;
    if (diff === 0) {
      card.style.transform = `translateX(0) scale(1)`;
      card.style.opacity = 1;
      card.style.zIndex = 3;
    } else if (diff === 1 || diff === total - 1) {
      const offset = diff === 1 ? 110 : -110;
      card.style.transform = `translateX(${offset}%) scale(0.8)`;
      card.style.opacity = 0.4;
      card.style.zIndex = 2;
    } else {
      card.style.transform = `translateX(${diff * 110}%) scale(0.8)`;
      card.style.opacity = 0;
      card.style.zIndex = 1;
    }
  });
}
</script>

<template>
  <div class="services-page">
    <h1 class="services-title">CÁC DỊCH VỤ</h1>
    <div class="services-carousel">
      <ServiceCard
        class="service-card"
        :icon="smartphone"
        title="Thiết kế App Mobile"
        description="Thiết kế và lập trình mọi loại App cho điện thoại di động cả 2 hệ điều hành Android & IOS. Giá thành tốt, chất lượng và chuyên nghiệp."
      />
      <ServiceCard
        class="service-card"
        :icon="laptop"
        title="Thiết kế Website"
        description="Mọi giải pháp về Website, thiết kế Web & lập trình chuyên sâu, uy tín, chất lượng, hỗ trợ bạn tận tình, không vẽ vời chi phí."
      />
      <ServiceCard
        class="service-card"
        :icon="appdevelopment"
        title="Thiết kế WebApp"
        description="Giải pháp tuyệt vời cho một dự án đa nền tảng, tất cả dữ liệu đều được đồng bộ hóa, luôn hỗ trợ nếu có bất kì lỗi mà không màn đến chi phí."
      />
    </div>

    <h1 class="section-title-1">Bảng giá tham khảo</h1>
    <div class="pricing-grid">
      <PricingCard
        :icon="smartphone"
        title="Thiết kế 1 web/app cơ bản"
        :features="[
          'Bảo hành trọn đời',
          'Giảm giá nếu là sinh viên',
          'Phí thuê duy trì = Phí cơ bản + 10%',
        ]"
        price="1tr500 - 2tr"
      />
      <PricingCard
        :icon="laptop"
        title="Thiết kế cả web và app cơ bản"
        :features="[
          'Bảo hành trọn đời',
          'Giảm giá nếu là sinh viên',
          'Phí thuê duy trì = Phí cơ bản + 15%',
        ]"
        price="3tr500 - 4tr"
      />
      <PricingCard
        :icon="appdevelopment"
        title="Xây dựng ứng dụng đặc thù độc quyền"
        :features="[
          'Bảo hành trọn đời',
          'Giảm giá nếu là sinh viên',
          'Phí thuê duy trì = Phí cơ bản + 20%',
        ]"
        price="8tr - 12tr"
      />
    </div>
  </div>
</template>
