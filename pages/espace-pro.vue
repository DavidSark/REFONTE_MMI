<script setup>
  const { client } = usePrismic();
  const { data: espacepro, error } = await useAsyncData('espacepro', () => client.getSingle("espacepro"));

  const props = defineProps({
    title: Array,
  });

</script>

<template>

    <div class="container">
        <div class="sectionB">
            <div class="sectionB-sideleft">
                <div class="sectionB-sideleft__borderT">
                    <PrismicRichText :field="espacepro.data.section1[0].titre" class="sectionB-sideleft__borderT-title"></PrismicRichText>
                </div>
                <div class="sectionB-sideleft__borderS">
                    <PrismicRichText :field="espacepro.data.section1[0].soustitre" class="sectionB-sideleft__borderS-subtitle"></PrismicRichText>
                </div>
                <Button class="sectionB-sideleft__btn" size="small">Déposer une offre</Button>
            </div>
            <div class="sectionB-sideright__image">
                <img src="/imageep-1.webp" alt="">
            </div>
        </div>
        <div class="sectionV">
            <div class="sectionV-sideleft">
                <div class="sectionV-sideleft__borderT">
                    <PrismicRichText :field="espacepro.data.section2[0].titre" class="sectionV-sideleft__borderT-title"></PrismicRichText>
                </div>
                <div class="sectionV-sideleft__borderS">
                    <PrismicRichText :field="espacepro.data.section2[0].soustitre" class="sectionV-sideleft__borderS-subtitle"></PrismicRichText>
                </div>
                <Button class="sectionV-sideleft__btn" size="small">Déposer une offre</Button>
            </div>
            <div class="sectionV-sideright__image">
                <img src="/image6.webp" alt="">
            </div>
        </div>
        <div class="sectionR">
          <div class="sectionR-sideleft">
            <div class="sectionR-sideleft__borderT">
              <PrismicRichText :field="espacepro.data.section3[0].titre" class="sectionR-sideleft__borderT-title"></PrismicRichText>
            </div>
            <div class="sectionR-sideleft__borderS">
              <PrismicRichText :field="espacepro.data.section3[0].soustitre" class="sectionR-sideleft__borderS-subtitle"></PrismicRichText>
            </div>
            <Button class="sectionR-sideleft__btn" size="small">Proposer un projet</Button>
          </div>
          <div class="sectionR-sideright__image">
            <img src="/section-projet.webp" alt="">
          </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<style lang="scss">
.sectionB {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(60);
    margin: rem(60) rem(0) rem(60) rem(0);
    &-sideleft {
        display:flex;
        flex-direction: column;
        &__btn {
            margin: 0 rem(20);
            width: rem(200);
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
        &-subtitle {
          font-size: $size-13;
          font-family: $font-poppins;
          font-weight: 300;
          line-height: normal;
          strong {
            font-weight: 700;
            color: $blue;
          }
        }
      }
    }
    &-sideright__image {
        img {
            width: rem(240);
        }
    }
}

.sectionV {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:rem(60);

    &-sideright__image {
        img {
            max-width: 100%;
        }
    }
    &-sideleft {
        display: flex;
        flex-direction: column;
        &__btn {
            margin: 0 rem(20);
            width: rem(200);
        }
        &__borderT {
        display: flex;
        align-items: flex-end;
        gap: rem(5);
        span {
          color: $green;
        }
        @include borderColorTitle;
        border-color: $green;
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
        &-subtitle {
          font-size: $size-13;
          font-family: $font-poppins;
          font-weight: 300;
          line-height: normal;
          strong {
            font-weight: 700;
            color: $green;
          }
        }
      }
    }
}

.sectionR {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: rem(60) rem(0) rem(60) rem(0);
  gap:rem(60);
  &-sideleft {
    display:flex;
    flex-direction: column;
    &__btn {
      margin: 0 rem(20);
      width: rem(200);
    }
    &__borderT {
        display: flex;
        align-items: flex-end;
        gap: rem(5);
        span {
          color: $green;
        }
        @include borderColorTitle;
        border-color: $red;
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
        &-subtitle {
          font-size: $size-13;
          font-family: $font-poppins;
          font-weight: 300;
          line-height: normal;
          strong {
            font-weight: 700;
            color: $red;
          }
        }
      }

    }
    &-sideright__image {
      img {
        max-width: 100%;
      }
    
      }
  
}


  // MEDIA QUERIES
  @media (min-width: 768px) {
    .sectionB {
    margin: rem(80) rem(0) rem(120) rem(0);
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
.sectionV {
  margin: rem(80) rem(0) rem(120) rem(0);
   &-sideleft {
    &__borderS {
        @include borderColorSubtitle;
        &-subtitle {
          font-size: $size-16;
        }
    }
   }
   &-sideright__image {
    img {
      max-width: 100%;
    }
   }
  }
  .sectionR {
    margin: rem(80) rem(0) rem(120) rem(0);
    &-sideleft {
      &__borderS {
        &-subtitle {
          font-size: $size-16;
        }
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
    .sectionV {
        flex-direction: row;
      
   &-sideleft {
    &__borderT {
        @include borderColorTitle;
        border-color: $green;
        &-title {
          font-size: $size-43;
        }
    }
   }
  }

  .sectionR {
    display: flex;
    flex-direction: row;

    &-sideleft {
      &__borderT {
        &-title {
          font-size: $size-43;
        }
      }

    }
  }
  }

  @media (min-width: 1440px) {
    .sectionB {
        margin: rem(90) rem(0) rem(170) rem(0);
        gap: rem(100);
    &-sideleft {
        &__borderT{
        @include borderColorTitle;
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

    .sectionV {

      
        &-sideleft {
            &__borderT {
        @include borderColorTitle;
         border-left: 15px solid $green;
        &-title {
          font-size: $size-90;
        }

            }
        }
    }

    .sectionR {
      margin: rem(160) rem(0) rem(130) rem(0);
      
    &-sideleft {
      &__borderT {
        @include borderColorTitle;
        border-left:15px solid $red;
        &-title {
          font-size: $size-90;
        }
      }

    }
  }

  }

</style>