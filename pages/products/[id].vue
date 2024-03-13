<template>
    <div>
        <p>Product Details for {{ id }}</p>
        <p>Products</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
definePageMeta({
    layout: 'products'
});
</script>

<style lang="scss" scoped>

</style>