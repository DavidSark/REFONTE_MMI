<script setup>


const { client } = usePrismic();
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))
const { data: espacepro } = await useAsyncData('espacepro', () => client.getSingle("espacepro"));
</script>



<template>
    <div class="container">
        <Header :elements="home.data.header"></Header>
        <Footer></Footer>
    </div>  
</template>


<style lang="scss" scoped>

</style>