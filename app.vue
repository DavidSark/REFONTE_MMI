<script setup>
// import easyScrollDots from './easyScrollDots.js';


// easyScrollDots({
//   'fixedNav': false,
//   'fixedNavId': '',
//   'fixedNavUpward': false,
//   'offset': 0
// });

const {LocomotiveScroll} = useNuxtApp()
onMounted(()=>{
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  });
  console.log(scroll);

});



</script>


<template>

  <scrollbar/>
  <div>
    <NuxtLayout>
      <NuxtPage data-scroll-container />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
// @import "@/assets/scss/main.scss";
// @import "@/assets/locomotive-scroll.css";

</style>
