<script setup>

const { client } = usePrismic();
const { data: faq, error } = await useAsyncData('faq', () => client.getSingle("faq"));

useSeoMeta({
    title: faq.value.data.meta_title,
    description: faq.value.data.meta_description,
    ogDescription: faq.value.data.meta_description,
    ogImage: faq.value.data.meta_image.url,
    twitterCard: 'summary_large_image',
})
</script>

<template>
    <div>
        <borderSection :title="espacepro.data.section1[0].titre" :subtitle="espacepro.data.section1[0].soustitre" />
    </div>
</template>

<style lang="scss"></style>

