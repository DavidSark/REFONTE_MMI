<script setup>
const { client } = usePrismic();
const { data: canditater, error } = await useAsyncData('canditater', () => client.getSingle("canditater"));

useSeoMeta({
  title: canditater.value.data.meta_title,
  description: canditater.value.data.meta_description,
  ogDescription: canditater.value.data.meta_description,
  ogImage: canditater.value.data.meta_image.url,
  twitterCard: 'summary_large_image',
})

</script>

<template>
   <div class="container__index-heroM">
    <heroM title="Nous rejoindre" tagline="plusieurs façons de nous rejoindre" TopImage="/images/candidater-heroM-1.webp" BottomImage="/images/candidater-heroM-2.webp" Button1="Contact" Button2="Formation" Button1Url="/contact" Button2Url="/formation"></heroM>
    </div>
    <div class="container__index-heroT">
        <HeroT title="Nous rejoindre" tagline="plusieurs façons de nous rejoindre" TopImage="images/candidater-heroM-1.webp" Button1="Contact" Button2="Formation" Button1Url="/contact" Button2Url="/formation"></HeroT>
      </div>
      <div class="container__index-heroC">
        <heroC-hover  title="Nous rejoindre" tagline="plusieurs façons de nous rejoindre" TopImage="/images/candidater-heroM-1.webp" BottomImage="/images/candidater-heroM-2.webp" Button1="Contact" Button2="Formation" Button1Url="/contact" Button2Url="/formation"> 
        </heroC-hover>
      </div> 
  <div class="section1-candidater">
    <div class="section1-candidater__sideleft">
      <borderSection :title="canditater.data.section1[0].title" :subtitle="canditater.data.section1[0].subtitle" />
      <a href="https://www.parcoursup.gouv.fr/" target="_blank">
        <Button class="btn-margin" size="small" color="white" bgColor="bgBlack">S'inscrire à
          parcoursup</Button>
      </a>
    </div>
    <div class="section1-candidater__sideright">
      <borderSection :title="canditater.data.section2[0].title" :subtitle="canditater.data.section2[0].subtitle"
        color="red" borderPosition="right" />
      <a href="https://www.linkedin.com/school/mmimontbeliard/?originalSubdomain=fr" target="_blank">
        <Button class="btn-margin__right" size="small" color="white" bgColor="bgBlack">S'inscrire</Button>
      </a>
    </div>
  </div>

  <Cardcandidater></Cardcandidater>
</template>
  
<style lang="scss" >
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

.section1-candidater {
  padding: rem(30) rem(20);
  display: flex;
  flex-direction: column;
  gap: rem(50);

  &__sideleft {
    display: flex;
    flex-direction: column;
  }

  &__sideright {
    display: flex;
    flex-direction: column;
    align-items: flex-end;



  }
}

.btn-margin__right {
  margin-right:rem(20);

}
.btn-margin {
    margin-left:rem(20);
}

@media (min-width: 768px) {
  .section1-candidater {
    padding: rem(30) rem(40);
  }
}

@media (min-width: 1024px) {
  .section1-candidater {
    padding: rem(30) rem(40);
  }
}

@media (min-width: 1440px) {
  .section1-candidater {
    padding: rem(170) rem(75);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>