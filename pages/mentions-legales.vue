<script setup>
const { client } = usePrismic();
const { data: mentions, error } = await useAsyncData('mentions', () => client.getSingle("mentions"));


const props = defineProps({
  title: Array,
 
})
</script>

<template>

<PrismicRichText :field="mentions.data.title "></PrismicRichText>
<p>hello</p>

</template>

<style lang="scss" scoped>
</style>