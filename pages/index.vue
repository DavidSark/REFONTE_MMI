<script setup>
const { client } = usePrismic();
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))

</script>



<template>
    <div class="container">
        <Header :elements="home.data.header"></Header>
        <Footer></Footer>

    </div>  
</template>


<style lang="scss" scoped>

</style>