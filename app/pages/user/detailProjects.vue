<script setup>
import { ref } from "vue";

const project = ref({
  name: "Website Bán Hàng Điện Thoại",
  images: [
    "https://img4.thuthuatphanmem.vn/uploads/2019/12/16/hinh-nen-4k-thien-nhien-dep_024352261.jpg",
    "https://hanoispiritofplace.com/wp-content/uploads/2017/12/hinh-nen-thien-nhien-4k-26.jpg",
    "https://vn-test-11.slatic.net/p/49f629287dcab5c35fcd946bc8ec9848.jpg",
  ],
  description:
    "Một website bán hàng chuyên nghiệp với đầy đủ tính năng giỏ hàng, thanh toán và quản lý sản phẩm.",
  tech: ["Vue 3", "Nuxt 3", "TailwindCSS", "Firebase"],
  linkDemo: "https://demo.com",
  linkGithub: "https://github.com/EzLife-EZL/EzLifeWebsite.git",
});

const currentIndex = ref(0);
function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % project.value.images.length;
}
function prevImage() {
  currentIndex.value =
    (currentIndex.value - 1 + project.value.images.length) %
    project.value.images.length;
}
const reviews = ref([
  {
    name: "Nguyễn Văn A",
    comment: "Dịch vụ rất chuyên nghiệp!",
    avatar: "https://wallpaperaccess.com/full/1104081.jpg",
    rating: 5,
    date: "14/08/2025 09:35",
  },
  {
    name: "Trần Thị B",
    comment: "Hỗ trợ nhanh chóng, nhiệt tình.",
    avatar:
      "https://phunugioi.com/wp-content/uploads/2021/10/Hinh-anh-Thanos-dep-trong-vu-tru-dien-anh-Marvel.jpg",
    rating: 4,
    date: "13/08/2025 16:20",
  },
]);
const currentUser = ref({
  name: "Phạm Văn C",
  avatar:
    "https://phunugioi.com/wp-content/uploads/2021/10/Hinh-anh-Thanos-dep-trong-vu-tru-dien-anh-Marvel.jpg",
});

const newComment = ref("");
const newRating = ref(0);
</script>

<template>
  <div class="detail-project">
    <section class="project-info">
      <div class="image-slider">
        <button class="nav-btn left" @click="prevImage">❮</button>
        <img
          :src="project.images[currentIndex]"
          :alt="project.name"
          class="project-img"
        />
        <button class="nav-btn right" @click="nextImage">❯</button>
      </div>
      <h1>{{ project.name }}</h1>
      <p class="desc">{{ project.description }}</p>
      <div class="tech">
        <span v-for="t in project.tech" :key="t" class="tech-item">{{
          t
        }}</span>
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
              <img :src="r.avatar" :alt="r.name" />
              <div class="review-info">
                <strong class="review-name">{{ r.name }}</strong>
                <span class="review-date">{{ r.date }}</span>
              </div>
            </div>
            <div class="stars">
              <span
                v-for="n in 5"
                :key="n"
                class="star"
                :class="{ active: n <= r.rating }"
                >★</span
              >
            </div>
            <p class="comment">"{{ r.comment }}"</p>
          </div>
        </div>
        <div class="review-form">
          <h3>Gửi đánh giá của bạn</h3>
          <div class="current-user">
            <img :src="currentUser.avatar" :alt="currentUser.name" />
            <strong>{{ currentUser.name }}</strong>
          </div>
          <textarea
            v-model="newComment"
            placeholder="Nhập nội dung đánh giá"
          ></textarea>
          <div class="rating">
            <span
              v-for="n in 5"
              :key="n"
              class="star"
              :class="{ active: n <= newRating }"
              @click="newRating = n"
              >★</span
            >
          </div>
          <button @click="submitReview">Gửi</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.detail-project {
  padding: 3rem 5%;
  background-color: #009ee3;
}

.project-info {
  text-align: center;
  margin-bottom: 3rem;
  background-color: #009ee3;
}

.image-slider {
  position: relative;
  display: inline-block;
  max-width: 600px;
  width: 100%;
}

.project-img {
  width: 100%;
  border-radius: 12px;
  transition: opacity 0.5s ease;
  display: block;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;
}

.nav-btn.left {
  left: 0;
}

.nav-btn.right {
  right: 0;
}

.desc {
  margin: 1rem 0;
  line-height: 1.6;
  color: #333;
}

.tech {
  margin: 1rem 0;
}

.tech-item {
  background: #f0f0f0;
  padding: 5px;
  margin: 5px;
  border-radius: 6px;
  display: inline-block;
  font-size: 0.9rem;
}

.links a {
  display: inline-block;
  margin: 0.5rem;
  background: #00799b;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
}

.links a:hover {
  background: #005f75;
}

.reviews {
  margin-top: 3rem;
}

.reviews-container {
  margin-top: 70;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: flex-start;
}

.reviews-wrap {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.review-card {
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.review-card:hover {
  transform: translateY(-3px);
}

.review-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.5rem;
}

.review-header img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.review-info {
  display: flex;
  flex-direction: column;
}

.review-name {
  font-weight: bold;
  color: #333;
}

.review-date {
  font-size: 13px;
  color: #777;
}

.stars {
  color: #ccc;
  font-size: 20px;
}

.star.active {
  color: gold;
}

.comment {
  margin-top: 0.5rem;
  white-space: pre-wrap;
  word-break: break-word;
  color: #444;
}

.review-form {
  flex: 0 0 300px;
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.review-form h3 {
  margin-bottom: 0.5rem;
}

.review-form textarea {
  width: 100%;
  min-height: 80px;
  padding: 0.6rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  resize: vertical;
}

.current-user {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.current-user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.rating {
  font-size: 1.5rem;
  color: #ccc;
  cursor: pointer;
}

.rating .star.active {
  color: gold;
}

button {
  background: #00799b;
  color: white;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background: #005f75;
}

@media (max-width: 768px) {
  .reviews-container {
    flex-direction: column;
  }
  .image-slider {
    max-width: 100%;
  }
  .nav-btn.left {
    left: 5px;
  }
  .nav-btn.right {
    right: 5px;
  }
}
</style>
