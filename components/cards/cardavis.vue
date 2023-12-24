<script setup>
const { client } = usePrismic();
const { data: departement, error } = await useAsyncData('departement', () => client.getSingle("departement"));

const props = defineProps({
    commentaire: Array,
    name: Array,
    job: Array,
    promo: Array, 
    image:String,
    color:String,

});

const className = computed(() =>({
    ' -red': props.color === 'red',
    ' -green': props.color === 'green',

  }))

</script>

<template>
   
   <div class="card-avis">

    <div class="card-avis__content" :class="className">
    <img src="/icons/icon-quote.svg" alt="">
    
    <PrismicRichText  class="card-avis__content-commentaire" :field="commentaire"></PrismicRichText>
    <div class="card-avis__content-border">
    <span></span>
    <div class="card-avis__content-border__info">
    <PrismicRichText class="card-avis__content-name" :field="name"></PrismicRichText>
   <div class="card-avis__content-border__info-bar">|</div>
    <PrismicRichText class="card-avis__content-name" :field="job"></PrismicRichText>
    <div class="card-avis__content-border__info-bar">|</div>
    <PrismicRichText class="card-avis__content-name" :field="promo"></PrismicRichText>
    </div>
    </div>
  
   
    </div>
   
    <img :src="image">
   
   </div>

</template>

<style lang="scss">


.card-avis {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  
 
    img{
    width: rem(100);
    }
    &__content {
        display: flex;
        flex-direction: column;
        gap: rem(10);
        padding:rem(0) rem(30);
 

        &-border{
            margin-top:rem(5);
            display: flex;
            flex-direction: row;
            align-items: center;
            gap:rem(10);
            span {
            height: 55px;
            width: 5px;
            background-color: $blue;
        }
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
            
            strong{
                font-weight: 700;
            }
        }
        &-name {
            font-family: $font-poppins;
            font-weight: 300;
            text-transform: uppercase;
            line-height: normal;
            font-size: $size-13;
            strong{
                font-weight: 700;
            }

        }
        img {
            margin-left:rem(-20);
            width: rem(54);
        }
        &.-red {
            img {
                border:1px solid red
            }
        }
        &.-green {
            img {
                border:1px solid green;
            }
        }
    }
}

@media (min-width : 768px ) {
    .card-avis {

        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        &__content {
            &-commentaire {
                font-size: $size-16;
            }
   
            &-border {
                span {
                    height: rem(20);
                    width: rem(15);
                    background-color: $black;
                    
                }
                &__info {
                    flex-direction: row;
                    gap: rem(10);
                    &-bar {
                    display:block;
                 }
                }
            }
        }
    }
}

@media (min-width : 1440px) {
    .card-avis {
        gap:rem(40);
        img{
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
            margin-left:rem(-40);
            width: rem(54);
        }
        }
    }

}

</style>