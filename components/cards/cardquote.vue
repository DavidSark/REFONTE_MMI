<script setup>
const { client } = usePrismic();
const { data: departement, error } = await useAsyncData('departement', () => client.getSingle("departement"));


</script>

<template>
<div class="cardquote">
<p>sdffsd</p>
</div>
</template>

<style lang="scss">

.cardquote {
    background-color: $black;
    width: 100%;
    height: 100%;
    p {
        color:white;
    }
}

</style>