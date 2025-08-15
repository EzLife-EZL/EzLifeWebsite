<template>
  <form class="contact-form" @submit.prevent="submitForm">
    <h2>Gửi tin nhắn</h2>

    <input v-model="form.name" type="text" placeholder="Tên của bạn" required />
    <input v-model="form.email" type="email" placeholder="Email của bạn" required />
    <textarea v-model="form.message" placeholder="Nội dung tin nhắn" rows="5" required />

    <button type="submit">Gửi</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

function submitForm() {
  // TODO: call API ở đây
  alert(`Đã gửi tin nhắn!\nHọ tên: ${form.name}\nEmail: ${form.email}`)
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
.contact-form {
  background: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.contact-form h2 {
  margin-bottom: 20px;
  color: #00aeff;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.contact-form button {
  background: #00aeff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.contact-form button:hover {
  background: #007ecc;
}
</style>
