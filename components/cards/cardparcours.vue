<script setup>
const { client } = usePrismic();
const { data: design, error } = await useAsyncData('design', () => client.getSingle("design"));

const props = defineProps({
    title: Array,
    image:String,

});

</script>

<template>
  <div class="image-container">
    <img :src="image" :alt="alt" class="image">
    <div class="text-container">
      <PrismicRichText :field="title"></PrismicRichText>
    </div>
  </div>
   

</template>

<style lang="scss">
.image-container {
  position: relative;
  display: inline-block;
}

.image {
  display: block;
  width: 100%;
 
}

.text-container {
font-family: $font-poppins;
text-transform: uppercase;
font-weight: 300;
letter-spacing: 5.445px;
font-size: $size-13;

  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $white; 
  padding: rem(15) rem(30);
}

@media (min-width : 1024px ) {
    
.text-container {
font-size: $size-16;

  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $white; 
  padding: rem(15) rem(30);
}


}

</style>