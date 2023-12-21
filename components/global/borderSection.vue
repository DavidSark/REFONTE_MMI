<script setup>
  const { client } = usePrismic();
  const { data: espacepro, error } = await useAsyncData('espacepro', () => client.getSingle("espacepro"));

  const props = defineProps({
   title: Array,
   subtitle: Array,
   color: String,
   borderPosition: String,
  });

  const className = computed(() =>({
    //Changement de couleur des bords des titres & sous-titres
    ' -red': props.color === 'red',
    ' -green': props.color === 'green',

    //Changemetn de côté pour les bords
    ' -right': props.borderPosition === 'right',

  }))




</script>

<template>
    <div class="" >
        <div class="sectionB" >
            <div class="sectionB-sideleft">
                <div class="sectionB-sideleft__borderT" :class="className">
                    <PrismicRichText :field="title" class="sectionB-sideleft__borderT-title"></PrismicRichText>
                </div>
                
                <div class="sectionB-sideleft__borderS" :class="className">
                    <PrismicRichText :field="subtitle" class="sectionB-sideleft__borderS-subtitle"></PrismicRichText>
                </div>
            </div>
        </div>
    </div> 
</template>

<style lang="scss">
.sectionB {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(60);
   
    &-sideleft {
        display:flex;
        flex-direction: column;
        &__btn {
            cursor: pointer;
            margin: 0 rem(20);
            margin-bottom: rem(40);
            width: rem(230);
        }
        &__borderT{
            display: flex;
            align-items: flex-end;
            gap: rem(5);
          span {
            color: $blue;
          }
        @include borderColorTitle;
        border-color: $blue;
  
        &.-right{
          border-left: none ;
          border-right: 10px solid ;
          padding: rem(10);
          justify-content: flex-end;
          text-align: right;
        }

     

        &.-red{
           
            border-color: $red
        }
        &.-green{
            border-color: $green
        }
        &-title {
          font-family: $font-redhat;
          font-size: $size-32;
          font-weight: 100;
          text-transform: uppercase;
          strong {
            font-weight: 800;
          }
        }
        }
        &__borderS {
        @include borderColorSubtitle;

        strong {
          font-weight: 700;
          color :$blue;
        }

        &.-right{
          border-left: none ;
          border-right: 3px solid $white-soft;
          padding: rem(20);
          text-align: right;
        }

        &.-red{
            strong{
              font-weight: 700;
                color: $red;
            }
            }
            &.-green{
            strong{
              font-weight: 700;
                color: $green;
            }
         }
        &-subtitle {
          font-size: $size-13;
          font-family: $font-poppins;
          font-weight: 300;
          line-height: normal;
         
         
        }
      }
    }
    &-sideright__image {
        img {
            width: rem(240);
        }
    }
}

  // MEDIA QUERIES
  @media (min-width: 768px) {
    .sectionB {
    &-sideleft {
        &__borderT{
        @include borderColorTitle;
        border-color: $blue;
        &-title {
          font-size: $size-32;
        }
        }
        &__borderS {
        @include borderColorSubtitle;
        &-subtitle {
          font-size: $size-16;
        }
      }
    }
    &-sideright__image {
        img {
            width: rem(330);
        }
    }
}

  }

  @media (min-width: 1024px) {
    .sectionB {
    display: flex;
    flex-direction: row;
    align-items: center;
    &-sideleft {
        &__borderT{
        @include borderColorTitle;
        border-color: $blue;
      
        &-title {
          font-size: $size-43;
        }
        }
        &__borderS {
        @include borderColorSubtitle;
        &-subtitle {
          font-size: $size-16;
        }
      }
    }
    &-sideright__image {
        padding-left:rem(30);
        img {
            width: rem(330);
        }
    }
    }
   
  }

  @media (min-width: 1440px) {
    .sectionB {
       
        gap: rem(100);
    &-sideleft {
        &__borderT{
        @include borderColorTitle;
        
        &.-right {
          border-right: 15px solid;
          border-color: $blue;

          &.-red {
            border-color : $red
          }
          &.-green {
            border-color : $green
          }
        }
        border-left: 15px solid $blue;
          

        &-title {
          font-size: $size-90;
        }
        }
        &__borderS {
        @include borderColorSubtitle;

        &-subtitle {
          font-size: $size-16;
        }
      }
    }
    &-sideright__image {
        // padding-left:rem(100);
        img {
            width: rem(440);
        }
    }
    }
  }

</style>