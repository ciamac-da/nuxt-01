<template>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt App</NuxtLink>
                <ul class="flex gap-4">
                    <li class="contents">
                        <NuxtLink to="/">Home</NuxtLink>
                        <NuxtLink to="/about">About</NuxtLink>
                        <NuxtLink class="btn" to="/products">Products</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <!-- output the page content -->
        <div>
            <slot class="container mx-auto p-4" />
        </div>
</template>

<script>
export default {
  head: {
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Angkor&display=swap' }
    ]
  }
}
</script>

<style scoped>
.router-link-exact-active {
    color: #41b883;
}
</style>