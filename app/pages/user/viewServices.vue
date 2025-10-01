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

const selectedPackage = ref(null);

const bundleTiers = ref([
  {
    key: "basic",
    title: "GÓI BASIC",
    cta: "Trải nghiệm thử 10 năm",
    features: [
      "Website/App cơ bản",
      "Giao diện đơn giản",
      "Chức năng cốt lõi",
      "Bảo hành trọn đời",
      "Hỗ trợ 24/7",
      "Phí duy trì: +10%",
    ],
    price: "1tr500 - 2tr",
  },
  {
    key: "plus",
    title: "GÓI PLUS",
    cta: "Trải nghiệm thử sản phẩm",
    features: [
      "Web + App đồng bộ",
      "Giao diện chuyên nghiệp",
      "Nhiều tính năng nâng cao",
      "Tích hợp thanh toán",
      "Bảo hành trọn đời",
      "Hỗ trợ ưu tiên",
      "Phí duy trì: +15%",
    ],
    price: "3tr500 - 4tr",
    badge: "Phổ biến",
  },
  {
    key: "vip",
    title: "GÓI VIP",
    cta: "Trải nghiệm thử sản phẩm",
    features: [
      "Ứng dụng đặc thù độc quyền",
      "Thiết kế theo yêu cầu",
      "Tính năng phức tạp",
      "API & tích hợp đầy đủ",
      "Dashboard quản trị",
      "Bảo hành trọn đời",
      "Hỗ trợ 24/7 VIP",
      "Phí duy trì: +20%",
    ],
    price: "8tr - 12tr",
  },
]);

function selectPackage(key) {
  selectedPackage.value = selectedPackage.value === key ? null : key;
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

    <section class="bundle-section">
      <h2 class="bundle-title">
        <span>BẢNG GIÁ</span>
        <span class="bundle-title-em"> THIẾT KẾ TRỌN GÓI</span>
      </h2>

      <div class="bundle-grid">
        <article
          v-for="t in bundleTiers"
          :key="t.key"
          class="bundle-card"
          :class="{ 'is-selected': selectedPackage === t.key }"
          aria-label="pricing-tier"
          @click="selectPackage(t.key)"
        >
          <div v-if="t.badge" class="bundle-badge">{{ t.badge }}</div>
          <header class="bundle-card__head">{{ t.title }}</header>
          <div class="bundle-card__body">
            <div class="bundle-price">{{ t.price }}</div>
            <ul class="bundle-features">
              <li v-for="(feature, idx) in t.features" :key="idx">
                <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
          <footer class="bundle-card__foot">
            <button class="bundle-btn" type="button">{{ t.cta }}</button>
          </footer>
        </article>
      </div>
    </section>

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

<style>
.bg-cyan-700 {
  background: #009ee3;
  min-height: 100vh;
}

.text-center {
  text-align: center;
}
.text-white {
  color: #fff;
}
.text-4xl {
  font-size: 2.25rem;
  line-height: 1.2;
}
.font-bold {
  font-weight: bold;
}
.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.services-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  overflow: hidden;
}

.service-card {
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: 0.4;
  transform: scale(0.9);
}
.service-card.active {
  opacity: 1;
  transform: scale(1);
}

/* Service Card */
.card {
  width: 320px;
  max-width: 90vw;
  min-width: 260px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  padding: 24px;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.18);
}
.card__icon {
  width: 56px;
  height: 56px;
  object-fit: contain;
  margin: 0 auto 16px;
  filter: drop-shadow(0 2px 0 rgba(13, 128, 145, 0.15));
}
.card__title {
  font-size: 20px;
  font-weight: 800;
  color: #009ee3;
  margin-bottom: 10px;
  letter-spacing: 0.2px;
}
.card__desc {
  font-size: 15px;
  line-height: 1.6;
  color: #444;
}

.services-page {
  min-height: 100vh;
  padding-bottom: 2rem;
  background-image: url("/background_service.jpg");
}
.services-title {
  text-align: center;
  font-size: 36px;
  font-weight: 800;
  padding: 2.5rem 0;

  background: linear-gradient(270deg, #ff0000, #00ff1e, #006eff, #7c00a6);
  background-size: 800% 800%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  will-change: background-position;
  animation: gradientText 4s ease-in-out infinite;
}

.section-title-1 {
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-weight: 800;
  padding: 2.5rem 0;
}

.services-carousel {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 380px;
}

.services-wrap {
  background: #009ee3;
  padding: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
}

.service-card {
  position: absolute;
  width: 320px;
  max-width: 90vw;
  height: 300px;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.pricing-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

/* ====== BẢNG GIÁ TRỌN GÓI (UI mới) ====== */
.bundle-section {
  padding: 2.5rem 1rem 3rem;
}

.bundle-title {
  text-align: center;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin-bottom: 1.75rem;
  color: #b7f3ff;
}
.bundle-title span {
  font-size: 26px;
}
.bundle-title .bundle-title-em {
  color: #64fff3;
}

.bundle-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(240px, 1fr));
  gap: 1.25rem;
  align-items: stretch;
}

.bundle-card {
  position: relative;
  border-radius: 14px;
  padding: 18px 16px 70px;
  background: rgba(3, 44, 58, 0.9);
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.25),
    0 8px 22px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  min-height: 480px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.bundle-card:hover {
  transform: translateY(-4px);
  box-shadow: inset 0 0 0 2px rgba(0, 255, 213, 0.3),
    0 12px 28px rgba(0, 0, 0, 0.3);
}

.bundle-card.is-selected {
  background: #001f25;
  box-shadow: 0 0 0 3px #00ffd5 inset, 0 14px 30px rgba(0, 0, 0, 0.35);
  transform: translateY(-6px);
}

.bundle-badge {
  position: absolute;
  top: -12px;
  right: 20px;
  background: linear-gradient(135deg, #ff6b6b, #ff4757);
  color: #fff;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(255, 71, 87, 0.4);
}

.bundle-card__head {
  text-align: center;
  font-weight: 800;
  font-size: 20px;
  color: #d9ffff;
  letter-spacing: 1px;
  margin-top: 6px;
  margin-bottom: 16px;
}

.bundle-card__body {
  flex: 1;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 10px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.bundle-price {
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  color: #009ee3;
  padding-bottom: 12px;
  border-bottom: 2px solid #e0e0e0;
}

.bundle-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.bundle-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
}

.check-icon {
  width: 18px;
  height: 18px;
  color: #00c896;
  flex-shrink: 0;
}

.bundle-card__foot {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 14px;
  display: flex;
  justify-content: center;
}

.bundle-btn {
  min-width: 210px;
  border: none;
  border-radius: 10px;
  padding: 12px 20px;
  font-weight: 800;
  font-size: 13px;
  background: #39e6ff;
  color: #00313a;
  box-shadow: 0 6px 0 #0091a6;
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
  text-align: center;
}
.bundle-btn:hover {
  filter: brightness(1.05);
}
.bundle-btn:active {
  transform: translateY(2px);
  box-shadow: 0 4px 0 #0091a6;
}

/* responsive */
@media (max-width: 960px) {
  .services-title,
  .section-title {
    font-size: 1.5rem;
  }
  .service-card {
    width: 90%;
  }
  .bundle-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .bundle-card {
    min-height: 420px;
  }
  .bundle-card.is-selected {
    transform: translateY(-4px);
  }
  .bundle-features li {
    font-size: 13px;
  }
  .bundle-price {
    font-size: 22px;
  }
}
</style>
