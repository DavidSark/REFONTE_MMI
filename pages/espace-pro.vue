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
    </div>
</template>

<style lang="scss">

.sectionB {
    display: flex;
    flex-direction: column;
    align-items: center;
 
    gap: rem(30);
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
            width: rem(300);
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
        padding-left:rem(100);
        img {
            width: rem(440);
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
        margin: rem(90) rem(0) rem(170) rem(0);
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
        padding-left:rem(100);
        img {
            width: rem(440);
        }
    }
    }

  }

</style>