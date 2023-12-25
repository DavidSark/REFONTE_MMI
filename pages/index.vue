<script setup>


const { client } = usePrismic();
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))
const { data: espacepro } = await useAsyncData('espacepro', () => client.getSingle("espacepro"));
const { data: contact } = await useAsyncData('contact', () => client.getSingle("contact"));
</script>



<template>
    <div class="container__index">

      <Header :elements="home.data.header"></Header>

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

   <Footer></Footer>
  </div>
</template>


<style lang="scss" >
.container__index{
  //pour le hero
  &-heroT{
    display: none;
  }
  &-heroC{
    display: none;
  }

  .section1-index{
    padding: rem(50) rem(20);
   
    
    &__tagline{
      font-family: $font-poppins;
      font-size: $size-24;
      text-transform: uppercase;
      strong{
       font-weight: 700;
      }
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
      padding: rem(30) rem(40);
    &__tagline{
      font-size: $size-32;
    }
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
      padding: rem(30) rem(40);
    &__tagline{
      font-size: 4vw;
 
    }
   }
  }
}

@media screen and (min-width:1440px) {
  .container__index{
    .section1-index{
      padding: rem(170) rem(75);
    &__tagline{
      max-width: 1400px;
    }
   }
  }
}
</style>