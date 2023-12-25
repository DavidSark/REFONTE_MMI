<script setup>
const { client } = usePrismic();
const { data: design, error } = await useAsyncData('design', () => client.getSingle("design"));

const props = defineProps({
    name: Array,
    job: Array,
    image:String,
    link: String,

});

</script>

<template>
<div class="card-etudiants">

<img class="card-etudiants__photo" :src="image" :alt="alt">
<img class="card-etudiants__bg" src="/bg-blue.webp" alt="">
<div class="card-etudiants__content">
<PrismicRichText :field="name"></PrismicRichText>
<PrismicRichText :field="job"></PrismicRichText>


<a :href="link" target="_blank">
    <img class="equipecard-item__image2" src="/icons/icon-linkedin.svg" alt="LinkedIn">
</a>
</div>
</div>
</template>

<style lang="scss">

.card-etudiants {
    margin-top:100px;
    padding: rem(20);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &__photo {
        width: 80%;
        position: absolute;
        z-index:1;
        
    }
    &__bg {
        width: 100%;
            position: relative;
    }
    &__content {
        position: absolute;
    }

  
 
}

</style>