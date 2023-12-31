<script setup>

</script>

<template>
    <div class="container__hero">
        <div class="container__hero-heroM">
        <HeroM></HeroM>
      </div>
    
      <div class="container__hero-heroT">
        <HeroT></HeroT>
      </div>
      <div class="container__hero-heroC">
        <HeroC></HeroC>
      </div> 
    </div>
</template>

<style lang="scss" scoped>

.container__hero{
    &-heroT{
    display: none;
  }
  &-heroC{
    display: none;
  }
}

@media screen and (min-width:768px) {
  .container__hero{
    &-heroM{
      display: none;
    }
    &-heroT{
      display: block;
    }
}
}

@media screen and (min-width:1024px) {
  .container__hero{
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