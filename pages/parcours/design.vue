<script setup>
const { client } = usePrismic();
const { data: design, error } = await useAsyncData('design', () => client.getSingle("design"));
const { data: projets } = await useAsyncData('projets', () => client.getSingle("projets"));

useSeoMeta({
    title: design.value.data.meta_title,
    description: design.value.data.meta_description,
    ogDescription: design.value.data.meta_description,
    ogImage: design.value.data.meta_image.url,
    twitterCard: 'summary_large_image',
})

</script>

<template>
    <scrollbar/>
    <div class="container__index-heroM">
    <heroM title="parcours design" tagline="Pour les créatifs et curieux" TopImage="/images/espacepro-heroM-1.webp" BottomImage="/images/espacepro-heroM-2.webp" Button1="contact" Button2="Formation" Button1Url="/contact" Button2Url="/formation"></heroM>
    </div>
    <div class="container__index-heroT">
        <HeroT title="parcours design" tagline="Pour les créatifs et curieux" TopImage="images/espacepro-heroM-1.webp" Button1="contact" Button2="Formation" Button1Url="/contact" Button2Url="/formation"></HeroT>
      </div>
      <div class="container__index-heroC">
        <heroC-hover  title="parcours design" tagline="Pour les créatifs et curieux" TopImage="/images/espacepro-heroM-1.webp" BottomImage="/images/espacepro-heroM-2.webp" Button1="contact" Button2="Formation" Button1Url="/contact" Button2Url="/formation"> 
        </heroC-hover>
      </div> 
    <div class="section1-design" id="section1">
        <div class="section1-design__sideleft">
            <borderSection :title="design.data.section1[0].title" :subtitle="design.data.section1[0].subtitle"
                />
                <RouterLink to="/candidater">
            <Button class="btn-margin" size="small">Candidater</Button>
            </RouterLink>
        </div>
        <img src="/image-design-1.webp" alt="Etudiant">
    </div>

    <div class="section2-design" id="section2">
        <Cardparcours :image="design.data.card[1].image.url" :title="design.data.card[1].title" />
        <Cardparcours :image="design.data.card[0].image.url" :title="design.data.card[0].title" />
        <Cardparcours :image="design.data.card[2].image.url" :title="design.data.card[2].title" />
    </div>

    <div class="section3-design" id="section3">
            <card-projet-design :items="projets.data.projets_design"></card-projet-design>
    </div>



   <div class="section4-design" id="section4">
 
   
    <PrismicRichText class="section4-design__title" :field="design.data.titlesection4"></PrismicRichText>
    <div class="section4-design__cards">
        <Cardetudiants :image="design.data.etudiants[0].image.url" :job="design.data.etudiants[0].job"
            :name="design.data.etudiants[0].name" :link="design.data.etudiants[0].link.url" />
        <Cardetudiants :image="design.data.etudiants[1].image.url" :job="design.data.etudiants[1].job"
            :name="design.data.etudiants[1].name" :link="design.data.etudiants[1].link.url"  />
        <Cardetudiants :image="design.data.etudiants[2].image.url" :job="design.data.etudiants[2].job"
            :name="design.data.etudiants[2].name" :link="design.data.etudiants[2].link.url" />
    </div>
    </div>
</template>

<style lang="scss">
.section1-design {
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

.section4-design {
    &__title {
        padding: rem(0) rem(20);
        margin-top:rem(30);
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

.section2-design {
    display: flex;
    flex-direction: column;
    gap: rem(10);
    padding: rem(30) rem(20);
}

.btn-margin__right {
  margin-right:rem(20);

}
.btn-margin {
    margin-left:rem(20);
}


@media (min-width : 768px) {
    .section1-design {
        padding: rem(60) rem(40);

        img {
            width: rem(400);
        }
    }

    .section2-design {
        padding: rem(30) rem(40);
        flex-direction: row;
    }

    .section4-design {
        padding: rem(30) rem(40);
        &__cards{   
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        }
        &__title {
        padding: rem(30) rem(0);
        margin-top:rem(0);
    
}
    }
}



@media (min-width : 1024px) {
    .section1-design {
        padding: rem(90) rem(40);
        flex-direction: row;
        gap: rem(50);

        img {
            width: 40%;
        }
    }

    .section4-design {
        &__cards {
        margin-top:rem(80);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    &__title {
        padding: rem(0) rem(0);
        margin-top:rem(50);
        font-size:$size-43;
    
}

    }

}



@media (min-width : 1440px) {
    .section1-design {
        margin: rem(130) rem(0);
        padding: rem(30) rem(75);
        flex-direction: row;
        gap: rem(100);

        img {
            width: rem(470);
        }
    }

    .section2-design {
        padding: rem(50) rem(75);
        gap: rem(20)
    }
    .section4-design {
        padding:rem(50) rem(75);
        &__cards {
        margin-top:rem(130);
    }
    &__title {
        margin-top:rem(100);
        font-size:$size-90;
    }

    }
}

@media(min-width : 1750px) {
    .section4-design{
        &__cards {
        display: none;
    }
    }
}

</style>