<script setup>
const { client } = usePrismic();
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))

</script>



<template>
    <div class="container">
        <Header :elements="home.data.header"></Header>

        <div class="container-hero">
            <div class="container-hero__img1">
                <img src="image1.webp" alt="Cours en MMI">
            </div>

            <div class="container-hero__title">
                <h1>Mmi Montbéliard</h1>
                <h2>Métiers du Multimédia et de l'internet</h2>
            </div>

            <div class="container-hero__img2">
                <img src="image1.webp" alt="Cours en MMI">
            </div>

        </div>
    </div>  
</template>


<style lang="scss" scoped>

.container{
 
    &-hero{
        font-family: $font-poppins;
        text-transform: uppercase;
        &__img1{
            overflow: hidden;
            img{
                width: 100%;
                transform: scale(150%);
                object-fit: fill;
                object-position: 0 rem(30);
                filter: grayscale(1);
            }
        }
        &__title{
            padding: rem(20); 
            border: 1px solid red;
            
            text-wrap: wrap;
                :nth-child(1){
                    font-size: $size-39;
                    font-weight: 700;
                }
                :nth-child(2){
                    font-size: $size-13;
                }
        }
    }
}

</style>