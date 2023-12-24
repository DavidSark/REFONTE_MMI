<script setup>
const { client } = usePrismic();
const { data: international, error } = await useAsyncData('international', () => client.getSingle("international"));
</script>

<template>
 <div class="section1-international">
    <borderSection :title="international.data.section1[0].title"
                  :subtitle="international.data.section1[0].subtitle"
                  borderPosition="right"
                     />
    <img src="/image-international-1.webp" alt="">
 </div>
</template>
<style lang="scss">
.section1-international {
    display: flex;
    flex-direction: column;
    padding:rem(30) rem(20);
    gap:rem(40);
    align-items: center;
}

@media (min-width : 768px) {
    .section1-international {
        flex-direction: row-reverse;
        padding: rem(30) rem(40);
        gap:rem(20);
        img {
            width: 40%;
        }
    }
}

@media(min-width : 1024px) {
    .section1-international {
        img {
            width: 45%;
        }
    }
}

@media (min-width : 1440px) {
    .section1-international {
        padding: rem(100) rem(75) rem(100) rem(40);
        gap:rem(40);
        img {
            width:45%;
    }

    }
}
</style>