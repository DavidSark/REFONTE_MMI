<script setup>
const { client } = usePrismic();
const { data: design, error } = await useAsyncData('design', () => client.getSingle("design"));

const props = defineProps({
    name: Array,
    job: Array,
    image: String,
    link: String,
    bgColor:String,

});

const className = computed (() => ({

    ' -bgRed' : props.bgColor === 'bgRed',
    ' -bgGreen' : props.bgColor === 'bgGreen',
}))

</script>

<template>
    <div class="card-etudiants" :class="className" >
        <img :src="image" :alt="alt">
        
        <div class="card-etudiants__content">
            <PrismicRichText class="card-etudiants__content-name" :field="name"></PrismicRichText>
            <PrismicRichText :field="job"></PrismicRichText>

            <a :href="link" target="_blank">
                <img src="/icons/icon-linkedin.svg" alt="LinkedIn">
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.card-etudiants {
    background: $blue;
    .-bgRed {
        background: $red;
    }
    .-bgGreen {
        background: $green;
    }
    background-image: url('/image-filtre.png');
    width: rem(270);
    height: rem(330);
    position: relative;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    
    img{
        width: rem(180);
        position: absolute;
        position: absolute;
        top: rem(30);
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &__content{
        font-family: $font-poppins;
        display: flex;
        flex-direction: column;
        gap:rem(15);
        text-align: center;
        margin-bottom: rem(20);
        color: $white;
        font-weight: 300;
        line-height: normal;
        letter-spacing: 5.445px;
        text-transform: uppercase;
        :nth-child(2){
       
            font-weight: 700;
            font-family: $font-redhat;
            line-height: -10px;
            font-size: $size-32;
            letter-spacing: -0.5px;
        }
        img{
            all: initial;
            width: rem(25);
            filter: invert(99%) sepia(1%) saturate(2631%) hue-rotate(88deg) brightness(127%) contrast(98%);
        }
    }
}


@media(min-width : 1440px) {

}
</style>