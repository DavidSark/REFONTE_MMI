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
      <div class="container__index-heroM">
    <heroM title="Foire aux questions" tagline="Posez-nous vos questions !" TopImage="/images/faq-heroM-1.webp" BottomImage="/images/faq-heroM-2.webp" Button1="Candidater" Button2="Formation" Button1Url="/candidater" Button2Url="/formation"></heroM>
    </div>
    <div class="container__index-heroT">
        <HeroT title="Foire aux questions" tagline="Posez-nous vos questions!" TopImage="images/faq-heroM-1.webp" Button1="Candidater" Button2="Formation" Button1Url="/candidater" Button2Url="/formation"></HeroT>
      </div>
      <div class="container__index-heroC">
        <heroC-hover  title="Foire aux questions" tagline="Posez-nous vos questions !" TopImage="/images/faq-heroM-1.webp" BottomImage="/images/faq-heroM-2.webp" Button1="Candidater" Button2="Formation" Button1Url="/candidater" Button2Url="/formation"> 
        </heroC-hover>
      </div> 
    <div class="section1-faq">
        <div class="section1-faq__sideleft" data-scroll-indicator-title="Hello World">
            <div class="section1-faq__sideleft-container">
                <borderSection :title="faq.data.section1[0].title" :subtitle="faq.data.section1[0].subtitle" />
                <RouterLink to="/formation">
                <Button class="btn-margin" bgColor="bgBlack" color="white" size="small">Découvrir la formation</Button>
            </RouterLink>
            <RouterLink to="/contact">
                <Button class="btn-margin" size="small">Nous contacter</Button>
                </RouterLink>
            </div>
            <div class="section1-faq__sideleft-accordion">
                <Cardfaq></Cardfaq>
                <!-- <Cardfaq :tabs="faq.data.questions"></Cardfaq> -->
                <!-- <Cardfaq :question="faq.data.questions[0].question"
                    :reponse="faq.data.questions[1].reponse"></Cardfaq> -->
            </div>
            <div class="section1-faq__sideleft-contact">
                <Formcontact />
            </div>
        </div>
        <div class="section1-faq__sideright">
           <canva-bulle></canva-bulle>
        </div>
    </div>
</template>

<style lang="scss">

.container__index{
  overflow: hidden;
  //pour le hero
  &-heroT{
    display: none;
  }
  &-heroC{
    display: none;
  }
}

@media screen and (min-width:768px) {
  .container__index{
    &-heroM{
      display: none;
    }
    &-heroT{
      display: block;
    }
  }
}
@media screen and (min-width:1024px) {
  .container__index{
    &-heroM{
      display: none;
    }
    &-heroT{
      display: none;
    }
    &-heroC{
      display: block;
    }
  }
}

.section1-faq {


    &__sideright {
        display: none;
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

.btn-margin {
    margin-left:rem(20);
    margin-bottom: rem(10);
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
            margin-top: rem(70);
            display: block;
            
            overflow: hidden;
        }

        &__sideleft {
            width: 50%;

        }
    }
}

@media (min-width : 1440px) {
    .section1-faq {
        &__sideleft {
            padding: rem(100) rem(75);
        }
        &__sideright{
            margin-top:100px;
            // background-color: red;
       
        

        }
    }
}</style>

