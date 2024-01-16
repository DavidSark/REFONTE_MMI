<script setup>

</script>



<template>
    <div class="section-indexcards">
        <div class="section-indexcards__card">
            <div class="section-indexcards__card-image">
                <img src="/image-projets.webp" alt="image mmi">
            </div>
            <div class="section-indexcards__card-title">
                <h2><span>Des projets</span> concrêts</h2>
            </div>
        </div>
     
        <div class="section-indexcards__card2">
            <div class="section-indexcards__card2-image2">
                <img src="/image-cegep.webp" alt="image mmi">
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
        font-size: $size-20;
        text-transform: uppercase;
        border-left: rem(6) solid;
        padding: rem(0) rem(10);
        border-color: $blue;
        line-height: 110%;
        font-weight: 300;
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
        font-size: $size-20;
        text-transform: uppercase;
        border-right: rem(6) solid;
        padding: rem(0) rem(10);
        border-color: $red;
        line-height: 110%;
        font-weight: 300;
      
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
                margin-top:rem(35);
                padding: rem(5) rem(25);
                font-size: $size-60;
                border-left: rem(10) solid;
                border-color:$blue;
       
            }
        }
        &__card2{       
            &-title{
                margin-top:rem(35);
                padding: rem(5) rem(25);
                font-size: $size-60;  
                border-right: rem(10) solid;
                border-color:$red;
            }
        }
    }
}
</style>