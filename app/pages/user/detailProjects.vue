<script setup>
import { ref } from 'vue'

const project = ref({
  name: 'Website Bán Hàng Điện Thoại',
  images: [
    'https://img4.thuthuatphanmem.vn/uploads/2019/12/16/hinh-nen-4k-thien-nhien-dep_024352261.jpg', 
    'https://hanoispiritofplace.com/wp-content/uploads/2017/12/hinh-nen-thien-nhien-4k-26.jpg', 
    'https://vn-test-11.slatic.net/p/49f629287dcab5c35fcd946bc8ec9848.jpg'     
  ],
  description: 'Một website bán hàng chuyên nghiệp với đầy đủ tính năng giỏ hàng, thanh toán và quản lý sản phẩm.',
  tech: ['Vue 3', 'Nuxt 3', 'TailwindCSS', 'Firebase'],
  linkDemo: 'https://demo.com',
  linkGithub: 'https://github.com/EzLife-EZL/EzLifeWebsite.git'
})

const currentIndex = ref(0)
function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % project.value.images.length
}
function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + project.value.images.length) % project.value.images.length
}
const reviews = ref([
  { 
    name: 'Nguyễn Văn A', 
    comment: 'Dịch vụ rất chuyên nghiệp!', 
    avatar: 'https://wallpaperaccess.com/full/1104081.jpg', 
    rating: 5,
    date: '14/08/2025 09:35'
  },
  { 
    name: 'Trần Thị B', 
    comment: 'Hỗ trợ nhanh chóng, nhiệt tình.', 
    avatar: 'https://phunugioi.com/wp-content/uploads/2021/10/Hinh-anh-Thanos-dep-trong-vu-tru-dien-anh-Marvel.jpg', 
    rating: 4,
    date: '13/08/2025 16:20'
  },
])
const currentUser = ref({
  name: 'Phạm Văn C',
  avatar: 'https://phunugioi.com/wp-content/uploads/2021/10/Hinh-anh-Thanos-dep-trong-vu-tru-dien-anh-Marvel.jpg'
})

const newComment = ref('')
const newRating = ref(0)
</script>

<template>
  <div class="detail-project">
    <section class="project-info">
      <div class="image-slider">
        <button class="nav-btn left" @click="prevImage">❮</button>
        <img :src="project.images[currentIndex]" :alt="project.name" class="project-img">
        <button class="nav-btn right" @click="nextImage">❯</button>
      </div>
      <h1>{{ project.name }}</h1>
      <p class="desc">{{ project.description }}</p>
      <div class="tech">
        <span v-for="t in project.tech" :key="t" class="tech-item">{{ t }}</span>
      </div>
      <div class="links">
        <a :href="project.linkDemo" target="_blank">Xem Demo</a>
        <a :href="project.linkGithub" target="_blank">Xem Source</a>
      </div>
    </section>
    <section class="reviews">
    <h2>Đánh giá của khách hàng</h2>
    <div class="reviews-container">
        <div class="reviews-wrap">
        <div class="review-card" v-for="(r, i) in reviews" :key="i">
            <div class="review-header">
            <img :src="r.avatar" :alt="r.name">
            <div class="review-info">
                <strong class="review-name">{{ r.name }}</strong>
                <span class="review-date">{{ r.date }}</span>
            </div>
            </div>
            <div class="stars">
            <span v-for="n in 5" :key="n" class="star" :class="{ active: n <= r.rating }">★</span>
            </div>
            <p class="comment">
            "{{ r.comment }}"
            </p>
        </div>
        </div>
        <div class="review-form">
        <h3>Gửi đánh giá của bạn</h3>
         <div class="current-user">
            <img :src="currentUser.avatar" :alt="currentUser.name">
            <strong>{{ currentUser.name }}</strong>
        </div>
        <textarea v-model="newComment" placeholder="Nhập nội dung đánh giá"></textarea>
        <div class="rating">
            <span v-for="n in 5" :key="n" class="star" 
            :class="{ active: n <= newRating }" 
            @click="newRating = n">★</span>
        </div>
        <button @click="submitReview">Gửi</button>
        </div>
  </div>
</section>
  </div>
</template>

