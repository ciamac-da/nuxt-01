<template>
    <div>
        <p>Product Details for {{ id }}</p>
        <p>Products</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style lang="scss" scoped>

</style>