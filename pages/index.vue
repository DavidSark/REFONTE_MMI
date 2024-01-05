<script setup>
const { client } = usePrismic();
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))
const { data: espacepro } = await useAsyncData('espacepro', () => client.getSingle("espacepro"));
const { data: contact } = await useAsyncData('contact', () => client.getSingle("contact"));

useSeoMeta({
    title: home.value.data.meta_title,
    description: home.value.data.meta_description,
    ogDescription: home.value.data.meta_description,
    ogImage: home.value.data.meta_image.url,
    twitterCard: 'summary_large_image',
})


</script>



<template>
    <div class="container__index">

        <div class="container__index-heroM">
        <HeroM></HeroM>
      </div>
    
      <div class="container__index-heroT">
        <HeroT></HeroT>
      </div>
      <div class="container__index-heroC">
        <HeroC></HeroC>
      </div> 

      <div class="section1-index">
        <div class="section1-index__tagline">
         <PrismicRichText :field="home.data.index_tagline"></PrismicRichText>
        </div>
      </div>

      <div class="section2-index">
        <img src="/image-video-dep.webp" alt="">
      </div>

      <div class="section3-index">  
          <indexparcour/>
      </div>
  
      <div class="section4-index">
          <indexcards/>
      </div>

      <div class="section5-index">
        <indexdep/>
        <div class="section5-index__line"></div>
      </div>

      <div class="section6-index">
        <indexespacepro/>       
      </div>

      <div class="section7-index">
        <indexactualite/>       
      </div>
  </div>
</template>


<style lang="scss" >
.container__index{
  overflow: hidden;
  //pour le hero
  &-heroT{
    display: none;
  }
  &-heroC{
    display: none;
  }
  .section1-index{
    margin: rem(50) rem(20);
    &__tagline{
      font-family: $font-redhat;
      letter-spacing: -3%;
      font-size: $size-20;
      font-weight: 300;
      text-transform: uppercase;
      strong{
       font-weight: 700;
      }
    }
  }

  .section2-index{
    img{
      width: 100%;
    }
  }

  .section4-index{
    margin: rem(50) rem(20);
  }

  .section5-index{
    position: relative;
    margin: rem(80) rem(20);
    &__line{
        position: absolute;
        bottom: rem(85);
        width: 100%;
        height: rem(1);
        background-color: $white-soft;
        z-index: -3;
    }
  }

  .section6-index{
    margin: rem(80) rem(20);
  }
}

@media screen and (min-width:768px) {
  .container__index{
    &-heroM{
      display: none;
    }
    &-heroT{
      display: block;
    }

    .section1-index{
      padding: rem(90) rem(0);
      max-width: rem(1200);
    &__tagline{
      font-size: $size-32;
    }
   }

   .section4-index {
    margin: rem(50) rem(40);
  }
  .section5-index, .section6-index{
    margin: rem(120) rem(40);
  }
  }
}
@media screen and (min-width:1024px) {
  .container__index{
    &-heroM{
      display: none;
    }
    &-heroT{
      display: none;
    }
    &-heroC{
      display: block;
    }
    .section1-index{
      margin: rem(130) rem(40);
    &__tagline{
      font-size: 4.7vw;
 
    }
   }
  }
}

@media screen and (min-width:1440px) {
  .container__index{
    .section1-index{
      margin: rem(170) rem(75);
      max-width: rem(1500);
   }
   .section4-index{
    margin: rem(50) rem(75);
    &__tagline{
      font-size: $size-75;
    }
  }

  .section5-index, .section6-index{
    margin: rem(160) rem(75);
  }
  }
}

@media screen and (min-width:1920px) {
  .container__index{
    .section1-index{
    &__tagline{
      font-size: $size-75;
    }
   }
  }
  }
</style>