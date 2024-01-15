<script setup>
const { client } = usePrismic();
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"));
</script>

<template>
     <div class="section-espacepro">
        <div class="section-espacepro__text">
            <h2>Espace professionnel<span>.</span></h2>
            <hoverTextDep :textVisible="home.data.index_pro" :textHidden="home.data.index_prohidden" class="hoverText"></hoverTextDep>  
            <PrismicRichText class="prismicHide" :field="home.data.index_pro"></PrismicRichText> 
        </div>

          
            <RouterLink to="/espace-pro">
                <Button size="small" class="section-espacepro__btn-small">déposer une offre</Button>
            </RouterLink>
     


        <div class="section-espacepro__image">
            <img src="/image-espacepro.webp" alt="">
            <div class="section-espacepro__image-line"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section-espacepro{
    position: relative;
    &__text{
        font-family: $font-poppins;
        text-transform: uppercase;
        margin-bottom: rem(15);
        font-weight: 300;
        
       
        h2 {
            letter-spacing: -9%;
            font-family: $font-redhat;
            font-size: $size-32;
            font-weight: 700;
            margin: rem(50) rem(20) rem(15) rem(20);
            display: table-caption;

            span {
                color: $green;
            }
        }

        .prismicHide{
            margin:rem(0) rem(20);
        }
    }

    &__image {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: rem(20);
        overflow: hidden;
  
        img{
        width: rem(187);
        height: rem(150);
        object-fit: cover;
        transform: scale(1.2);
        filter: grayscale(100%);
        transition: filter 0.5s ease-in-out;
        }

    &-line{
        position: absolute;
        bottom: 50%;
        width: 100%;
        height: rem(1);
        background-color: $white-soft;
        z-index: -3;

    }
    }

    .hoverText{
        display: none;
    }

    &__btn-small{
        margin:rem(0) rem(20)
    }
}

@media screen and (min-width:425px) {
    .section-espacepro{
        &__image{
            margin-top: 0;
            img{
                width: 50%;
                height: auto;
                max-width: rem(412);
                max-height: rem(275);
            }
        }
    }
}


@media screen and (min-width:768px) {
    .section-espacepro{
        h2{
            margin: rem(0) rem(40);
        }
        &__image{
            img{
                width: 60%;
            }
        }
        .prismicHide{
            max-width: rem(600);
            font-size: $size-24;
            margin: rem(20) rem(40)  
        }

        &__btn-small{
            margin: rem(0) rem(40);
        }
    }
}
@media screen and (min-width:1024px) {
    .section-espacepro{
        &__image{
            margin-top: rem(285) ;
            img{
                max-width: rem(560);
                max-height: rem(360);
            }
        }
        &__text {
            h2 {
                font-size: 7.5vw;
                margin-bottom: rem(40);
           
            letter-spacing: -9px;
            }

            .prismicHide{
                display: none;
            }
           

            .hoverText{
                display: block;
                font-size: 4vw;
            }
        }
         a{
                display: none;
            }
    }
}
@media screen and (min-width:1440px) {
    .section-espacepro{
        &__image{
            img{
                max-width: rem(700);
                max-height: rem(310);
                transform: initial;
            }
        }
        h2 {
            margin: rem(0) rem(75) ;
            letter-spacing: -9px;
        }

        &__image{
            margin-top: rem(393) ;
        }
        &__btn-big{
            display: block;
        }
        &__btn-small{
            display: none;
        }

    }
}

@media screen and (min-width:1760px) {
    .section-espacepro {
        &__text {
            h2 {
                font-size: $size-123
            }

            p {
                font-size: $size-75
            }
        }
        img{
                max-width: rem(921);
                max-height: rem(410);
                transform: initial;
            }
    }
}
</style>