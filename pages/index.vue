<script setup>


const { client } = usePrismic();
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))
const { data: espacepro } = await useAsyncData('espacepro', () => client.getSingle("espacepro"));
const { data: contact } = await useAsyncData('contact', () => client.getSingle("contact"));
</script>



<template>
    <div class="container_index">
    <Header :elements="home.data.header"></Header>

    <div class="container_index-heroM">
      <HeroM></HeroM>
    </div>
   
    <div class="container_index-heroT">
      <HeroT></HeroT>
    </div>
    <div class="container_index-heroC">
      <HeroC></HeroC>
    </div>

   <Footer></Footer>

  
  </div>
</template>


<style lang="scss" scoped>
.container_index{
  &-heroT{
    display: none;
  }
  &-heroC{
    display: none;
  }
}

@media screen and (min-width:768px) {
  .container_index{
    &-heroM{
      display: none;
    }
    &-heroT{
      display: block;
    }
  }
}
@media screen and (min-width:1024px) {
  .container_index{
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