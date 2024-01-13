<script setup>
const { client } = usePrismic();
const { data: formation, error } = await useAsyncData('formation', () => client.getSingle("formation"));
const { data: projets } = await useAsyncData('projets', () => client.getSingle("projets"));

useSeoMeta({
    title: formation.value.data.meta_title,
    description: formation.value.data.meta_description,
    ogDescription: formation.value.data.meta_description,
    ogImage: formation.value.data.meta_image.url,
    twitterCard: 'summary_large_image',
})

</script>

<template>
    <scrollbar/>
    <div class="container__index-heroM">
    <heroM title="la formation" tagline="un espace rempli de créativité" TopImage="/images/formation-heroM-1.webp" BottomImage="/images/formation-heroM-2.webp" Button1="Candidater" Button2="Département" Button1Url="/candidater" Button2Url="/departement"></heroM>
    </div>
    <div class="container__index-heroT">
        <HeroT title="la formation" tagline="un espace rempli de créativité" TopImage="images/formation-heroM-1.webp" Button1="Candidater" Button2="Département" Button1Url="/candidater" Button2Url="/departement"></HeroT>
      </div>
      <div class="container__index-heroC">
        <heroC-hover  title="la formation" tagline="un espace rempli de créativité" TopImage="/images/formation-heroM-1.webp" BottomImage="/images/mentionslegales-heroM-2.webp" Button1="Candidater" Button2="Département" Button1Url="/candidater" Button2Url="/departement"> 
        </heroC-hover>
      </div> 
    <div>
        <div class="section1-formation" id="section1">
            <div class="section1-formation__content">
                <borderSection :title="formation.data.section1[0].title"
                :subtitle="formation.data.section1[0].subtitle"  ></borderSection>
            </div>
            <div class="section1-formation__parcours">
                <card-parcours1></card-parcours1>
            </div>
        </div>

        <div class="section2-formation" id="section2">
            <div class="section2-formation__content">
                <borderSection color="red" :title="formation.data.section2[0].title"
                    :subtitle="formation.data.section2[0].subtitle" borderPosition="right" ></borderSection>
            </div>
            <div class="section2-formation__parcours">
                <card-parcours2></card-parcours2>
            </div>
        </div>

        <div class="section3-formation" id="section3">
            <div class="section3-formation__content">
                <borderSection  color="green" :title="formation.data.section3[0].title"
                    :subtitle="formation.data.section3[0].subtitle" ></borderSection>
            </div>

            <img src="/image14.webp" alt="">
        </div>


        <div class="section4-formation" id="section4">
            <cardformation color="red" :items="projets.data.projects"></cardformation>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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

.section1-formation{
    padding: rem(30) rem(20);
    display: flex;
    flex-direction: column;
    gap: rem(40);
  

    &__parcours{
      
        // background-color: $black;
        // width: 100%;
        // height: rem(400);
    }
    
}

.section2-formation{
    padding: rem(30) rem(20);
    display: flex;
    flex-direction: column;
    gap: rem(40);
    &__parcours{
        margin: auto;
        // background-color: $black;
        // width: 100%;
        // height: rem(150);
    }
}

.section3-formation{
    display: flex;
    flex-direction: column;
    &__content{
        padding: rem(30) rem(20);
    }
}

@media screen and (min-width: 768px) {
    .section1-formation, .section2-formation{
    padding: rem(60) rem(40);
    
}   .section3-formation{
    padding: rem(30) rem(40);
    &__content{
        padding: rem(40) rem(0);
    }
}
}

@media screen and (min-width: 1024px) {

    .section1-formation{

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: rem(40);
    &__content {
        width: 100%;
        height: auto;
    }

    &__parcours{
        width: 50%;
        height:500px;
    
    }
    
}

    .section2-formation{
        display: flex;
        flex-direction: column;
        gap: rem(40);
        
    
}
    .section3-formation{
        display: flex;;
        flex-direction: row;
        align-items: center;
        gap:rem(60);
      
        &__content{
            width: 50%;
        }
       img{
        width: 50%;
       }
    }


}

@media screen and (min-width : 1270px) {

    .section2-formation{
        display: flex;
        flex-direction: row-reverse;

        align-items: center;
        gap: rem(40);
    }
    

}

@media screen and (min-width: 1440px) {
    .section1-formation{
        padding: rem(120) rem(75);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        gap: rem(150);

        &__parcours{
            height: 100%;
        }
    } 

    .section2-formation{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: rem(40);
        
    
}
    .section2-formation, .section3-formation{
        padding: rem(120) rem(75);
}
}
</style>