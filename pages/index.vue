<template>
    <div>
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
                <a href="/about"> Normal Link -- about page</a>
            </nav>
        </header>
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident possimus eaque adipisci excepturi soluta asperiores omnis iste quibusdam itaque tempora nesciunt minima neque repellat dicta maiores, repellendus odio cumque quam.</p>
</div>
</template>

<script>
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p {
    margin: 20px 0;
}
</style>