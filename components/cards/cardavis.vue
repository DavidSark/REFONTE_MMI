<script setup>
const { client } = usePrismic();
const { data: departement, error } = await useAsyncData('departement', () => client.getSingle("departement"));

const props = defineProps({
    commentaire: Array,
    name: Array,
    job: Array,
    promo: Array,
    image: String,
    color: String,

});

const className = computed(() => ({
    ' -red': props.color === 'red',
    ' -green': props.color === 'green',
    '-borderGreen': props.color === 'green'

}))

</script>

<template>
    <div class="card-avis"  >

        <div class="card-avis__content"  :class="className">
            <img  class="svg" src="/icons/icon-quote.svg" alt="Guillemet">

            <PrismicRichText class="card-avis__content-commentaire" :field="commentaire"></PrismicRichText>

            <div class="card-avis__content-border"  :class="className">
                <div class="card-avis__content-border__info">
                    <span></span>
                    <PrismicRichText class="card-avis__content-name" :field="name"></PrismicRichText>
                    <div class="card-avis__content-border__info-bar">|</div>
                    <PrismicRichText class="card-avis__content-name" :field="job"></PrismicRichText>
                    <div class="card-avis__content-border__info-bar">|</div>
                    <PrismicRichText class="card-avis__content-name" :field="promo"></PrismicRichText>  
                </div> 
             
                <div class="image-avis">
                    <img :src="image" alt="Image d'étudiants">
                </div>
             
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.card-avis {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    img {
        width: rem(100);
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: rem(10);
        padding: rem(0) rem(20);
       
 
        &-border {
            margin-top: rem(5);
            display: flex;
            justify-content: space-between;
            align-items: center;
            @include borderColorTitle;
            border-color: $blue;
            &.-borderGreen {
                border-color: $green; // Utilisez votre variable de couleur définie pour le vert
            }

            padding: 0 rem(10);
            


            &__info {
                display: flex;
                flex-direction: column;
               
                &-bar {
                    display: none;
                }
            }
        }

        &-commentaire {
            font-family: $font-poppins;
            font-weight: 300;
            text-transform: uppercase;
            line-height: normal;
            font-size: $size-19;
         
            strong {
                font-weight: 700;
            }
        }

        &-name {
            font-family: $font-poppins;
            font-weight: 300;
            text-transform: uppercase;
            line-height: normal;
            font-size: $size-13;

            strong {
                font-weight: 700;
            }

        }

        img {
            margin-left: rem(-20);
            width: rem(54);
        }

        &.-red {
            .svg {
                filter: brightness(0) saturate(100%) invert(14%) sepia(98%) saturate(3527%) hue-rotate(354deg) brightness(85%) contrast(117%)
            }
        }

        &.-green {
    
            .svg {
                filter: brightness(0) saturate(100%) invert(42%) sepia(24%) saturate(931%) hue-rotate(111deg) brightness(98%) contrast(94%)
            }

        }
    }
}

@media screen and (min-width:697px) {
    .card-avis{
        &__content{
            width: rem(650);
            margin: 0 auto;
        }
    }
}

@media (min-width : 768px) {
    .card-avis {

        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    

        &__content {
            width: 100%;
            justify-content: flex-start;
            &-commentaire {
                font-size: $size-16;
               
            }

            &-border {
                border: none;
                padding: 0;
                span {
                    height: rem(20);
                    width: rem(15);
                    background-color: $black;

                }

                &__info {
                    flex-direction: row;
                    gap: rem(10);
                    justify-content: flex-start;
                    &-bar {
                        display: block;
                    }
                }
            }
        }
    }
}

@media (min-width : 1440px) {
    .card-avis {
        gap: rem(40);

        img {
            width: rem(115);
        }

        &__content {
            &-commentaire {
                font-size: $size-23;
            }

            &-name {
                font-size: $size-14;
            }

            img {
                margin-left: rem(-40);
                width: rem(47);
            }

        }
    }

    .image-avis {
        img {
            width: rem(85)
        }
    }
}

</style>