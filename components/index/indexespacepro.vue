<script setup>

</script>

<template>
     <div class="section-espacepro">
        <div class="section-espacepro__text">
            <h2>Espace profesionnel<span>.</span></h2>
            <p>Un environnement propice <span>au développement des étudiants.</span></p>
        </div>

        <div class="section-espacepro__button">
            <Button size="small">déposer une offre</Button>
            <Button>déposer une offre</Button>
        </div>

        
        <div class="section-espacepro__image">
            <img src="/image2.webp" alt="">
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

        h2 {
            font-size: $size-39;
            font-weight: 700;
            margin-bottom: rem(15);

            span {
                color: $blue;
            }
        }

        p {
            font-size: $size-24;
        }

        span {
            font-weight: 700;
        }
    }
    
    &__button {
        :nth-child(2) {
            display: none;
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
        &__image{
            margin-top: 0;
            img{
                width: 60%;
                // object-position: 0 30%;
                // width: 921px;
                // height: 410px;
            }
        }
    }
}
@media screen and (min-width:1024px) {
    .section-espacepro{
        &__image{
            margin-top: 0;
            img{
                max-width: rem(560);
                max-height: rem(360);
            }
        }
    }
}
@media screen and (min-width:1440px) {
    .section-espacepro{
        &__image{
            margin-top: 0;
            img{
                max-width: rem(921);
                max-height: rem(410);
                transform: initial;
                // width: 921px;
                // height: 410px;
            }
        }
    }
}
</style>