<script setup lang="ts">
    import { NuxtLink } from '#components';
    import FormPopup from '@/components/FormPopup.vue'
    const showForm = ref(false)
</script>

<template>
    <div class="nav-bar-container">
        <NuxtLink to="/" class="logo-container">
            <img src="@/assets/images/ezlife_logo.png" alt="logo" class="logo-image" />
            <div class="logo-text">
                <h2>EzLife</h2>
                <p>Web App Design & More</p>
            </div>
        </NuxtLink>
        <nav class="nav-links-container">
            <ul class="nav-links">
                <li><NuxtLink to="/about">Giới thiệu</NuxtLink></li>
                <li><NuxtLink to="/viewServices">Dịch vụ</NuxtLink></li>
                <li><NuxtLink to="/detailProjects">Đánh giá</NuxtLink></li>
                 <li>
                <button 
                    @click="showForm = true" 
                    class="btn-advise"
                >
                    TƯ VẤN NGAY
                </button>
                </li>
                <FormPopup v-model:show="showForm" />
            </ul>
        </nav>
    </div>
</template>