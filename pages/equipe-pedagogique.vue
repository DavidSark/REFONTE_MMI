<script setup>
const { client } = usePrismic();
const { data: equipe, error } = await useAsyncData('equipe', () => client.getSingle("equipe"));


const props = defineProps({
    members: Array
})

useSeoMeta({
    title: equipe.value.data.meta_title,
    description: equipe.value.data.meta_description,
    ogDescription: equipe.value.data.meta_description,
    ogImage: equipe.value.data.meta_image.url,
    twitterCard: 'summary_large_image',
})




</script>

<template>
     <div class="container__index-heroM">
    <heroM title="L’équipe pédagogique" tagline="un espace rempli de créativité" TopImage="/images/departement-heroM-1.webp" BottomImage="/images/departement-heroM-2.webp" Button1="Candidater" Button2="Formation" Button1Url="/candidater" Button2Url="/formation"></heroM>
    </div>
    <div class="container__index-heroT">
        <HeroT title="L’équipe pédagogique" tagline="un espace rempli de créativité" TopImage="images/departement-heroM-1.webp" Button1="Candidater" Button2="Formation" Button1Url="/candidater" Button2Url="/formation"></HeroT>
      </div>
      <div class="container__index-heroC">
        <heroC-hover  title="L’équipe pédagogique" tagline="un espace rempli de créativité" TopImage="/images/formation-heroM-1.webp" BottomImage="/images/departement-heroM-2.webp" Button1="Candidater" Button2="Formation" Button1Url="/candidater" Button2Url="/formation"> 
        </heroC-hover>
      </div> 
    <div class="section1-equipe">
        <PrismicRichText class="section1-equipe__title" :field="equipe.data.section1[0].titre"></PrismicRichText>
        <div class="equipecard">
            <equipecard :members="equipe.data.section2"></equipecard>
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

.section1-equipe {
    padding: rem(30) rem(20);

    &__title {
        font-family: $font-redhat;
        margin: rem(40) rem(0);
        font-size: $size-32;
        font-weight: 100;
        text-transform: uppercase;

        strong {
            font-weight: 800;
        }
    }

}

@media (min-width: 768px) {

    .section1-equipe {
        padding: rem(60) rem(40);
    }

    .equipecard {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: rem(90) rem(0);

    }
}

@media (min-width: 1024px) {

    .section1-equipe {
        padding: rem(60) rem(40);

        &__title {
            font-size: $size-45;
        }
    }

    .equipecard {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

    }
}


@media (min-width: 1440px) {
    .section1-equipe {
        padding: rem(100) rem(75);

        &__title {
            font-size: $size-90;
        }
    }

    .equipecard {
        display: grid;

        grid-template-columns: repeat(4, 1fr);
        margin: rem(100) rem(0);

    }
}
</style>