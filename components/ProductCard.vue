<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Angkor&display=swap" rel="stylesheet">
    <div class="card text-center flex flex-col justify-end">
      <img :src="`${product.image}`" class="thumb" />
      <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
      <NuxtLink :to="`/products/${product.id}`">
        <p class="btn my-4">View Details</p>
      </NuxtLink>
    </div>
  </template>

  <script setup>
    const { product } = defineProps(['product'])
  </script>

  <style scoped>
    .thumb {
      max-height: 120px;
      max-width: 70%;
      margin: 0 auto;
    }
  </style>