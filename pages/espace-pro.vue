<script setup>
const { client } = usePrismic();
const { data: espacepro, error } = await useAsyncData('espacepro', () => client.getSingle("espacepro"));
const { data: projets } = await useAsyncData('projets', () => client.getSingle("projets"));


useSeoMeta({
  title: espacepro.value.data.meta_title,
  description: espacepro.value.data.meta_description,
  ogDescription: espacepro.value.data.meta_description,
  ogImage: espacepro.value.data.meta_image.url,
  twitterCard: 'summary_large_image',
})

</script>

<template>
<scrollbar/>
<div class="container__index-heroM">
    <heroM title="espace pro" tagline="nos étudiants ont de l’avenir" TopImage="/images/espacepro-heroM-1.webp" BottomImage="/images/espacepro-heroM-2.webp" Button1="Contact" Button2="Formation" Button1Url="/contact" Button2Url="/formation"></heroM>
    </div>
    <div class="container__index-heroT">
        <HeroT title="espace pro" tagline="nos étudiants ont de l’avenir" TopImage="images/espacepro-heroM-1.webp" Button1="Contact" Button2="Formation" Button1Url="/contact" Button2Url="/formation"></HeroT>
      </div>
      <div class="container__index-heroC">
        <heroC-hover  title="espace pro" tagline="nos étudiants ont de l’avenir" TopImage="/images/espacepro-heroM-1.webp" BottomImage="/images/espacepro-heroM-2.webp" Button1="Contact" Button2="Formation" Button1Url="/contact" Button2Url="/formation"> 
        </heroC-hover>
      </div> 
  <div class="section1-espacepro" id="section1">
    <div class="section1-espacepro__sideleft">
      <borderSection :title="espacepro.data.section1[0].titre" :subtitle="espacepro.data.section1[0].soustitre" />
      <a href="https://stage.mmimontbeliard.com/" target="_blank">
      <Button class="section-btn" size="small">Déposer une offre</Button>
      </a>  
    </div>
    <img src="/imageep-1.webp" alt="Etudiant">
  </div>

  <div class="section2-espacepro" id="section2">
    <img src="/image6.webp" alt="Etudiantes">
    <div class="section2-espacepro__sideright">
      <borderSection :title="espacepro.data.section2[0].titre" :subtitle="espacepro.data.section2[0].soustitre"
        color="green" borderPosition="right" />
        
        <a href="https://stage.mmimontbeliard.com/" target="_blank">
      <Button class="btn-margin__right" size="small">Déposer une offre</Button>
       </a>
 
    </div>
  </div>

  <div class="section3-espacepro" id="section3">
    <div class="section3-espacepro__sideleft">
      <borderSection :title="espacepro.data.section3[0].titre" :subtitle="espacepro.data.section3[0].soustitre"
        color="red" />
        <a href="https://stage.mmimontbeliard.com/" target="_blank">
      <Button class="section-btn" size="small">Déposer une offre</Button>
        </a>
    </div>
    <img src="/section-projet.webp" alt="Mmi montbéliard">
  </div>
  <div class="section4-espacepro" id="section4">
            <cardformation color="green" :items="projets.data.projects"></cardformation>
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


.test {
  padding:300px;
  height: 100vh;
  font-size:40px;
  display:flex;
  flex-direction:column;
  gap: 40px;
}
.section-btn {
  margin-left: rem(20);
}

.section3-espacepro {
  display: flex;
  flex-direction: column;

  &__sideleft {
    padding: rem(30) rem(20);
  }

  img {
    width: 100%;
  }
}

.btn-margin__right {
  margin-right:rem(20);

}

.section2-espacepro {

  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;

  img {
    width: 100%;
  }

  &__sideright {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: rem(30) rem(20);
  }
}

.section1-espacepro {
  display: flex;
  flex-direction: column;
  gap: rem(30);
  padding: rem(30) rem(20);

  img {
    width: rem(230);
    margin: auto;
  }
}

@media (min-width: 768px) {
  .section1-espacepro {
    padding: rem(60) rem(40);

    img {
      width: rem(300)
    }
  }

  .section2-espacepro {

    &__sideright {
      padding: rem(60) rem(40);
    }
  }

  .section3-espacepro {
    &__sideleft {
      padding: rem(60) rem(40);
    }
  }
}


@media (min-width: 1024px) {

  .section3-espacepro {
    padding: rem(10) rem(40) rem(100) rem(40);
    display: flex;
    gap: rem(40);
    flex-direction: row;
    align-items: center;

    &__sideleft {
      padding: rem(0);
      width: 50%;

    }

    img {
      width: 50%;

    }
  }

  .section2-espacepro {
    padding: rem(100) rem(40);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: rem(20);

    &__sideright {
      padding: rem(0);
      width: 50%;
    }

    img {
      width: 50%;
    }
  }

  .section1-espacepro {
    padding: rem(100) rem(40) rem(20) rem(40);
    display: flex;
    flex-direction: row;
    gap: rem(50);

    img {
      width: rem(330);
    }
  }
}

@media (min-width: 1440px) {

  .section3-espacepro {
    padding: rem(30) rem(75);
    margin: rem(130) rem(0);

    &__sideleft {
      width: 50%;
    }

    img {
      width: 50%;
    }


  }

  .section2-espacepro {
    padding: rem(0) rem(75);
    margin: rem(1) rem(0);
    gap: rem(30);

    &__sideleft {
      width: 50%;
    }

    img {
      width: 50%;
    }
  }

  .section1-espacepro {
    margin: rem(130) rem(0);
    padding: rem(30) rem(75);
    gap: rem(140);


    img {
      width: rem(470);

    }
  }
}</style>