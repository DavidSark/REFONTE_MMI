<script setup>
const { client } = usePrismic();
const { data: departement, error } = await useAsyncData('departement', () => client.getSingle("departement"));


</script>

<template>
    <div class="cardquote">
        <div class="cardquote-content">
            <div class="cardquote-content__svg">
                <img  class="svg" src="/icons/icon-quote-stroke.svg" alt="Guillemet">
                <img  class="svg" src="/icons/icon-quote-stroke.svg" alt="Guillemet">
                <img  class="svg" src="/icons/icon-quote-stroke.svg" alt="Guillemet">   
                
            </div>
   
        <div class="cardquote-content__title">
            <PrismicRichText class="cardquote-content__title" :field="departement.data.cardquote[0].title">
            </PrismicRichText>
        </div>         
        </div>
    </div>
</template>

<style lang="scss">
.cardquote {
    overflow: hidden;
    background-color: $black;
    padding: rem(30) rem(20);
    position: relative;
    height: 250px;

    &-content {
        &__svg {
            
            :nth-child(1){
                position: absolute;
                top: 30%;
                left: 15%;
                transform: translate(-50%, -50%);
                width: rem(39);
            }
            :nth-child(2){
                position: absolute;
                top: 35%;
                left: 38%;
                transform: translate(-50%, -50%);
                transform: rotate(25deg);
                width: rem(39);
            }
            :nth-child(3){
                position: absolute;
                top: 20%;
                left: 65%;
                transform: translate(-50%, -50%);
                width: rem(39);
                transform: rotate(190deg);
            }

   
        }



        &__title {
            position: absolute;
            display: flex;
            top: 85%;
            left:45%;
            transform: translate(-50%, -50%);
            flex-direction: column;
            font-family: $font-redhat;
            margin: rem(0) rem(0);
            font-size: $size-32;
            font-weight: 100;
            text-transform: uppercase;
            color: white;

            strong {
                font-weight: 700;
            }
        }
    }
}
</style>