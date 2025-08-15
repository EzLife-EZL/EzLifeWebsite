<template>
  <div>
    <navbar />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.navbar {
  background-color: #ffffff;
  color: white;
}
main {
    background-color: #00799B;
}
</style>
