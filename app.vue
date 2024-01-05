<script setup>
// import easyScrollDots from './easyScrollDots.js';


// easyScrollDots({
//   'fixedNav': false,
//   'fixedNavId': '',
//   'fixedNavUpward': false,
//   'offset': 0
// });



//Script du locomotive scroll mais à revoir 

// const {LocomotiveScroll} = useNuxtApp()
// onMounted(()=>{
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     smartphone: {
//       smooth: true,
//     },
//     tablet: {
//       smooth: true,
//     },
//   });

//   // console.log(scroll);
//   scroll.on('scroll', (args) => {
//     const header = document.getElementsByClassName('header')[0];
//     if (args.scroll.y > 0) {
//       header.classList.add('-bg-white');
//     } else {
//       header.classList.remove('-bg-white');
//     }

//     const menuIcon = document.getElementsByClassName('header-menu')[0];
//     if(args.scroll.y > 0){
//       menuIcon.classList.add('-colorBlack');
//     }else{
//       menuIcon.classList.remove('-colorBlack');
//     }
//   });
// });
  



</script>


<template>

  <scrollbar/>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
// @import "@/assets/scss/main.scss";
// @import "@/assets/locomotive-scroll.css";

</style>
