<script setup>

</script>

<template>
     <div class="section-espacepro">
        <div class="section-espacepro__text">
            <h2>Espace profesionnel<span>.</span></h2>
            <p>Un environnement propice <span>au développement des étudiants.</span></p>
        </div>

        <div class="section-indexdep__button">
            <Button size="small">déposer une offre</Button>
            <Button>déposer une offre</Button>
        </div>

        
        <div class="section-indexdep__image">
            <img src="/image2.webp" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section-espacepro{
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
}
</style>