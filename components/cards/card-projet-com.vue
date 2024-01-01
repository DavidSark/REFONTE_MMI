<script setup>
const { client } = usePrismic();
const { data: projets, error } = await useAsyncData('projets', () => client.getSingle("projets"));

const props = defineProps({
  items: Array,
  color: String,
});

const className  = computed(() =>({
  ' -red': props.color ==='red',
  ' -green': props.color ==='green',
  
}))
</script>

<template>
  <div class="formation-container">
    <div class="formation-container__title" :class="className">
      <PrismicRichText :field="projets.data.title_com"></PrismicRichText>
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
          <PrismicRichText class="formation-transform" :field="item.title1"></PrismicRichText>
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
  font-family: $font-redhat;
  margin-bottom: rem(70);
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
      &.-red{ 
          border-color: $red
       }
      &.-green{
         border-color: $green
       }
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


      &.-red{
 
          border-color: $red
       }
      &.-green{
         border-color: $green
       }


      &__container {
        
        &__content {
          display: flex;
          gap: rem(20);
          font-size: $size-32;
          .formation-transform{
            transition: transform .3s ease-in-out;
          }
          img {
            position: absolute;
            top: 65%;
            width: rem(20);
            transform: translate(-500%) rotate(46deg);
            transition: transform 0.3s ease-in-out;
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
            transform: translateX(0) rotate(46deg);
          }
        }

        .formation-transform{
          transform: translateX(12%);
         
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
      @include borderColorTitle;
      border-left: 15px solid;
      border-color: $blue;
    }

    .formationcard-itemP {
      &__container {
        &__content {
    
          font-size: $size-60;

          img {
            width: rem(40);
            top: 50%;
          }
        }
      }
    }
  }
}</style>