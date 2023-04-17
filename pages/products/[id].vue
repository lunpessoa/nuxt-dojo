<template>
  <div>
    <h1>Product - {{ id }}</h1>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: "products",
});
</script>

<style lang="scss" scoped></style>
