<script setup>

</script>



<template>
    <div class="section-indexparcours">
        <div class="section-indexparcours__line"></div>
        <div class="section-indexparcours__design">
            <h2>design<span>.</span></h2>
            <!-- <div></div> -->
            <img src="/icons/Arrow.svg" alt="">
        </div>
        <div class="section-indexparcours__line"></div>
        <div class="section-indexparcours__com">
            <h2>communication<span>.</span></h2>
            <!-- <div></div> -->
            <img src="/icons/Arrow.svg" alt="">
        </div>
        <div class="section-indexparcours__line"></div>
        <div class="section-indexparcours__dev">
            <h2>développement web<span>.</span></h2>
            <!-- <div></div> -->
            <img src="/icons/Arrow.svg" alt="">
        </div>
        <div class="section-indexparcours__line"></div>
    </div>
</template>


<style lang="scss" >
.section-indexparcours{
    h2 {
        cursor: pointer;
        letter-spacing: -9px;
    }
    margin: rem(50) rem(0);
    font-family: $font-redhat;
    font-weight: 700;
    font-size: 8vw;
    text-transform: uppercase;
    
    display: flex;
    flex-direction: column;
    gap: 1vw;
    letter-spacing: rem(-2);

    &__line{
        padding: initial;
        height: rem(1); 
        width: 100%;
        background-color: $white-soft;
    }
    img{
        margin:0 0 1vw 1vw;
        // width: 2.5vw;
        width: rem(12)
    }
   &__design{
    padding: rem(0) rem(20);
    display: flex;
    align-items: flex-end;
    // div{
    //     margin: 0 0  1.2vw rem(3) ;
    //     width: rem(5);
    //     height: rem(5);
    //     background-color: $blue;
    //     border-radius: rem(10);
    // }
    span{
        color: $blue;
    }
   }
   &__com{
    display: flex;
    align-items: flex-end;
    padding: rem(0) rem(20);
    // div{
    //     margin: 0 0  1.2vw rem(3) ;
    //     width: rem(5);
    //     height: rem(5);
    //     background-color: $red;
    //     border-radius: rem(10);
    span{
        color: $red;
    }
    // }
   }
   &__dev{
    display: flex;
    align-items: flex-end;
    padding: rem(0) rem(20);
    span{
        color: $green;
    }
    // div{
    //     margin: 0 0 1.2vw rem(3) ;
    //     width: rem(5);
    //     height: rem(5);
    //     background-color: $green;
    //     border-radius: rem(10);
    // }
   }
}



@media  screen and (min-width: 768px) {
    .section-indexparcours{
        margin: rem(160) rem(0);
    img{
        width: 3vw;
    }
   &__design{
    padding: rem(0) rem(40);
   }
   &__com{
    padding: rem(0) rem(40);
   }
   &__dev{
    padding: rem(0) rem(40);
   }
}
}

@media screen and (min-width:1440px) {
    .section-indexparcours{
        &__design{
            padding: rem(0) rem(75);
        }
        &__com{
            padding: rem(0) rem(75);
        }
        &__dev{
            padding: rem(0) rem(75);
        }
    }
}

@media screen and (min-width: 1540px) {
    .section-indexparcours{
        font-size: $size-123;
    }
}
</style>