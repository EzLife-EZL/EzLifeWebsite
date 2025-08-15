<script setup>
definePageMeta({
  alias: ['/']   // map URL "/" vào trang này
})

import { ref, computed } from 'vue'

// Danh sách ảnh (đặt a1.png, a2.png, ... vào /public)
const images = ['/a1.png', '/a2.png', '/a3.png', '/a4.png', '/a5.png']



const mainIdx = ref(2) // index của box chính (main), mặc định là ảnh giữa

const visibleImages = computed(() => {
  const res = []
  const len = images.length
  for (let k = -2; k <= 2; k++) {
    const idx = (mainIdx.value + k + len) % len
    res.push(images[idx])
  }
  return res
})

// Khi bấm vào box trái/phải
function onBoxClick(idx) {
  if (idx === 2) return // bấm vào box chính thì không làm gì
  // idx: 0 1 2 3 4
  // mainIdx dịch sang trái/phải tương ứng
  const delta = idx - 2
  mainIdx.value = (mainIdx.value + delta + images.length) % images.length
}
</script>

<template>
    <!-- Banner -->
    <section class="banner">
      <h1>EzLife</h1>
      <h2>Cung cấp giải pháp phần mềm</h2>
      <div class="banner-slider">
        <div
            v-for="(img, idx) in visibleImages"
            :key="idx + '-' + img"
            :class="['box', { main: idx === 2 }, { boxside: idx === 0 || idx === 4 }]"
            @click="onBoxClick(idx)"
            style="cursor:pointer"
            >
            <img :src="img" alt="" />
        </div>
      </div>
      <div class="contact-btns">
        <a href="#" class="zalo-btn"></a>
        <a href="#" class="messenger-btn"></a>
      </div>
    </section>

    <!-- Lý do chọn -->
    <section class="why">
      <h3>Vì sao bạn nên chọn <span>EzLife</span>?</h3>
      <p>Sau đây là những lý do bạn nên sử dụng dịch vụ thiết kế Web App tại Ezlife</p>
      
      <div class="rowwhy">
        <ul class="reasons">
            <li><b>01</b> Giá thành tốt nhất thị trường</li>
            <li><b>02</b> Cam kết chất lượng, chăm sóc khách hàng</li>
            <li><b>03</b> Nhân sự tư duy tốt và thẩm mỹ cao</li>
        </ul>
        <div class="cards-stack">
            <DemoCard class="card card--left" />
            <DemoCard class="card card--right" />
        </div>
      </div>
    </section>

    <!-- Lợi ích -->
    <section class="benefits">
    <h3>LỢI ÍCH CỦA <span>WEBAPP CHUYÊN NGHIỆP</span></h3>

    <div class="benefit-list">
        <article class="benefit-card card--seo">
        <img src="/seologo.png" class="benefit-icon" alt="SEO" />
        <h4>Chuẩn SEO</h4>
        <p>
            WebApp được tối ưu SEO với từ khóa, thẻ meta, URL thân thiện và tối ưu nội dung
            chất lượng, giúp đạt thứ hạng cao trên công cụ tìm kiếm.
        </p>
        </article>

        <article class="benefit-card card--speed">
        <img src="/tocdologo.png" class="benefit-icon" alt="Speed" />
        <h4>Tốc độ</h4>
        <p>Tốc độ load nhanh, cải thiện trải nghiệm người dùng và thứ hạng của WebApp.</p>
        </article>

        <article class="benefit-card card--features">
        <img src="/tinhnanglogo.png" class="benefit-icon" alt="Features" />
        <h4>Tính năng đa dạng</h4>
        <p>Tích hợp TMĐT, thanh toán trực tuyến, tìm kiếm nâng cao… theo đúng nhu cầu.</p>
        </article>

        <article class="benefit-card card--security">
        <img src="/baomatlogo.png" class="benefit-icon" alt="Security" />
        <h4>Bảo mật tuyệt đối</h4>
        <p>HTTPS, tường lửa/IDS, best practices bảo vệ dữ liệu người dùng.</p>
        </article>

        <article class="benefit-card card--admin">
        <img src="/quantrilogo.png" class="benefit-icon" alt="Admin" />
        <h4>Dễ dàng quản trị</h4>
        <p>Hệ thống quản trị nội dung linh hoạt, dễ dùng, cập nhật nhanh chóng.</p>
        </article>

        <article class="benefit-card card--connect">
        <img src="/ketnoilogo.png" class="benefit-icon" alt="Connect" />
        <h4>Kết nối</h4>
        <p>Kết nối mạng xã hội, mở rộng tệp khách hàng, tăng truy cập tự nhiên.</p>
        </article>

        <article class="benefit-card card--platform">
        <img src="/nentanglogo.png" class="benefit-icon" alt="Platform" />
        <h4>Nền tảng</h4>
        <p>Đa nền tảng, đa thiết bị.</p>
        </article>

        <article class="benefit-card card--uiux">
        <img src="/uilogo.png" class="benefit-icon" alt="UI/UX" />
        <h4>Chuẩn UI/UX</h4>
        <p>Thiết kế đẹp, trực quan, tăng trải nghiệm và giữ chân người dùng.</p>
        </article>
    </div>
    </section>

</template>
