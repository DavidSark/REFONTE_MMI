<script setup>

</script>



<template>
    <div class="section-indexparcours">
        <div class="section-indexparcours__design">
            <h2>design</h2>
            <div></div>
            <img src="/arrow.svg" alt="">
        </div>
        <div class="section-indexparcours__com">
            <h2>communication</h2>
            <div></div>
            <img src="/arrow.svg" alt="">
        </div>
        
        <div class="section-indexparcours__dev">
            <h2>développement web</h2>
            <div></div>
            <img src="/arrow.svg" alt="">
        </div>
    </div>
</template>


<style lang="scss" >
.section-indexparcours{
    font-family: $font-poppins;
    font-weight: 700;
    font-size: 7.5vw;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    gap: 2.5vw;
    letter-spacing: rem(-3);
    img{
        margin:0 0 1vw 1.4vw;
        width: 2.5vw;
    }
   &__design{
    display: flex;
    align-items: flex-end;
    div{
        margin-bottom: 0.95vw;
        width: 1vw;
        height: 1vw;
        background-color: $blue;
        border-radius: rem(10);
    }
   }
   &__com{
    display: flex;
    align-items: flex-end;
    div{
        margin-bottom: 0.95vw;
        width: 1vw;
        height: 1vw;
        background-color: $red;
        border-radius: rem(10);
    }
   }
   &__dev{
    display: flex;
    align-items: flex-end;
    div{
        margin-bottom: 0.95vw;
        width: 1vw;
        height: 1vw;
        background-color: $green;
        border-radius: rem(10);
    }
   }
}

@media screen and (min-width:1440px) {
    .section-indexparcours{
        font-size: rem(133);
    }
}
</style>