<script setup>
const { client } = usePrismic();
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))
</script>

<template>
    <div class="section-indexdep">
        <div class="section-indexdep__text">
            <h2> <br/> département<span>.</span></h2>
            <hoverTextDep :textVisible="home.data.index_departement" :textHidden="home.data.index_departementhidden" class="hoverText"></hoverTextDep>  
            <PrismicRichText class="prismicHide" :field="home.data.index_departement"></PrismicRichText> 
        </div>


            <RouterLink to="/departement">
            <Button class="section-indexdep__btn-small" size="small">découvrir</Button>
            </RouterLink>
          


        <div class="section-indexdep__image">
            <img src="/mmi_ellipse.webp" alt="image du département">
            <img src="/mmi_ellipse2.webp" alt="image du département">
            <img src="/mmi_ellipse3.webp" alt="image du département">
            <div class="section-indexdep__blackellipse"></div>
            <div class="section-indexdep__blackellipse3"></div>
        </div>


       

    
    </div>
</template>

<style lang="scss" scoped>
.section-indexdep {
   
    position: relative;
    &__image {
        display: flex;
        align-items: center;
        height: 50%;
        justify-content: flex-end;
        position: relative;
        img{
        filter: grayscale(100%);
        transition: filter 0.5s ease-in-out;
        width: rem(189);
        height: rem(189);
        object-fit: cover;
        border-radius: 100%;
        }
        
        :nth-child(2),
        :nth-child(3) {
            display: none;
        }
    }
    &__blackellipse {
        @include blackEllipse;
        width: rem(200);
        height: rem(100);
        border-radius: rem(100) rem(100) 0 0;
        top: rem(40);
        right: rem(-70);
        z-index: -1;
    }

    &__text {
        font-family: $font-poppins;
        text-transform: uppercase;
        h2 {
            letter-spacing: -9%;
            font-size: $size-32;
            font-weight: 700;
            font-family: $font-redhat;
            margin: rem(0) rem(20);
            margin-bottom: rem(15);
            span {
                color: $blue;
            }
        }
        .prismicHide{
            font-size: $size-16;
            margin: rem(0) rem(20);
           
        }
        .hoverText{
            display: none;
        }
    }

    &__btn-small{
        margin: rem(20) rem(20);
    }
}


@media screen and (min-width:480px) {
    .section-indexdep {
        &__text {
            h2 {
                //font-size: $size-24;
            }
        }

        &__image {
            gap: rem(30);

            :nth-child(2) {
                display: block;
            }
        }
    }
}

@media screen and (min-width:768px) {
    .section-indexdep {
        h2{
            margin: rem(0) rem(40);
        }
        .prismicHide{
            max-width: rem(600);
            font-size: $size-24;
            margin: rem(20) rem(40)  
        }
        &__blackellipse {
            right: rem(-90);
        }
                
        &__btn-small{
            margin: rem(20) rem(40);
        }
    }
}

@media screen and (min-width: 1024px) {
    .section-indexdep {
        &__text {
            h2 {
                font-size: 7.5vw;
                margin: rem(0) rem(40);
            }
        }

        &__image{
            margin-top: rem(320) ;
        }
        .hoverText{
            display: block;
            font-size: 4vw;
        }

        .prismicHide{
            display: none;
        }

       a{
        display: none;
       }

        &__blackellipse {
            display: none;
        }

        &__blackellipse2 {
            @include blackEllipse;
            width: rem(402.5);
            height: rem(201.25);
            border-radius: rem(500) rem(500) 0 0;
            top: rem(100);
            right: rem(-140);
            z-index: -1;
            
        }
        
    }
}

@media screen and (min-width: 1440px) {
        .section-indexdep {
            
        h2 {
            margin: rem(0) rem(75) ;
            letter-spacing: -9px;
        }
        &__image{
            margin-top: rem(420) ;
        }
.hoverText{
    font-size: $size-75 ;
}
       &__btn-big{
        display: block;
       }
       &__btn-small{
        display: none;
       }

        &__image {
            gap: rem(70);

            :nth-child(3) {
                display: block;
            }
        }

        &__blackellipse2 {
            @include blackEllipse;
            width: 40vw;
            height: 20vw;
            border-radius: rem(500) rem(500) 0 0;       
            top: 20vh;
            right: -14.9vw;
            z-index: -1;
        }
    }
}

// @media screen and (min-width:1760px) {
//     .section-indexdep {
//         &__text {
//             h2 {
//                 font-size: $size-123
//             }

//             p {
//                 font-size: $size-75
//             }
//         }
//     }
// }
</style>