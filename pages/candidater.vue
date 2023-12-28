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
  
<style lang="scss" scoped>
.section1-candidater {
  padding: rem(30) rem(20);

  &__sideleft {
    display: flex;
    flex-direction: column;
  }

  &__sideright {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .sectionB-sideleft__btn {
      width: rem(120);
    }

  }
}

.btn-margin__right {
  margin-right:rem(20);

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