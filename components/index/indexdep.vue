<script setup>

</script>

<template>
    <div class="section-indexdep">
        <div class="section-indexdep__text">
            <h2>Le département<span>.</span></h2>
            <p>Un environnement propice <span>au développement des étudiants.</span></p>
        </div>
        
        <div class="section-indexdep__button">
            <Button size="small"> découvrir</Button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section-indexdep{
    &__text{
        font-family: $font-poppins;
        text-transform: uppercase;
        margin-bottom: rem(15) ;
        h2{
            font-size: $size-24;
            font-weight: 700;
            margin-bottom: rem(15);
            span{
                color: $blue;
            }
        }
        p{
            font-size:  $size-16;
            max-width: rem(300);
        }
        span{
            font-weight: 700;
        }

        &__button{
            :nth-child(1){
                margin: 0;
            }
        }
    }
}


@media screen and (min-width:480px) {
    .section-indexdep{
        &__text{
            h2{
               font-size: $size-24;
            }
            p{
                font-size: $size-16;
            };
        }
    }
}

@media screen and (min-width:768px) {
    .section-indexdep{
        &__text{
            h2{
                font-size: $size-32;
            }
            p{
                max-width: rem(500);
                font-size: $size-24;
            };
        }
    }
}

@media screen and (min-width: 1024px){
    .section-indexdep{
        &__text{
            h2{
                font-size: 7.5vw; 
            }
            p{
               max-width: initial;
                font-size: 4vw;
            }
        }
    }
}

@media screen and (min-width: 1440px){
    .section-indexdep{
        &__text{
            h2{
                
            }
        }
    }
}

@media screen and (min-width:1760px) {
  .section-indexdep{
    &__text{
    h2{
     font-size: $size-123
    }
    p{
      font-size: $size-75
    };
   }
  }
  }
</style>