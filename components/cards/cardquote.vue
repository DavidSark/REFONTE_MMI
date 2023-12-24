<script setup>
const { client } = usePrismic();
const { data: departement, error } = await useAsyncData('departement', () => client.getSingle("departement"));


</script>

<template>
<div class="cardquote">
    <div class="cardquote-content__title">
    <PrismicRichText  class="cardquote-content__title" :field="departement.data.cardquote[0].title"></PrismicRichText>
    </div>
</div>
</template>

<style lang="scss">

.cardquote {
    background-color: $black;
    padding:rem(30) rem(20);

    &-content {
    
    &__title {
    font-family: $font-redhat;
    margin:rem(0) rem(0);
    font-size: $size-26;
    font-weight: 100;
    text-transform: uppercase;
    color:white;

    strong {
        font-weight: 700;
    }
    }
    }   
}

</style>