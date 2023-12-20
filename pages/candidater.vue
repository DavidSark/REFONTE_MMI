<script setup>
  const { client } = usePrismic();
  const { data: canditater, error } = await useAsyncData('canditater', () => client.getSingle ("canditater"));



</script>

<template>
    <div class="section1-candidater">
      <borderSection :title="canditater.data.section1[0].title"
                  :subtitle="canditater.data.section1[0].subtitle"
                     />
     
      <borderSection :title="canditater.data.section2[0].title"
                  :subtitle="canditater.data.section2[0].subtitle"
                  color="red"
                  borderPosition="right"
                     />    
      </div>
  
<Cardcandidater></Cardcandidater>

  </template>
  
  <style lang="scss" scoped>
  .section1-candidater {
    padding: rem(0) rem(20);

  }

  @media (min-width: 768px) {
    .section1-candidater {
      padding: rem(30) rem(35);
    }
  }

  @media (min-width: 1024px) {
    .section1-candidater {
      padding: rem(30) rem(40);
    }
  }

  @media (min-width: 1440px) {
    .section1-candidater {
      padding: rem(0) rem(75);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  }

  </style>