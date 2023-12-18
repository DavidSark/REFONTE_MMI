<script setup>
  const { client } = usePrismic();
  const { data: candidater, error } = await useAsyncData('candidater', () => client.getSingle("candidater"));

</script>

<template>
<Cardcandidater></Cardcandidater>
<Footer></Footer>
  </template>
  
  <style lang="scss" scoped>

  </style>