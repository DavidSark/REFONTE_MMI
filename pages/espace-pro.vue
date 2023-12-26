<script setup>
  const { client } = usePrismic();
  const { data: espacepro, error } = await useAsyncData('espacepro', () => client.getSingle("espacepro"));

  const props = defineProps({
  
  });

  useSeoMeta({
    title: espacepro.value.data.meta_title,
    description: espacepro.value.data.meta_description,
    ogDescription: espacepro.value.data.meta_description,
    ogImage: espacepro.value.data.meta_image.url,
    twitterCard:'summary_large_image',
})

</script>

<template>
     <div class="section1-espacepro">
      <div class="section1-espacepro__sideleft">
      <borderSection :title="espacepro.data.section1[0].titre"
                  :subtitle="espacepro.data.section1[0].soustitre"
                     />
      <Button  class="section-btn" size="small">Déposer une offre</Button>
      </div>
        <img src="/imageep-1.webp" alt="">
    </div>

    <div class="section2-espacepro">
      <img src="/image6.webp" alt="">
      <div class="section2-espacepro__sideright">
        <borderSection :title="espacepro.data.section2[0].titre"
                  :subtitle="espacepro.data.section2[0].soustitre"
                  color="green"
                  borderPosition="right"
                     />
        <Button  class="section-btn"  size="small">Déposer une offre</Button>
      </div>
    </div>

    <div class="section3-espacepro">
      <div class="section3-espacepro__sideleft">
        <borderSection :title="espacepro.data.section3[0].titre"
                  :subtitle="espacepro.data.section3[0].soustitre"
                  color="red"
                     />
        <Button class="section-btn" size="small">Déposer une offre</Button>
      </div>
      <img src="/section-projet.webp" alt="">
      
    </div>
    <Footer></Footer>
</template>

<style lang="scss">

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

.section2-espacepro {
 
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  img {
    width: 100%;
  }
  &__sideright {
    padding: rem(30) rem(20);
  }
}

.section1-espacepro {
  display: flex;
    flex-direction: column;
    gap:rem(30);
  padding: rem(30) rem(20);
  img {
    width: rem(230);
    margin:auto;
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
    gap:rem(40);
    flex-direction: row;
    align-items: center;
    &__sideleft {
      padding:rem(0);
      width:50%;

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
    gap:rem(20);
    &__sideright {
      padding:rem(0);
      width: 50%;
    }
    img {
    width:50%;
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

  .section3-espacepro{
    padding: rem(30) rem(75);
    margin: rem(190) rem(0);
    &__sideleft {
      width:50%;
    }
    img {
      width:50%;
    }


  }
  .section2-espacepro {
    padding: rem(0) rem(75);
    margin: rem(1) rem(0);
    gap:rem(30);
    &__sideleft {
      width : 50%;
    }
    img {
    width:50%;
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
}
</style>