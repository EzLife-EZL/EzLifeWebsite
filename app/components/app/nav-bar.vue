<script setup lang="ts">
    import { NuxtLink } from '#components';
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
                <li><NuxtLink to="/webDesign">Thiết kế Website</NuxtLink></li>
                <li><NuxtLink to="/appDesign">Thiết kế App</NuxtLink></li>
                <li><NuxtLink to="/viewProjects">Dự án</NuxtLink></li>
                <li><NuxtLink to="/advise" class="btn-advise">TƯ VẤN NGAY</NuxtLink></li>
            </ul>
        </nav>
    </div>
</template>