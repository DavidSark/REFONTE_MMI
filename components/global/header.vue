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
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  font-family: $font-poppins;
  font-size: $size-13;
  font-weight: bold;
  padding: rem(20);
  background: transparent;
  transition: background-color 0.3s ease;

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

  &.-bg-white {
    background: $white;
  }
}

//media queries
//adaptation du menu à 625px pour afficher la tagline du menu
@media screen and (min-width: 625px) {
  .header {
    &-block {
      &__container {
        &-text {
          display: flex;

          :nth-child(2) {
            margin: 0 rem(10);
            background: $gray-soft;
            width: rem(1);
            height: rem(13);
          }
        }
      }
    }

    .tagline {
      display: block;
      color: $gray-soft;
      font-weight: normal;
    }
  }
}

//media queries
//adaptation des tailles de texte du menu
@media (min-width: 768px) {
  .header {
    font-size: $size-16;

    &-block {
      &__container {
        &-text {
          :nth-child(2) {
            height: rem(16);
          }
        }

        &-square {
          margin-left: rem(15);
        }
      }
    }
  }
}

@media screen and (min-width: 1440px) {
  .header {
    padding: rem(30) rem(50);
    font-size: rem(28);

    &-block {
      &__logo {
        img {
          width: rem(50);
        }
      }

      &__container {
        &-text {
          :nth-child(2) {
            margin: 0 rem(30);
            height: rem(28);
          }
        }

        &-square {
          margin-left: rem(40);
          width: rem(15);
          height: rem(20);
        }
      }
    }
  }
}
</style>