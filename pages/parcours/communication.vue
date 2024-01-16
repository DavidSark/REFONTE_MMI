<script setup>
const { client } = usePrismic();
const { data: communication, error } = await useAsyncData('communication', () => client.getSingle("communication"));
const { data: projets } = await useAsyncData('projets', () => client.getSingle("projets"));


useSeoMeta({
    title: communication.value.data.meta_title,
    description: communication.value.data.meta_description,
    ogDescription: communication.value.data.meta_description,
    ogImage: communication.value.data.meta_image.url,
    twitterCard: 'summary_large_image',
})
</script>

<template>
    <scrollbar/>
    <div class="container__index-heroM">
    <heroM title="parcours com'" tagline="De l’analyse à la visibilité en ligne" TopImage="/images/espacepro-heroM-1.webp" BottomImage="/images/espacepro-heroM-2.webp" Button1="contact" Button2="Formation" Button1Url="/contact" Button2Url="/formation"></heroM>
    </div>
    <div class="container__index-heroT">
        <HeroT title="parcours com'" tagline="De l’analyse à la visibilité en ligne" TopImage="images/espacepro-heroM-1.webp" Button1="contact" Button2="Formation" Button1Url="/contact" Button2Url="/formation"></HeroT>
      </div>
      <div class="container__index-heroC">
        <heroC-hover  title="parcours com'" tagline="De l’analyse à la visibilité en ligne" TopImage="/images/espacepro-heroM-1.webp" BottomImage="/images/espacepro-heroM-2.webp" Button1="contact" Button2="Formation" Button1Url="/contact" Button2Url="/formation"> 
        </heroC-hover>
      </div> 
    <div class="section1-communication" id="section1">
        <div class="section1-communication__sideleft">
            <borderSection :title="communication.data.section1[0].title" :subtitle="communication.data.section1[0].subtitle"
                color="red" />
                <RouterLink to="/candidater">
            <Button class="btn-margin" size="small">Candidater</Button>
        </RouterLink>
        </div>
        <img src="/image-design-1.webp" alt="Etudiant">
    </div>

    <div class="section2-communication" id="section2">
        <Cardparcours :image="communication.data.card[0].image.url" :title="communication.data.card[0].title" />
        <Cardparcours :image="communication.data.card[1].image.url" :title="communication.data.card[1].title" />
        <Cardparcours :image="communication.data.card[2].image.url" :title="communication.data.card[2].title" />
    </div>
    <div class="section3-communication" id="section3" >
            <card-projet-com color="red" :items="projets.data.projets_com"></card-projet-com>
    </div>

    <div class="section4-communication" id="section4">

        <PrismicRichText class="section4-communication__title" :field="communication.data.titlesection4"></PrismicRichText>
        <div class="section4-communication__cards">
            <Cardetudiants :image="communication.data.etudiants[0].image.url" :job="communication.data.etudiants[0].job"
                :name="communication.data.etudiants[0].name" :link="communication.data.etudiants[0].link.url"
                bgColor="bgRed" />
            <Cardetudiants :image="communication.data.etudiants[1].image.url" :job="communication.data.etudiants[1].job"
                :name="communication.data.etudiants[1].name" :link="communication.data.etudiants[1].link.url"
                bgColor="bgRed" />
            <Cardetudiants :image="communication.data.etudiants[2].image.url" :job="communication.data.etudiants[2].job"
                :name="communication.data.etudiants[2].name" :link="communication.data.etudiants[2].link.url"
                bgColor="bgRed" />
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

.section1-communication {
    padding: rem(30) rem(20);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(50);

    img {
        width: rem(250);
    }

    &__sideleft {
        &-btn {
            width: rem(140);
        }
    }
}

.section2-communication {
    display: flex;
    flex-direction: column;
    gap: rem(10);
    padding: rem(30) rem(20);
}

.section4-communication {
    &__title {
        padding: rem(0) rem(20);
        margin-top: rem(30);
        font-family: $font-redhat;
        font-size: $size-32;
        font-weight: 100;
        text-transform: uppercase;
        letter-spacing: -2.34px;

        strong {
            font-weight: 800;
        }
    }

}

.btn-margin__right {
    margin-right: rem(20);

}

.btn-margin {
    margin-left: rem(20);
}

@media (min-width : 768px) {
    .section1-communication {
        padding: rem(60) rem(40);

        img {
            width: rem(400);
        }
    }

    .section2-communication {
        padding: rem(30) rem(40);
        flex-direction: row;
    }

    .section4-communication {
        padding: rem(30) rem(40);

        &__cards {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
        }

        &__title {
            padding: rem(30) rem(0);
            margin-top: rem(0);

        }
    }
}



@media (min-width : 1024px) {
    .section1-communication {
        padding: rem(90) rem(40);
        flex-direction: row;
        gap: rem(50);

        img {
            width: 40%;
        }
    }

    .section4-communication {

        &__cards {
            margin-top: rem(100);
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }

        &__title {
            padding: rem(0) rem(0);
            margin-top: rem(50);
            font-size: $size-43;

        }

    }

}


@media (min-width : 1440px) {
    .section1-communication {
        margin: rem(130) rem(0);
        padding: rem(30) rem(75);
        flex-direction: row;
        gap: rem(100);

        img {
            width: rem(470);
        }
    }

    .section2-communication {
        padding: rem(50) rem(75);
        margin-bottom: rem(100);
        gap: rem(20)
    }

    .section4-communication {
        padding: rem(50) rem(75);

        &__cards {
            margin-top: rem(130);
        }

        &__title {
            margin-top: rem(100);
            font-size: $size-90;
        }

    }
}

@media(min-width : 1750px) {
    .section4-communication {
      
    }
}</style>