<template>
    <div class="text-center">
        <h2>About</h2>
        <p>Hi, {{ data }} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident possimus eaque adipisci excepturi soluta asperiores omnis iste quibusdam itaque tempora nesciunt minima neque repellat dicta maiores, repellendus odio cumque quam.</p>
    </div>
</template>

<script setup>
// Fetch data from the '/api/names' endpoint
const { data } = await useFetch('/api/names?name=Cia', {
    method: 'post',
    body: { age: 37 }
})
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