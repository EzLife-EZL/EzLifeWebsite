<template>
  <div>
    <nav style="background:#00aeff;padding:12px;display:flex;gap:16px">
      <NuxtLink to="/" style="color:#fff;font-weight:700">Trang chủ</NuxtLink>
      <NuxtLink to="/trang-lien-he" style="color:#fff;font-weight:700">Liên hệ</NuxtLink>
      <NuxtLink to="/admin" style="color:#fff;font-weight:700">Quản trị</NuxtLink>
    </nav>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
