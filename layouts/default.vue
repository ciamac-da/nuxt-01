<template>
        <header>
            <nav>
                <NuxtLink to="/">Nuxt App</NuxtLink>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                        <NuxtLink to="/about">About</NuxtLink>
                        <NuxtLink to="/products">Products</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <!-- output the page content -->
        <div>
            <slot />
        </div>
</template>

<style scoped>
.router-link-exact-active {
    color: aquamarine;
}
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p {
    margin: 20px 0;
}
</style>