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
                <img  class="svg" src="/icons/icon-quote-white.svg" alt="Guillemet">  
                <img  class="svg" src="/icons/icon-quote-white.svg" alt="Guillemet">  
                <img  class="svg" src="/icons/icon-quote-white.svg" alt="Guillemet">  
                <img  class="svg" src="/icons/icon-quote-white.svg" alt="Guillemet">  
                
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
    padding: rem(0) rem(20);
    position: relative;
    height: 100%;

    &-content {
        &__svg {
            
            :nth-child(1){
                position: absolute;
                top: 15%;
                left: 15%;
                transform: translate(-50%, -50%);
                width: rem(70);
            }
            :nth-child(2){
                position: absolute;
                top: 35%;
                left: 38%;
                transform: translate(-50%, -50%);
                transform: rotate(25deg);
                width: rem(70);
            }
            :nth-child(3){
                position: absolute;
                top: 20%;
                left: 70%;
                transform: translate(-50%, -50%);
                width: rem(70);
                transform: rotate(190deg);
            }
            :nth-child(4){
                position: absolute;
                top: 45%;
                left: 10%;
                transform: translate(-50%, -50%);
                width: rem(100);
                transform: rotate(190deg);
            }
            :nth-child(5) {
                position: absolute;
                top: 10%;
                left: 40%;
                transform: translate(-50%, -50%);
                width: rem(80);
                transform: rotate(30deg);
            }
            :nth-child(6) {
                position: absolute;
                top: 40%;
                left: 70%;
                transform: translate(-50%, -50%);
                width: rem(100);
                transform: rotate(0deg);
            }
            :nth-child(7) {
                position: absolute;
                top: 55%;
                left: 45%;
                transform: translate(-50%, -50%);
                width: rem(80);
                transform: rotate(-40deg);

            }

   
        }
        &__title {
            position: absolute;
            display: flex;
            top: 85%;
            left:50%;
            transform: translate(-50%, -50%);
            flex-direction: column;
            font-family: $font-redhat;
            margin: rem(0) rem(0);
            font-size: 5vw;
            font-weight: 100;
            text-transform: uppercase;
            color: white;

            strong {
                font-weight: 700;
            }
        }
    }
}

@media (min-width : 1440px) {
    .cardquote {
    overflow: hidden;
    background-color: $black;
    padding: rem(0) rem(20);
    position: relative;
    height: 100%;
    &-content {
        &__svg {
            
            :nth-child(1){
                position: absolute;
                top: 15%;
                left: 15%;
                transform: translate(-50%, -50%);
                width: rem(80);
            }
            :nth-child(2){
                position: absolute;
                top: 35%;
                left: 38%;
                transform: translate(-50%, -50%);
                transform: rotate(25deg);
                width: rem(100);
            }
            :nth-child(3){
                position: absolute;
                top: 20%;
                left: 70%;
                transform: translate(-50%, -50%);
                width: rem(100);
                transform: rotate(190deg);
            }
            :nth-child(4){
                position: absolute;
                top: 30%;
                left: 10%;
                transform: translate(-50%, -50%);
                width: rem(90);
                transform: rotate(190deg);
            }
            :nth-child(5) {
                position: absolute;
                top: 10%;
                left: 35%;
                transform: translate(-50%, -50%);
                width: rem(140);
                transform: rotate(-20deg);
            }
            :nth-child(6) {
                position: absolute;
                top: 40%;
                left: 70%;
                transform: translate(-50%, -50%);
                width: rem(120);
                transform: rotate(0deg);
            }
            :nth-child(7) {
   
                left: 25%;
    
            }
        }
    }
}

}
</style>