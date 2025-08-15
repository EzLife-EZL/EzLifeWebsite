<template>
  <main>
    <!-- HERO / BANNER -->
    <section class="hero">
      <div class="hero-inner">
        <h1 class="ribbon">Liên hệ</h1>
      </div>
      <!-- góc cắt chéo phía dưới -->
      <!-- <div class="hero-cut"></div> -->
    </section>

    <!-- THÔNG TIN LIÊN HỆ -->
    <section class="contact-info">
      <h2>Thông tin liên hệ</h2>

      <div class="grid">
        <div
          v-for="(box, i) in boxes"
          :key="i"
          class="col"
          :class="{ 'has-divider': i !== boxes.length - 1 }"
        >
          <h3>{{ box.title }}</h3>
          <ul>
            <li v-for="(item, j) in box.items" :key="j">
              <span class="dot"></span>
              <span v-html="item"></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";

const open = ref(true); // mở sẵn để bạn thấy ngay; đổi thành false khi lên production
function onSubmit(payload) {
  // Xử lý dữ liệu sau khi submit (ghi log, gửi API, v.v.)
  console.log("Contact payload:", payload);
}
const boxes = [
  {
    title: "TUYỂN DỤNG",
    items: [
      "<strong>Email:</strong> recruit@ezlife.vn",
      "<strong>Điện thoại:</strong> (028) 3997 8000 - Ext: 5050",
    ],
  },
  {
    title: "MỚI TỐT NGHIỆP",
    items: [
      "<strong>Email:</strong> training@ezlife.vn",
      "<strong>Điện thoại:</strong> (028) 3997 8000 - Ext: 5236",
      "<strong>Hotline:</strong> (028) 38912531",
    ],
  },
  {
    title: "THỰC TẬP (INTERNSHIP)",
    items: [
      "<strong>Email:</strong> intern@ezlife.vn",
      "<strong>Điện thoại:</strong> (028) 3997 8000 - Ext: 5615",
      "<strong>Hotline:</strong> (028) 38912532",
    ],
  },
];
</script>

<style scoped>
/* ===== HERO ===== */
.hero {
  position: relative;
  background: linear-gradient(180deg, #0e5f56 0%, #0affeb 100%);
  min-height: 260px;
  display: grid;
  place-items: center;
  overflow: hidden;
}
/* chấm nền */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.15) 1px,
    transparent 1px
  );
  background-size: 22px 22px;
  opacity: 0.35;
}
.hero-inner {
  position: relative;
  padding-top: 24px;
}

/* Ribbon tiêu đề */
.ribbon {
  position: relative;
  display: inline-block;
  margin: 0;
  background: #fff;
  color: #2a86db;
  font-weight: 800;
  font-size: clamp(28px, 5vw, 44px);
  border-radius: 14px;
  padding: 14px 36px;
  box-shadow: 0 8px 0 rgba(0, 0, 0, 0.08);
}
.ribbon::before,
.ribbon::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 18px;
  height: 70%;
  background: #fff;
  border-radius: 6px;
  transform: translateY(-50%) rotate(12deg);
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.06);
}
.ribbon::before {
  left: -38px;
}
.ribbon::after {
  right: -38px;
  transform: translateY(-50%) rotate(-12deg);
}

/* đáy cắt chéo */
.hero-cut {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 80px;
  background: #f7fafc;
  clip-path: polygon(0 0, 6% 100%, 94% 100%, 100% 0);
}

/* ===== CONTACT INFO ===== */
.contact-info {
  background: #f7fafc;
  padding: 56px 16px 80px;
  color: #333;
  text-align: center;
}
.contact-info h2 {
  margin: 0 auto 24px;
  font-size: clamp(22px, 3.2vw, 36px);
  font-weight: 800;
  color: #3a4a5a;
}
.grid {
  margin: 0 auto;
  width: min(1100px, 94vw);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  text-align: left;
}
.col h3 {
  font-size: 18px;
  letter-spacing: 0.5px;
  margin: 4px 0 14px;
  font-weight: 800;
}
.col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.col li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 7px 0;
  line-height: 1.6;
}
.col .dot {
  width: 8px;
  height: 8px;
  margin-top: 8px;
  border-radius: 50%;
  background: #1aa2ff;
  flex: 0 0 auto;
}

/* vạch ngăn cột */
.has-divider {
  position: relative;
}
.has-divider::after {
  content: "";
  position: absolute;
  top: 4px;
  right: -14px;
  bottom: 4px;
  width: 1px;
  background: linear-gradient(to bottom, transparent, #d9e2ec, transparent);
}

/* ===== Responsive ===== */
@media (max-width: 960px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .has-divider::after {
    display: none;
  }
  .hero-cut {
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
  }
  .ribbon::before,
  .ribbon::after {
    display: none;
  } /* bớt rối trên mobile */
}
.contact-page {
  padding: 24px;
}
</style>
