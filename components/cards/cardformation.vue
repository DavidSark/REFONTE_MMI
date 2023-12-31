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

      <PrismicRichText :field="item.title"></PrismicRichText>
      <div class="formationcard-itemP__image">
        <img :src="item.image.url" alt="">
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
  }

  .formationcard-itemP{
  display: none;
}

  .formationcard-itemM {
    display: flex;
    flex-direction: column;
    gap: rem(10);
    @include borderColorSubtitle;
    padding-top: 0;

    &__image {
      // width: rem(289);
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


@media screen and (min-width:1024px) {
  .formation-container {
    
    .formationcard-itemM {
    display: none;
    }

    .formationcard-itemP {
    @include borderColorSubtitle;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    gap: rem(10);
    position: relative;

    &__image{
      opacity: 0;
      position: absolute;
      z-index: 10;
      top: 0;
      right: 10vw;
      width: rem(270);
      height: rem(375);
      border-radius: rem(36);
      transform: rotate(8.63deg);
      box-shadow: 16px 16px 33.3px 0px rgba(0, 0, 0, 0.25);


      img{
        border-radius: rem(36);
        object-fit: contain;
        width: 100%;
        height: 100%;
        z-index: 10;
      }
    }
    
    &:hover {
      .formationcard-itemP__image{
        opacity: 1;
      }
    }

    &__line {
      height: rem(1);
      width: 100%;
      background-color: $white-soft;
    }
    }
  }
}


// .formationcard-itemP:hover .formationcard-itemP__image{
//   display: block;
// }
</style>