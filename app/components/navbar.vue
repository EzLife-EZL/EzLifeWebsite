<template>
  <header class="navbar">
    <div class="navbar-left">
      <img src="assets/images/ezlife_logo.png" alt="Logo" class="logo" />
    </div>

    <nav class="navbar-menu">
      <NuxtLink to="/">Trang chủ</NuxtLink>
      <NuxtLink to="/statistic">Thống kê</NuxtLink>
      <NuxtLink to="/orders">Đơn đặt hàng</NuxtLink>
      <NuxtLink to="/customers">Khách hàng</NuxtLink>
      <NuxtLink to="/messages">Nhắn tin</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.logo {
  height: 60px;
}

.navbar-menu {
  display: flex;
  gap: 20px;
}

.navbar-menu a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 16px;
}
</style>
