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
    font-size: $size-24;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    gap: rem(10);
    img{
        margin:rem(0) rem(0) rem(4) rem(5)
    }
   &__design{
    display: flex;
    align-items: flex-end;
    div{
        margin-bottom: rem(4);
        width: rem(5);
        height: rem(5);
        background-color: $blue;
        border-radius: rem(10);
    }
   }
   &__com{
    display: flex;
    align-items: flex-end;
    div{
        margin-bottom: rem(4);
        width: rem(5);
        height: rem(5);
        background-color: $red;
        border-radius: rem(10);
    }
   }
   &__dev{
    display: flex;
    align-items: flex-end;
    div{
        margin-bottom: rem(4);
        width: rem(5);
        height: rem(5);
        background-color: $green;
        border-radius: rem(10);
    }
   }
}
</style>