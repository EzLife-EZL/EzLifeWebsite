<script setup>
import { NuxtLink } from "#components";
import FormPopup from "~/pages/user/FormPopup.vue";
const showForm = ref(false);
</script>

<template>
  <nav class="topbar">
    <NuxtLink to="/user/home" class="logo">
      <img src="/Logo.png" alt="Logo" />
    </NuxtLink>
    <ul class="menu">
      <li><NuxtLink to="/user/home">Giới thiệu</NuxtLink></li>
      <li><NuxtLink to="/user/viewServices">Dịch vụ</NuxtLink></li>
      <li><NuxtLink to="/user/detailProjects">Đánh giá</NuxtLink></li>
      <li><NuxtLink to="/user/viewProjects">Dự án</NuxtLink></li>
      <li><NuxtLink to="/">Liên hệ</NuxtLink></li>
      <li><NuxtLink to="/">Chính sách</NuxtLink></li>

      <li>
        <button @click="showForm = true" class="btn-advise">TƯ VẤN NGAY</button>
      </li>
      <FormPopup v-model:show="showForm" />
    </ul>
  </nav>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 0.5rem 2rem;
  min-height: 64px;
  box-shadow: 0 2px 8px #0001;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.logo img {
  width: 150px;
  object-fit: contain;
}

.brand {
  font-weight: bold;
  color: #009ee3;
  font-size: 1.2rem;
}
.desc {
  font-size: 0.85rem;
  color: #333;
}
.menu {
  display: flex;
  gap: 28px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu li {
  margin: 0 1rem;
  font-size: 1.3rem;
  font-weight: bold;
}
.menu a {
  color: #222;
  text-decoration: none;
  font-weight: 500;
}
.menu a:hover {
  color: #009ee3;
}
.advice-btn {
  background: #009ee3;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.advice-btn:hover {
  background: #007bbd;
}
</style>
