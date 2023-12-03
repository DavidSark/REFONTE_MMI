<script setup>

const { client } = usePrismic()
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))

const props = defineProps({
  elements: Array
})


onMounted(() => {
  let scrolled = 0;
  let header = document.getElementsByClassName('header')[0];
  document.addEventListener('scroll', (e) => {
    scrolled = window.scrollY;
    if (scrolled > 0) {
      header.classList.add('-bg-white');
    } else {
      header.classList.remove('-bg-white');
    }
  });
});
</script>
<template>
  <div class="header ">
    <div class="header-block">
      <div class="header-block__logo" v-for="item in elements">
        <img :src="item.header_logo.url" :alt="item.header_logo.alt">
      </div>
      <div class="header-block__container">
        <div class="header-block__container-square">
          <div></div>
        </div>
        <div class="header-block__container-text" v-for="item in elements">
          <PrismicRichText :field="item.header_title"></PrismicRichText>
          <div></div>
          <PrismicRichText :field="item.header_tagline" class="tagline"></PrismicRichText>
        </div>
      </div>
    </div>
    <div class="header-menu -circle">
      <div class="header-menu-center ">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  font-family: $font-poppins;
  font-size: $size-13;
  font-weight: bold;
  padding: rem(20);
  &-block {
    display: flex;
    align-items: center;
    &__logo {
      img {
        width: rem(45);
      }
    }

    &__container {
      margin: 0 rem(10);
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-square {
        margin-right: rem(5);
        width: rem(13);
        height: rem(13);
        background-color: $black;
      }
    }
  }

  &-menu {

    &-center {
      width: fit-content;
      text-align: center;
      margin-left: rem(10);
      margin-top: rem(10);

      :nth-child(2) {
        width: rem(15);
      }

      div {
        transition: all .5s;
        width: rem(20);
        height: rem(.5);
        background-color: $black;
        margin: rem(8) 0;
      }

    }

    &.-circle {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: transparent;
      border: rem(1) solid;
      border-color: $black ;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid transparent;
        border-radius: inherit;
        z-index: 1;
        animation: animateBorder 3s linear infinite;
      }
    }
  }
  .tagline {
    display: none;
  }
}

//Media queries
//adaptation du menu à 625px pour afficher la tagline du menu
@media screen and (min-width: 625px) {
.header{
  &-block{
    &__container{
      &-text{
        display: flex;   
        :nth-child(2){
          margin: 0 rem(10);
          background: $gray-soft;
          width: rem(1);
          height: rem(13);
        }  
      }
    }
  }
  .tagline{
    display: block;
    color: $gray-soft;
    font-weight: normal;
  }
}
}
  

// .header{
//     z-index: 99;
//     display: flex;
//     justify-content: space-between;
//     position: fixed;
//     top: rem(0);
//     left: rem(0);
//     right: rem(0);
//     padding: rem(20);
//     background: transparent;
//     transition: background-color 0.3s ease;
//     .tagline{
//         display: none;
//     }

//     &-block{
//         display: flex;
//         img{
//         width: rem(45);
//         }

//     &__container{
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             &-square {
//                 margin-left: rem(10);
//                 width: rem(16);
//                 height: rem(20);
//                 background-color: $black;
//             }
//             &-text{
//                 margin-left: rem(5);
//                 display: flex;
//                 gap: rem(10);
//                 font-family: $font-poppins;
//                 font-size: $size-13;
//                 text-transform: uppercase;
//                 font-weight: bold;
//                 letter-spacing: rem(-1);

//             }
//         }
//     }

//     &-menu{
//         &.-circle {
//                 position: relative;
//                 width: 40px;
//                 height: 40px;
//                 border-radius: 50%;
//                 background: transparent;

//                 &::before {
//                     content: '';
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     border: 1px solid transparent;
//                     border-radius: inherit;
//                     z-index: 1;
//                     animation: animateBorder 3s linear infinite;
//                 }
//             }
//     }
// }


// .header {
//     z-index: 10;
//     display: flex;
//     justify-content: space-between;
//     position: fixed;
//     top: rem(0);
//     left: rem(0);
//     right: rem(0);
//     padding: rem(20) rem(20);
//     background: transparent;
//     transition: background-color 0.3s ease;
//     &-block {
//         display: flex;
//         &__logo {
//             width: rem(50);
//         }

//         &__container {
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             &-square {
//                 margin-left: rem(30);
//                 width: rem(16);
//                 height: rem(20);
//                 background-color: $black;
//             }

//             &-text {
//                 margin-left: rem(5);
//                 display: flex;
//                 gap: rem(10);
//                 font-family: $font-poppins;
//                 font-size: rem(28);
//                 text-transform: uppercase;
//                 font-weight: bold;
//                 letter-spacing: rem(-2);


//                 :nth-child(2) {
//                     margin-left: rem(20);
//                     opacity: .4;
//                     font-weight: 300;
//                 }
//             }

//         }

//         &__menu {

//             &.-circle {
//                 position: relative;
//                 width: 40px;
//                 height: 40px;
//                 border-radius: 50%;
//                 background: transparent;

//                 &::before {
//                     content: '';
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     border: 1px solid transparent;
//                     border-radius: inherit;
//                     z-index: 1;
//                     animation: animateBorder 3s linear infinite;
//                 }
//             }

//             @keyframes animateBorder {
//                 0% {
//                     transform: rotate(0deg);
//                     border-color: red;
//                 }

//                 25% {
//                     transform: rotate(90deg);
//                     border-color: blue;
//                 }

//                 50% {
//                     transform: rotate(180deg);
//                     border-color: green;
//                 }

//                 75% {
//                     transform: rotate(270deg);
//                     border-color: yellow;
//                 }

//                 100% {
//                     transform: rotate(360deg);
//                     border-color: red;
//                 }
//             }

//             background: transparent;
//             width: 40px;
//             height: 40px;
//             border-radius: 50%;
//             cursor: pointer;

//             :nth-child(2) {
//                 width: rem(15);

//             }

//             &-center {
//                 width: fit-content;
//                 text-align: center;
//                 margin-left: rem(10);
//                 margin-top: rem(10);

//                 div {
//                     transition: all .5s;
//                     width: rem(20);
//                     height: rem(.5);
//                     background-color: $black;
//                     margin: rem(8) 0;
//                 }
//             }
//         }

//         &__menu:hover {

//             div {
//                 width: rem(15);
//                 animation: menuAnimationMiddle .7s;
//             }

//             :nth-child(2) {
//                 width: rem(20);
//                 animation: menuAnimationTopBot .7s;
//             }



//             @keyframes menuAnimationTopBot {
//                 0% {
//                     width: rem(15);
//                 }

//                 100% {
//                     width: rem(20);
//                 }
//             }

//             @keyframes menuAnimationMiddle {
//                 0% {
//                     width: rem(20);
//                 }

//                 100% {
//                     width: rem(15);
//                 }
//             }
//         }


//     }
//     &.-bg-white{
//         background-color: white;
//     }

// }</style>