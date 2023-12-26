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
    <div class="section1-faq">
        <div class="section1-faq__sideleft">
            <borderSection :title="faq.data.section1[0].title" :subtitle="faq.data.section1[0].subtitle" />
        </div>
        <div class="section1-faq__canva">
            <p></p>
        </div>
    </div>
</template>

<style lang="scss">
.section1-faq {
    &__sideleft {
        padding: rem(30) rem(20);
    }
}

@media (min-width : 768px) {
    .section1-faq {
        &__sideleft {
            padding: rem(60) rem(40);
        }
    }
}


@media (min-width : 1440px) {
    .section1-faq {
        &__sideleft {
            padding: rem(100) rem(75);
        }
    }
}
</style>

