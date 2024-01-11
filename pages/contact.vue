<script setup>
const { client } = usePrismic();
const { data: contact, error } = await useAsyncData('contact', () => client.getSingle("contact"));

const props = defineProps({

});

useSeoMeta({
    title: contact.value.data.meta_title,
    description: contact.value.data.meta_description,
    ogDescription: contact.value.data.meta_description,
    ogImage: contact.value.data.meta_image.url,
    twitterCard: 'summary_large_image',
})
</script>

<template>
    <scrollbar/>
    <div class="container__index-heroM">
    <heroM title="Nous rencontrer" tagline="Entrez dans le monde supérieur" TopImage="/images/contact-heroM-1.webp" BottomImage="/images/contact-heroM-2.webp" Button1="Candidater" Button2="Formation" Button1Url="/candidater" Button2Url="/formation"></heroM>
    </div>
    <div class="container__index-heroT">
        <HeroT title="Nous rencontrer" tagline="Entrez dans le monde supérieur" TopImage="images/contact-heroM-1.webp" Button1="Candidater" Button2="Formation" Button1Url="/candidater" Button2Url="/formation"></HeroT>
      </div>
      <div class="container__index-heroC">
        <heroC-hover  title="Nous rencontrer" tagline="Entrez dans le monde supérieur" TopImage="/images/contact-heroM-1.webp" BottomImage="/images/contact-heroM-2.webp" Button1="Candidater" Button2="Formation" Button1Url="/candidater" Button2Url="/formation"> 
        </heroC-hover>
      </div> 


    <div class="section1-contact" id="section1">
        <div class="section1-contact__side">
            <borderSection :title="contact.data.section1[0].title" :subtitle="contact.data.section1[0].subtitle" />
            <RouterLink to="/departement">
            <Button class="btn-margin" size="small">En savoir plus</Button>
            </RouterLink>
        </div>
        <div class="section1-contact__card">
            <Cardgooglemap></Cardgooglemap>
        </div>
    </div>
    <div class="section2-contact" id="section2">
        <img src="/image9.webp" alt="Mmi montbéliard">
        <img src="/image13.webp" alt="Mmi montbéliard">
    </div>
    <div class="section3-contact" id="section3">
        <div class="section3-contact_content">
            <PrismicRichText class="section3-contact__content-tagline" :field="contact.data.section3[0].tagline">
            </PrismicRichText>
            <PrismicRichText class="section3-contact__content-title" :field="contact.data.section3[0].title">
            </PrismicRichText>
        </div>
    </div>
    <div class="section4-contact">
        <cardcontact></cardcontact>
    </div>
    <div class="section5-contact" id="section4">
        <Formcontact></Formcontact>
        <img src="/image-contact.webp" alt="Mmi montbéliard">

    </div>
</template>

<style lang="scss">
.section1-contact {
    padding: rem(30) rem(20);
    gap: rem(40);
    display: flex;
    flex-direction: column;
}

.section2-contact {
    display: flex;
    flex-direction: column;
    gap: rem(3);

    img {
        width: 100%;
    }
}

.section3-contact {
    padding: rem(30) rem(20);

    &__content {
        &-tagline {
            font-family: $font-poppins;
            font-size: $size-10;
            text-transform: uppercase;
            text-align: right;
            margin-bottom: rem(15);
        }

        &-title {
            font-family: $font-redhat;
            text-transform: uppercase;
            font-size: $size-32;
            text-align: right;
            letter-spacing: -1.17px;

            strong {
                font-weight: 700;
            }
        }
    }

}

.section5-contact {
    display: flex;
    flex-direction: column-reverse;
    margin-top: rem(80);


    img {
     
        width: 100%;
    }
}


.btn-margin {
    margin-left:rem(20);
}
@media (min-width : 768px) {
    .section1-contact {
        padding: rem(30) rem(40);
    }

    .section2-contact {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: rem(10);
    }

    .section3-contact {
        padding: rem(30) rem(40);

        &__content {
            &-tagline {
                font-size: $size-13;
            }
        }
    }

    .section5-contact {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: stretch;
    }
}

@media (min-width: 1024px) {
    .section3-contact {
        &__content {
            &-title {
                font-size: $size-43;
            }
        }
    }
    .section1-contact {
        padding: rem(100) rem(40);
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
 

    }
}


@media (min-width: 1440px) {
    .section1-contact {
        padding: rem(120) rem(75);
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: rem(150);

    }

    .section3-contact {
        padding: rem(100) rem(75);

        &__content {
            &-tagline {
                font-size: $size-24 ;
                margin-bottom: rem(25);
            }

            &-title {
                font-size: $size-90;
                padding-left: rem(100);
            }
        }
    }

}</style>