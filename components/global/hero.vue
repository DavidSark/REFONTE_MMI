<script setup>

</script>


<template>
    <div class="container">
        <div class="container__right">
            <h1>mmi montbéliard</h1>
            <p>MÉTIERS DU MULTIMÉDIA ET DE L’INTERNET</p>
        </div>
        <div class="container__left">
           <img src="hero_slider1.webp" alt="/">
           <img src="hero_slider2.webp" alt="/">
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__right{
        width: 50%;
        margin: rem(0) rem(0) rem(0) rem(80);
          
        h1{
            font-size: rem(96);
            font-family: $font-poppins;
            font-weight: 600;
            letter-spacing: -8px;
            line-height: 80%;
            text-transform: uppercase;
        }
        p{
            font-family: $font-poppins;
            font-size: 26px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
            letter-spacing: 5px;
            text-transform: uppercase;
        }
    }
    &__left{
        width: 50%;
        height: 100vh;
        display: flex;
        img{
            width: 50%;
            height: 100vh;
            object-fit: cover;
        }           
    }
}
</style>