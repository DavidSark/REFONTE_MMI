<script setup>
  const { client } = usePrismic();
  const { data: espacepro, error } = await useAsyncData('espacepro', () => client.getSingle("espacepro"));

  const props = defineProps({
  
  });

</script>

<template>
     <div class="section1-espacepro">
      <borderSection :title="espacepro.data.section1[0].titre"
                  :subtitle="espacepro.data.section1[0].soustitre"
                     />
        <img src="/imageep-1.webp" alt="">
      </div>

     

    <Footer></Footer>
</template>

<style lang="scss">

.section1-espacepro {
  padding: rem(0) rem(20);
}
</style>