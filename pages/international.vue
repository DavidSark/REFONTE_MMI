<script setup>
const { client } = usePrismic();
const { data: international, error } = await useAsyncData('international', () => client.getSingle("international"));

useSeoMeta({
    title: international.value.data.meta_title,
    description: international.value.data.meta_description,
    ogDescription: international.value.data.meta_description,
    ogImage: international.value.data.meta_image.url,
    twitterCard:'summary_large_image',
})

</script>

<template>
<scrollbar/>
<div class="container__index-heroM">
    <heroM title="partir à l’étranger" tagline="représente ta formation au delà" TopImage="/images/international-heroM-1.webp" BottomImage="/images/international-heroM-2.webp" Button1="Candidater" Button2="Formation" Button1Url="/candidater" Button2Url="/formation"></heroM>
    </div>
    <div class="container__index-heroT">
        <HeroT title="partir à l’étranger" tagline="représente ta formation au delà" TopImage="images/international-heroM-1.webp" Button1="Candidater" Button2="Formation" Button1Url="/candidater" Button2Url="/formation"></HeroT>
      </div>
      <div class="container__index-heroC">
        <heroC-hover  title="partir à l’étranger" tagline="représente ta formation au delà" TopImage="/images/international-heroM-1.webp" BottomImage="/images/international-heroM-2.webp" Button1="Candidater" Button2="Formation" Button1Url="/candidater" Button2Url="/formation"> 
        </heroC-hover>
      </div> 
 <div class="section1-international" id="section1">
    <borderSection :title="international.data.section1[0].title"
                  :subtitle="international.data.section1[0].subtitle"
                  borderPosition="right"
                     />
    <img src="/image-international-1.webp" alt="Etudiant">
 </div>
 <div class="section2-international">
        <img src="/image8.webp" alt="Always feel free to make explore and do what you love">
        <img src="/image10.webp" alt="Festival OFFF 2023">
    </div>

    <div class="section3-international" id="section2">
        <div class="section3-international__sideleft">
        <borderSection :title="international.data.section3[0].title"
                    :subtitle="international.data.section3[0].subtitle"
                    color="red"
                        />
        </div>
        <div class="section3-international__sideright">
            <div class="section3-international__sideright-title">
            <div class="section3-international__sideright-border"></div>
            <p><span>Vanier </span> college</p>
            </div>
            <img src="/image-international-2.webp" alt="College Vanier">
        </div>
    </div>

    <div class="section4-international" id="section3">
    <div class="section4-international__sideleft">
    <borderSection :title="international.data.section4[0].title"
                  :subtitle="international.data.section4[0].subtitle"
                  borderPosition="right"
                     />
    </div>
    <div class="section4-international__sideright">
        <div class="section4-international__sideright-title">
        <div class="section4-international__sideright-border"></div>
        <p><span>Festival </span> offf</p>
        </div>
        <img src="/image-international-3.webp" alt="Festival OFFF">
    </div>
    </div>

    <div class="section5-international" id="section4">
        <div class="section5-international__cards"> 
        <div class="section5-international__cards-sideleft">
        <PrismicRichText class="section5-international__title" :field="international.data.section5[0].title"></PrismicRichText>
        
        <div class="section5-international__cards-sideleft__c">
        <cardavis color="green"
        :image="international.data.testimonial[0].image.url"
        :commentaire="international.data.testimonial[0].commentaire"
        :name="international.data.testimonial[0].name"
        :job="international.data.testimonial[0].job"
        :promo="international.data.testimonial[0].promo"
       />
              
       <cardavis color="green"
        :image="international.data.testimonial[1].image.url"
        :commentaire="international.data.testimonial[1].commentaire"
        :name="international.data.testimonial[1].name"
        :job="international.data.testimonial[1].job"
        :promo="international.data.testimonial[1].promo"
       />
        </div>
        </div>
        <div class="section5-international__cards-sideright">
            <Cardquote color="green"></Cardquote>

        </div>
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

.section1-international {
    display: flex;
    flex-direction: column;
    padding:rem(40) rem(20);
    gap:rem(40);
    align-items: center;
}

.section2-international {
    display: flex;
    flex-direction: column;
    gap:rem(6);
    overflow: hidden;
    margin:rem(40) rem(0);
}

.section3-international {
    display: flex;
    flex-direction: column;
    &__sideleft {
        padding:rem(0) rem(20);
    }
    &__sideright {
        display: flex;
        flex-direction: column;
        gap:rem(10);
        padding:rem(30) rem(10);
        &-border {
            width: rem(10);
            height: rem(15);
            background-color: $black;
        }
        &-title {
            display: flex;
            align-items: center;
            gap:rem(5);
            text-transform: uppercase;
            font-family: $font-poppins;
            font-size: $size-13;
            font-weight: 300;
            span {
                font-weight:700;
            }
        }
    }
}

.section4-international {
    display: flex;
    flex-direction: column;
    &__sideleft {
        padding:rem(0) rem(20);
    }
    &__sideright {
        display: flex;
        flex-direction: column;
        gap:rem(10);
        padding:rem(30) rem(10);
        &-border {
            width: rem(10);
            height: rem(15);
            background-color: $black;
        }
        &-title {
            display: flex;
            align-items: center;
            gap:rem(5);
            text-transform: uppercase;
            font-family: $font-poppins;
            font-size: $size-13;
            font-weight: 300;
            span {
                font-weight:700;
            } 
        }
    }
}

.section5-international {
   
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

@media (min-width : 768px) {
    .section1-international {
        flex-direction: row-reverse;
        padding: rem(30) rem(40);
        gap:rem(20);
        img {
            width: 40%;
        }
    }

    .section2-international {
        display: flex ;
        flex-direction: row;
        img {
            width: 50%;
        }
    }

    .section3-international {
        gap:rem(40);
        padding: rem(30) rem(40);
        &__sideleft{
            padding: rem(0);
        }
        &__sideright {
            padding: rem(0);
        }
    }

    .section4-international {
        gap:rem(40);
        padding: rem(30) rem(40);
        &__sideleft{
            padding: rem(0);
        }
        &__sideright {
            padding: rem(0);
        }
    }

    .section5-international {
        margin-top:rem(50);
      &__cards {
          &-sideleft {
              padding:rem(0) rem(40) rem(40) rem(40) ;
          }
      }
  }
}

@media (min-width:1000px) {
    .section5-international {
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


@media(min-width : 1024px) {
    .section1-international {
        img {
            width: 45%;
        }
    }
    .section3-international {
        flex-direction: row;
        align-items: center;
        &__sideleft{
            width: 60%;
        }
        &__sideright {
            width: 40%;
        }
    }

    .section4-international {
        flex-direction: row-reverse;
        align-items: center;
        padding: rem(70) rem(40);
        &__sideleft{
            width: 60%;
        }
        &__sideright {
            width: 40%;
        }
    }
}

@media (min-width : 1440px) {
    .section1-international {
        padding: rem(100) rem(75) rem(100) rem(40);
        gap:rem(40);
        img {
            max-width:rem(597);
    }
    }
    .section3-international {
        padding:rem(100) rem(75);
        gap:rem(100);
        &__sideleft{
            width: 60%;
        }
        &__sideright {
            &-title {
                font-size:$size-19
            }
            width: 50%;
        }
    }
    .section4-international {
        padding:rem(90) rem(75);
        gap:rem(100);
        &__sideleft{
            width: 50%;
        }
        &__sideright {
            &-title {
                font-size:$size-19
            }
            width: 50%;
        }
    }

    .section5-international {
        margin-top:rem(120);
   
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
}
</style>