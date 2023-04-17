<template>
  <header>
    <nav>
      <NuxtLink to="/products">Nuxt Dojo Merch</NuxtLink>
    </nav>
  </header>

  <slot />

  <footer>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </nav>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
