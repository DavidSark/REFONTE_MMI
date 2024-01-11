<script setup>
const { client } = usePrismic();
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))
</script>


<template>
    <div>
        <!-- <Header :elements="home.data.header"></Header> -->
            <slot></slot>
        <!-- <Footer></Footer> -->
    </div>
</template>

