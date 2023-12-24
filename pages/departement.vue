<script setup>
const { client } = usePrismic();
const { data: departement, error } = await useAsyncData('departement', () => client.getSingle("departement"));

  const props = defineProps({
  
});
</script>
<template>
    <div class="section1-departement">
        <div class="section1-departement__content">
     <borderSection :title="departement.data.section1[0].title"
                  :subtitle="departement.data.section1[0].subtitle"
                     />
        </div>
        <div class="section1-departement__card">
    <cardgooglemap></cardgooglemap>
        </div>
     
    </div>
    <img src="/image-video-dep.webp" alt="">

    <div class="section2-departement">
        <PrismicRichText class="section2-departement__title" :field="departement.data.actualites[0].title"></PrismicRichText>

        <div class="section2-departement__card">
        <div class="section2-departement__card-1">
            <img src="/image-dep-card1.webp" alt="">
            <h6><span>Bienvenue aux </span>étudiants 2023</h6>
            <p>C’est partie pour une nouvelle édition de la journée. <span>Bienvenue aux étudiants</span> où les différentes promos de MMI ont pu se réunir pour participer à un jeu de piste !</p>
            <Button class="section2-departement__card__btn" size="small" >En savoir plus</Button>
        </div>
        <div class="section2-departement__card-2">
            <img src="/image-dep-card2.webp" alt="">
            <h6><span>offf </span>barcelona 2023</h6>
            <p>Certains de nos étudiants ont pu partir en voyage à Barcelone en participant au <span>Festival du Design “OFFF”.</span></p>
            <Button class="section2-departement__card__btn" size="small" >En savoir plus</Button>
        </div>
        <div class="section2-departement__card-3">
            <img src="/image-dep-card3.webp" alt="">
            <h6><span>rentrée </span>2023</h6>
            <p>C’est partie pour une <span>nouvelle année</span>, pour nos étudiants de MMI. Au programme quelques jours de découverte pour nos nouveaux étudiants.</p>
            <Button class="section2-departement__card__btn" size="small" >En savoir plus</Button>
        </div>
    </div>
    </div>
    <div class="section3-departement">
        <div class="section3-departement__sideright">
            <borderSection :title="departement.data.section3[0].title"
                  :subtitle="departement.data.section3[0].subtitle"
                  color="red" borderPosition="right"
                     />
        </div>
        <img src="/image-dep-bureau.webp" alt="">
    </div>

    <div class="section4-departement">
        <div class="section4-departement__cards"> 
        <div class="section4-departement__cards-sideleft">
        <PrismicRichText  class="section4-departement__title" :field="departement.data.section4[0].title"></PrismicRichText>
        
        <div class="section4-departement__cards-sideleft__c">
        <cardavis 
        :image="departement.data.testimonial[0].image.url"
        :commentaire="departement.data.testimonial[0].commentaire"
        :name="departement.data.testimonial[0].name"
        :job="departement.data.testimonial[0].job"
        :promo="departement.data.testimonial[0].promo"
       />
              
       <cardavis
        :image="departement.data.testimonial[1].image.url"
        :commentaire="departement.data.testimonial[1].commentaire"
        :name="departement.data.testimonial[1].name"
        :job="departement.data.testimonial[1].job"
        :promo="departement.data.testimonial[1].promo"
       />
        </div>
        </div>
        <div class="section4-departement__cards-sideright">
            <Cardquote></Cardquote>

        </div>
    </div>
    </div>
    <Footer></Footer>


</template>

<style lang="scss">

.section4-departement {
   
    &__title {
    font-family: $font-redhat;
    margin:rem(40) rem(0);
    font-size: $size-32;
    font-weight: 100;
    text-transform: uppercase;
    border-bottom: 2px solid $white-soft ;
    display: inline-block;
    letter-spacing: -2.34px;
    padding-bottom: rem(20);
    strong {
    font-weight: 800;
    }
    }
    &__cards {
        &-sideleft {
            padding:rem(30) rem(20);
            &__c {
                display: flex;
                flex-direction: column;
                gap: rem(60);
            }
      
        }

   
        
    }

}

.section3-departement {
    display: flex;
    flex-direction: column;

    &__sideright {
        padding:rem(30) rem(20);
    }

}
.section2-departement {
    padding:rem(30) rem(20);
    &__card {
        display: flex;
        flex-direction: column;
        gap:rem(60);
        h6 {
                margin:rem(10) rem(0);
                text-transform: uppercase;
                font-family: $font-redhat;
                font-size:$size-14;
                span {
                    font-weight: 700;
                }
              
            }
            p {
                    font-family: $font-poppins;
                    font-size: $size-13;
                    font-weight: 300;
                    line-height: normal;
                    span {
                    font-weight: 700;
                    color:$green;
                }
                }
    
  
            &__btn {
                    cursor: pointer;
                    margin-top:rem(10)
                }
        
        &-2 {
            p {
                span{
                    color:$blue;
                }
            }

        }
        &-3 {
            p {
                span{
                    color:$red;
                }
            }

        }

    }
   
    &__title {
    letter-spacing: -2.34px;
    font-family: $font-redhat;
    margin:rem(40) rem(0);
    font-size: $size-32;
    font-weight: 100;
    text-transform: uppercase;
    strong {
    font-weight: 800;
    }
    }
}
.section1-departement {
    padding:rem(30) rem(20);
    display: flex;
    flex-direction: column;
    gap:rem(40);
}

img {
    width: 100%;
}

@media (min-width : 768px) {

    .section4-departement {
        margin-top:rem(50);
        &__cards {
            &-sideleft {
                padding:rem(0) rem(40) rem(40) rem(40) ;

            }
        }
    }

    .section3-departement {
        padding:rem(30) rem(40);
        
    &__sideright {
        padding:rem(40) rem(0);
    }
    }

    .section1-departement {
        padding:rem(30) rem(40);
    }

    .section2-departement {
        padding:rem(30) rem(40);
        &__card{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
           h6 {
            font-size:$size-16;
           }
           p {
            font-size: $size-16;
           }
        }
    }
}

@media (min-width:1000px) {
    .section4-departement {
        margin-top:rem(100);
        &__title {
        font-size: $size-45;
        }
        &__cards{
            display: flex;
            flex-direction: row;
            align-items: stretch;
            &-sideleft{
                width:50%;
            }
            &-sideright {
                background-color: $black;
                flex:1;
                width:40%;
        
         
            }
        }
    }

}

@media (min-width: 1024px ) {

    .section2-departement{
        &__title {
            font-size: $size-45;
        }
    }
    .section3-departement {
        &__sideright {
            width: 50%;
        }
        img {
            width: 50%;
        }
        display: flex;
        flex-direction: row-reverse;

    }
    
}



@media (min-width: 1440px) {

    .section4-departement {
        margin-top:rem(100);
        &__cards {
            &-sideleft {
                padding:rem(0) rem(75) rem(75) rem(75);
                &__c {
                gap: rem(80);
            }
            }
        }
    
        &__title {
    font-size: $size-90;
    }
    }


    .section3-departement {
          padding:rem(70) rem(75) rem(100) rem(75);
          gap:rem(30)

    }
    .section1-departement{
        padding:rem(120) rem(75);
        display: grid;
        grid-template-columns: repeat(2,1fr);
        align-items: center;
        gap: rem(150);     
    }

    .section2-departement {
        padding:rem(80) rem(75);
        &__title {
            font-size: $size-90;
        }
        &__card{
            margin:rem(100) rem(0);
            gap: rem(100);
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            align-items: center;
           h6 {
            font-size:$size-20;
           }
           p {
            font-size: $size-16;
           }
           &-2 {
            img {
                width: 450px;
            }
           }
        }

    }
}
</style>