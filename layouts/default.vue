<template>
  <header class="main-header">
    <nav class="main-header__nav">
      <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
      <ul class="main-header__menu">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <slot />
</template>

<script setup></script>

<style lang="scss" scoped>
.main-header {
  @apply shadow-sm bg-white;

  &__nav {
    @apply container mx-auto p-4 flex justify-between;
    @include shadow-sm;
    display: flex;
    text-align: center;
  }

  &__menu {
    @apply flex gap-4;
  }

  @media screen {
  }
}
.router-link-exact-active {
  color: #12b488;
}
</style>
