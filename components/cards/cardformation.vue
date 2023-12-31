<script setup>
const { client } = usePrismic();
const { data: projets, error } = await useAsyncData('projets', () => client.getSingle("projets"));

const props = defineProps({
  items: Array,
});
</script>

<template>
  <div class="formation-container">
    <div class="formation-container__title">
      <PrismicRichText :field="projets.data.title"></PrismicRichText>
    </div>
    <div class="formationcard-itemM" v-for="item in items">
      <div class="formationcard-itemM__line"></div>


      <PrismicRichText :field="item.title"></PrismicRichText>
      <div class="formationcard-itemM__image">
        <img :src="item.image.url" alt="">
      </div>

    </div>

    <div class="formationcard-itemP" v-for="item in items">
      <div class="formationcard-itemP__line"></div>
      <div class="formationcard-itemP__container">
        <div class="formationcard-itemP__container__content">
          <img src="/icons/Arrow.svg" alt="">
          <PrismicRichText :field="item.title"></PrismicRichText>
        </div>

        <div class="formationcard-itemP__container__image">
          <img :src="item.image.url" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" >
.formation-container {
  font-family: $font-poppins;
  text-transform: uppercase;
  font-size: $size-24;
  padding: rem(30) rem(20);

  strong {
    font-weight: 700;
  }

  &__title {
    @include borderColorTitle;
    border-color: $blue;
    font-size: $size-32;
  }

  .formationcard-itemP {
    display: none;
  }

  .formationcard-itemM {
    display: flex;
    flex-direction: column;
    gap: rem(10);
    @include borderColorSubtitle;
   
    // padding-top: 0;

    &__image {
      height: rem(172);
      box-shadow: 16px 16px 33.3px 0px rgba(0, 0, 0, 0.25);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

    }

    &__line {
      height: rem(1);
      width: 100%;
      background-color: $white-soft;

    }
  }
}

@media screen and (min-width:390px) {
  .formation-container {

    .formationcard-itemM {
      &__image {
        width: auto;
        height: 44.06vw;
      }
    }
  }
}


@media screen and (min-width:768px) {
  .formation-container {
    padding: rem(30) rem(40);
  }
}

@media screen and (min-width:1024px) {
  .formation-container {
    &__title {
      font-size: $size-43;

    }

    .formationcard-itemM {
      display: none;
    }

    .formationcard-itemP {
      @include borderColorSubtitle;
      padding: rem(0) rem(20);     
     
      display: flex;
      flex-direction: column;
      // gap: rem(10);
      position: relative;
      cursor: pointer;

      &__container {
        
        &__content {
          display: flex;
          gap: rem(20);
          font-size: $size-32;

          img {
            display: none;
            width: rem(20);
            transform: rotate(46deg);

          }
        }

        &__image {
          opacity: 0;
          position: absolute;
          z-index: 10;
          top: -200%;
          left: 60vw;
          transition: opacity 0.3s ease;
          width: rem(270);
          height: rem(375);
          border-radius: rem(36);
          transform: rotate(8.63deg);
          box-shadow: 16px 16px 33.3px 0px rgba(0, 0, 0, 0.25);

          img {
            border-radius: rem(36);
            object-fit: cover;
            width: 100%;
            height: 100%;
            z-index: 10;
          }
        }

      }


      &:hover {
        .formationcard-itemP__container__image {
          opacity: 1;
          transition: opacity .3s ease-in-out;
        }

        .formationcard-itemP__container__content {
          img {
            display: block;
            transition: display 1s ease-in-out;
          }
        }
      }

 
        &__line {
        margin: rem(20) rem(0);
        height: rem(1);
        width: 100%;
        background-color: $white-soft;
        }
      
    }
  }
}


@media screen and (min-width:1440px) {
  .formation-container {
    padding-right: rem(75);
    padding-left: rem(75);

    &__title {
      font-size: $size-90;
    }

    .formationcard-itemP {
      &__container {
        &__content {
          font-size: $size-60;

          img {
            width: rem(40);
          }
        }
      }
    }
  }
}</style>