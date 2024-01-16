<script setup>
import { Swiper, SwiperSlide,  } from 'swiper/vue';
import 'swiper/swiper-bundle.min.css';


const images = [
    'image1.webp',
    'image2.webp',
    'image3.webp',
    'image4.webp',
  
];

const swiperOptions = {
  direction: "vertical",
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 1000, 
    reverseDirection: true,
  },
};

</script>

<template>
  <div class="swipers">
    <Swiper v-bind="swiperOptions">
      <SwiperSlide v-for="(item, index) in images" :key="index">
        <img :src="`/${item}`" alt="Slide Image">
      </SwiperSlide>
    </Swiper>
  </div>
</template>


<style lang="scss" scoped>
.swiper{
    object-fit: fill;
    width: 100%;
    height: 100%;
}

.swiper-slide{
    display: flex;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 65%;
    padding-left: rem(5);
    filter: grayscale(100);
  }
}


.swipers{
    display: flex;
}
</style>