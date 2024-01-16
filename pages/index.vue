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
  <scrollbar/>
    <div class="container__index">
        <div class="container__index-heroM">
        <HeroM title="MMI Montbéliard" tagline="Métiers du Multimédia et de l'Internet" TopImage="/image1.webp" BottomImage="/image3.webp" Button1="Candidater" Button2="Formation" Button1Url="/candidater" Button2Url="/formation"></HeroM>
      </div>
    
      <div class="container__index-heroT">
        <HeroT  title="MMI Montbéliard" tagline="Métiers du Multimédia et de l'Internet" TopImage="/image1.webp" Button1="Candidater" Button2="Formation" Button1Url="/candidater" Button2Url="/formation"></HeroT>
      </div>
      <div class="container__index-heroC">
        <HeroC></HeroC>
      </div> 

      <div class="section1-index" id="section1"  >
        <div class="section1-index__tagline">
          <hoverText :textVisible="home.data.index_tagline" :textHidden="home.data.index_hidden" class="hoverText"></hoverText>  
          <PrismicRichText class="prismicHide" :field="home.data.index_tagline"></PrismicRichText> 
        </div>
      </div>

      <div class="section2-index">
        <video controls="">
          <source src="/video_introduction_MMI.mp4" type="video/mp4" />
        </video>
      </div>
  
      <div class="section3-index">  
        <index-parcour/>
      </div>
  
      <div class="section4-index">
          <indexcards/>
      </div>

      <div class="section5-index" id="section2"  >
        <indexdep/>
        <div class="section5-index__line"></div>
      </div>

      <div class="section6-index" id="section3"  >
        <indexespacepro/>       
      </div>

      <div class="section7-index" id="section4" >
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
    &__tagline{
      font-family: $font-redhat;
      letter-spacing: -3%;
      font-size: $size-20;
      font-weight: 300;
      text-transform: uppercase;
      strong{
       font-weight: 700;
      }
      .hoverText{
        display: none;
      }
      .prismicHide{
        margin: rem(60) rem(20);
      }
    }
  }
  .section2-index{
    video{
      width: 100%;
     
    }
  }

  .section4-index{
    margin: rem(50) rem(20);
  }

  .section5-index{
    position: relative;
    
    &__line{
        position: absolute;
        bottom: rem(85);
        width: 100%;
        height: rem(1);
        background-color: $white-soft;
        z-index: -3;
    }
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
      // padding: rem(90) rem(0);
      max-width: rem(1200);
      &__tagline{
        font-size: $size-32;
      }
      .prismicHide{
        margin: rem(60) rem(35);
      }

   }

   .section4-index {
    margin: rem(50) rem(40);
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
    &__tagline{
      font-size: 4.5vw;
      .hoverText{
        display: block;
      }
      .prismicHide{
        display: none;
      }
    }
   }
   .section2-index{
    margin-top: 25vw ;
  }
  }
}

@media screen and (min-width:1440px) {
  .container__index{
   .section2-index{
    margin-top: 20vw ;
  }
   .section4-index{
    margin: rem(50) rem(75);
    &__tagline{
      font-size: $size-75;
    }
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