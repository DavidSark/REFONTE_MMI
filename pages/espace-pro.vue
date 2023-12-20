<script setup>
  const { client } = usePrismic();
  const { data: espacepro, error } = await useAsyncData('espacepro', () => client.getSingle("espacepro"));

  const props = defineProps({
  
  });

</script>

<template>
     <div class="section1-espacepro">
      <div class="section1-espacepro__sideleft">
      <borderSection :title="espacepro.data.section1[0].titre"
                  :subtitle="espacepro.data.section1[0].soustitre"
                     />
      <Button class="sectionB-sideleft__btn" size="small">Déposer une offre</Button>
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
        <Button class="sectionB-sideleft__btn" size="small">Déposer une offre</Button>
      </div>
    </div>

    <div class="section3-espacepro">
      <div class="section3-espacepro__sideleft">
        <borderSection :title="espacepro.data.section3[0].titre"
                  :subtitle="espacepro.data.section3[0].soustitre"
                  color="red"
                     />
        <Button class="sectionB-sideleft__btn" size="small">Déposer une offre</Button>
      </div>
      <img src="/section-projet.webp" alt="">
      
    </div>
     

    <Footer></Footer>
</template>

<style lang="scss">

.section3-espacepro {
  display: flex;
  flex-direction: column;

  &__sideleft {
    padding: rem(0) rem(20);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  img {
    width: 100%;
  }
}

.section2-espacepro {
  display: flex;
  flex-direction: column-reverse;
  &__sideright {
  padding: rem(0) rem(20);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  }
  img {
    width: 100%;
  }

}

.section1-espacepro {
  padding: rem(0) rem(20);

  &__sideleft {
    display: flex;
    flex-direction: column;
  }
  padding: rem(30) rem(20);
  display: flex;
  flex-direction: column;
  img {
    width: rem(230);
    margin:auto
  }
}

@media (min-width: 768px) {
  .section1-espacepro {
    padding: rem(60) rem(40);
    img {
      width: rem(300)
    }
  }
}

.section2-espacepro {
  &__sideright {
    padding: rem(0) rem(40);
  }
}

.section3-espacepro {
  &__sideleft {
    padding:rem(60) rem(0) rem(0) rem(40);
  }
}

@media (min-width: 1024px) {

  .section3-espacepro {
   
    display: flex;
    flex-direction: row;
    
    img {
      width: rem(470);
      
    }
  }

  .section2-espacepro {
  
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:rem(20);
    img {
    width:rem(400);
  
    }
  }
  .section1-espacepro {
    padding: rem(30) rem(40);
    display: flex;
    flex-direction: row;
    gap: rem(50);

    img {
      width: rem(330);
    }
  }
}
@media (min-width: 1440px) {
  .section2-espacepro {
    padding: rem(30) rem(75);
    display: flex;
    align-items: center;

    gap:rem(50);
    img {
    width:rem(600)
    }
  }

  .section1-espacepro {
    padding: rem(30) rem(75);
    gap: rem(140);
 
    
    img {
      width: rem(470);
      
    }
  }
}
</style>