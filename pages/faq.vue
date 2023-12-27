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
            <div class="section1-faq__sideleft-container">
                <borderSection :title="faq.data.section1[0].title" :subtitle="faq.data.section1[0].subtitle" />
                <Button bgColor="bgBlack" color="white" size="small">Découvrir la formation</Button>
                <Button size="small">Nous contacter</Button>
            </div>
            <div class="section1-faq__sideleft-accordion">
                <Cardfaq :tabs="faq.data.questions"></Cardfaq>
                <!-- <Cardfaq :question="faq.data.questions[0].question"
                    :reponse="faq.data.questions[1].reponse"></Cardfaq> -->
            </div>
            <div class="section1-faq__sideleft-contact">
                <Formcontact />
            </div>
        </div>
        <div class="section1-faq__sideright">
            <p>sdmjkfgflkjg</p>
        </div>
    </div>
</template>

<style lang="scss">
.section1-faq {
    &__sideright {
        background-color: $black;
    }

    &__sideleft {
        padding: rem(30) rem(20);

        &-contact {
            margin-top: rem(50);
        }

        &-container {
            :nth-child(2) {
                margin-bottom: 10px;
            }
        }

        &-accordion {
            margin-top: rem(30);
        }
    }
}

@media (min-width : 768px) {
    .section1-faq {
        &__sideleft {
            padding: rem(60) rem(40);
        }
    }
}

@media (min-width : 1024px) {
    .section1-faq {
        display: flex;

        &__sideright {
            width: 40%;
        }

        &__sideleft {
            width: 60%;

        }
    }
}

@media (min-width : 1440px) {
    .section1-faq {
        &__sideleft {
            padding: rem(100) rem(75);
        }
    }
}</style>

