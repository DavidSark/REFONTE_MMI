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
        img{
        width: rem(187);
        height: rem(150);
        object-fit: cover;
        }
    &-line{
        position: absolute;
        bottom: rem(85);
        width: 100%;
        height: rem(1);
        background-color: $white-soft;
        z-index: -3;

    }
    }
}
</style>