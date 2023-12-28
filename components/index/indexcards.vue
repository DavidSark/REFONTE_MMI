<script setup>

</script>



<template>
    <div class="section-indexcards">
        <div class="section-indexcards__card">
            <div class="section-indexcards__card-image">
                <img src="/image7.webp" alt="image mmi">
            </div>
            <div class="section-indexcards__card-title">
                <h2><span>Des projets</span> concrêts</h2>
            </div>
        </div>
     
        <div class="section-indexcards__card2">
            <div class="section-indexcards__card2-image2">
                <img src="/image11.webp" alt="image mmi">
            </div>
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
        margin-top: rem(10);
        font-family: $font-poppins;
        font-size: $size-24;
        text-transform: uppercase;
        border-left: rem(6) solid;
        padding: rem(0) rem(10);
        border-color: $blue;
        line-height: 110%;
        //à voir
        
        span{
        font-weight: 700;
        white-space: nowrap;
        display: table-caption;
        }
    }
   }

   &__card2{
 
    margin-top: rem(60);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    &-image2{
        width: 100%;
    }
    img{
        width: 100%;
        max-height: rem(300);
        object-fit: cover;
    }
    &-title{
        text-align: end;
        margin-top: rem(10);
        font-family: $font-poppins;
        font-size: $size-24;
        text-transform: uppercase;
        border-right: rem(6) solid;
        padding: rem(0) rem(10);
        border-color: $red;
        line-height: 110%;
      
        span{
        font-weight: 700;
        white-space: nowrap;
        display: table-caption;
        }
    }
   }
}



@media  screen and (min-width: 768px) {
    .section-indexcards{
        display: flex;
        gap: 3vw;
       
        &__card{
            width: 50%;
            

            &-image{
            width: 100%; 
            height: rem(300);
            img{
                width: 100%;
                height: 100%;
            }

            }

            img{
                max-height: initial;
            }

            &-title{
                font-size: 3.5vw;
            }
        }
        &__card2{
            margin-top: 0;
            width: 50%;
        
            &-image2{
                height: rem(300);
                width: 100%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            img{
               max-height: initial;
        
            }

            &-title{
                font-size: 3.5vw;
            }
        }
    }
}

@media screen and (min-width:1024px) {
    .section-indexcards{
        &__card{         
            &-image{
           
            height: initial;
            height: 30vw;
            img{
                width: 100%;
                height: 100%;
            }

            }
            &-title{
                
            }
        }
        &__card2{       
            &-image2{
              
                height: initial;
                height: 30vw;
               
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            &-title{
                
            }
        }
    }
}

@media screen and (min-width:1440px) {
    .section-indexcards{
        &__card{         
            &-title{
                font-size: $size-60;
            }
        }
        &__card2{       
            &-title{
                font-size: $size-60;  
            }
        }
    }
}
</style>