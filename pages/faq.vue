<script setup>

const { client } = usePrismic();
const { data: faq, error } = await useAsyncData('faq', () => client.getSingle("faq"));


useSeoMeta({
    title: faq.value.data.meta_title,
    description: faq.value.data.meta_description,
    ogDescription: faq.value.data.meta_description,
    ogImage: faq.value.data.meta_image.url,
    twitterCard:'summary_large_image',
})


</script>

<template>
</template>

<style lang="scss" scoped>
</style>

