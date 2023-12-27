<script setup>

</script>



<template>
    <div class="section-indexcards">
        <div class="section-indexcards__card">
            <img src="/image7.webp" alt="image mmi">
            <div class="section-indexcards__card-title">
                <h2><span>Des projets</span> concrêts</h2>
            </div>
        </div>
     
        <div class="section-indexcards__card2">
            <img src="/image11.webp" alt="image mmi">
            <div class="section-indexcards__card2-title">
                <h2><span>Un semestre au</span> canada</h2>
            </div>
        </div>

    </div>
</template>


<style lang="scss" >
.section-indexcards{
   &__card{
    display: flex;
    flex-direction: column;

    img{
        width: 100%;
        max-height: rem(300);
        object-fit: cover;
    }
    &-title{
        max-width: rem(300);
        margin-top: rem(10);
        font-family: $font-poppins;
        font-size: $size-33;
        text-transform: uppercase;
        border-left: rem(6) solid;
        padding: rem(0) rem(10);
        border-color: $blue;
        line-height: 110%;
        //à voir
        display: table-caption;
        span{
        font-weight: 700;
        white-space: nowrap;
        }
    }
   }

   &__card2{
    margin-top: rem(60);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  
    img{
        width: 100%;
        max-height: rem(300);
        object-fit: cover;
    }
    &-title{
        max-width: rem(300);
        text-align: end;
        margin-top: rem(10);
        font-family: $font-poppins;
        font-size: $size-33;
        text-transform: uppercase;
        border-right: rem(6) solid;
        padding: rem(0) rem(10);
        border-color: $red;
        line-height: 110%;
        display: table-caption;
        span{
        font-weight: 700;
        white-space: nowrap;
        }
    }
   }
}



@media  screen and (min-width: 768px) {
    .section-indexcards{
        display: flex;
        gap: 100px;
        &__card{
            width: 50%;
            img{
                height: rem(500);
            }

            &-title{

            }
        }
        &__card2{
            margin-top: 0;
            width: 50%;
         
            img{
                height: rem(500);
            }

            &-title{
               
            }
        }
    }
}

@media screen and (min-width:1440px) {
   
}
</style>