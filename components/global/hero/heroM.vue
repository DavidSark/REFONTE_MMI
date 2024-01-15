<script setup>
const { client } = usePrismic();
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))

const props = defineProps ({
  title: String, 
  tagline: String, 
  TopImage: String,
  BottomImage : String, 
  Button1 : String, 
  Button2 : String,  
  Button1Url : String, 
  Button2Url : String, 



})


</script>

<template>
    <div class="container-hero">
      <div class="container-hero__top">
        <img :src="TopImage" alt="Cours en MMI">
      </div>
      <div class="container-hero__middle">
        <h1 >{{title}}</h1>
        <h2>{{tagline}}</h2>
      </div>
      <div class="container-hero__bottom">
        <img :src="BottomImage" alt="MMI Montbéliard">
        <div class="container-hero__bottom-buttons">
          <NuxtLink :to="Button1Url" >
          <Button  size="small" bgColor="bgBlue" borderColor="borderBlue" color="white">{{Button1}}</Button></NuxtLink>
          <NuxtLink :to="Button2Url">
          <Button  size="small" bgColor="bgTransparent" borderColor="borderWhite" color="white">{{Button2}}</Button>
        </NuxtLink>
        </div>
        <div class="container-hero__bottom-social">
            <p>retrouvez-nous sur nos réseaux sociaux !</p>
            <div class="container-hero__bottom-social-icons">
              <a href="https://www.facebook.com/mmimontbeliard" target="_blank"><img src="/icons/icon-facebook.svg" alt="icone facebook"></a>
              <a href="https://www.instagram.com/mmi_montbeliard/" target="_blank"><img src="/icons/icon-instagram.svg" alt="icone instagram"></a>
              <a href="https://www.linkedin.com/school/mmimontbeliard" target="_blank"><img src="/icons/icon-linkedin.svg" alt="icone linkedin"></a>
            </div>
          </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.container-hero {
  font-family: $font-poppins;
  text-transform: uppercase;

    &__middle {
      h1 {
        font-family: $font-redhat;
      }
      padding: rem(20);
      :nth-child(1) {
        font-size: $size-39;
        letter-spacing: -2.28px;
        font-weight: 700;
        display: table-caption;
      }
      :nth-child(2) {
        font-size: $size-13;
        letter-spacing: calc(1px + (10 - 1) * ((100vw - 320px) / (1440 - 320)));
        font-weight: 300;
        color: $gray-black; 
      }
    }

    &__top,
    &__bottom {
      overflow: hidden;
    }

    &__top{
      img {
        width: 100%;
        height: auto;
        max-height: rem(250);
        object-fit: cover;
        filter: grayscale(1);
        object-position: 10% 10%;
        transform: scale(100%);
      }
    }
    &__bottom{
      position: relative;
      img {
        width: 100%;
        height: auto;
        max-height: rem(360);
        object-fit: cover;
        filter: grayscale(1);
        object-position: rem(-5) rem(30);
        transform: scale(1.4);
      }

      &-buttons {
        position: absolute;
        top: rem(15);
        left: rem(20);
        :nth-child(2) {
          margin-left: rem(10);
        }
      }

      &-social{
        p{
          margin-right: rem(20);
          letter-spacing: 0.05688rem;
        }
        position: absolute;
        bottom: rem(15);
        left: rem(20);
        color: $white-soft;
        font-size: $size-13;
        font-weight: 300;
        display: flex;
        flex-direction: column;
        gap: rem(5);
        :nth-child(2) {
          margin-left: 0
        }

       &-icons{
        margin-top: rem(10) ;
        display: flex;
        gap: 15px;
        img{
        //reset des propriétés de img pour mettre un nouveau style pour les svg des icons
        all: initial;
        width: rem(20);
        height: rem(20);
        margin-left: 0;
        //filtre pour changer la couleur des svg en blanc
        filter: invert(99%) sepia(1%) saturate(2631%) hue-rotate(88deg) brightness(127%) contrast(98%);
        }
       }
      }
    }
  }

</style>