<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin:any>
    <link href="https://fonts.googleapis.com/css2?family=Angkor&display=swap" rel="stylesheet">
    <div class="mt-7 max-w-xl mx-auto text-center pt-5 card bg-gray">
      <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
      <p class="mt-7 text-6xl">Ooops.</p>
      <p class="mt-7">{{error.message}}</p>
      <button class="btn my-7" @click="handleError">Go Home...</button>
    </div>
  </template>

  <script setup>
    defineProps(['error'])

    const handleError = () => clearError({ redirect: '/' })
  </script>