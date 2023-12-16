<script setup>
const { client } = usePrismic();
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))

</script>



<template>
  <div class="container">
    <Header :elements="home.data.header"></Header>

    <div class="container-heroM">
      <HeroM></HeroM>
    </div>
   
    <div class="container-heroT">
      <HeroT></HeroT>
    </div>
    <div class="container-heroC">
      <HeroC></HeroC>
    </div>
    <!-- <HeroM2></HeroM2> -->
    
   <Footer></Footer>

  
  </div>
</template>


<style lang="scss" scoped>

.container{
  &-heroT{
    display: none;
  }
  &-heroC{
    display: none;
  }
}

@media screen and (min-width:768px) {
  .container{
    &-heroM{
      display: none;
    }
    &-heroT{
      display: block;
    }
  }
}
@media screen and (min-width:1024px) {
  .container{
    &-heroM{
      display: none;
    }
    &-heroT{
      display: none;
    }
    &-heroC{
      display: block;
    }
  }
}

</style>