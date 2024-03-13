<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4">
            <NuxtLink to="/products" class="font-bold">Nuxt App Merch</NuxtLink>
        </nav>
    </header>
    <!-- output the page content -->
    <div class="container mx-auto p-4">
        <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
            <li class="contents">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
                <NuxtLink to="/products">Products</NuxtLink>
            </li>
        </ul>
    </footer>
</template>

<style scoped>
.router-link-exact-active {
    color: #41b883;

}
</style>