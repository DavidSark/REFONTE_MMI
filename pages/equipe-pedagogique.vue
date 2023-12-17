<script setup>
const { client } = usePrismic();
  const { data: equipe, error } = await useAsyncData('equipe', () => client.getSingle("equipe"));


const props = defineProps({
  members: Array
})


  
</script>

<template>
    <div class="container">
        <PrismicRichText class="section1-title" :field="equipe.data.section1[0].titre"></PrismicRichText>
        <div class="equipecard">
            <equipecard :members="equipe.data.section2"></equipecard>
        </div>
       
    </div>
    
<Footer></Footer>


</template>

<style lang="scss">
.section1-title {
    font-family: $font-redhat;
    margin:rem(40) rem(0);
    font-size: $size-32;
    font-weight: 100;
    text-transform: uppercase;
    strong {
    font-weight: 800;
    }
}

@media (min-width: 768px) {

.equipecard {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    margin: rem(90) rem(0);
 
}
}

@media (min-width: 1024px) {

.section1-title {
    font-size: $size-45;
}

.equipecard {
    display:grid;
    grid-template-columns: repeat(3, 1fr);
 
}
}


@media (min-width: 1440px) {
.section1-title {
    font-size: $size-90;
}
.equipecard {
    display:grid;
    
    grid-template-columns: repeat(4, 1fr);
    margin: rem(100) rem(0);
 
}
}


</style>