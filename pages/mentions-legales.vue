<script setup>
  const { client } = usePrismic();
  const { data: mentions, error } = await useAsyncData('mentions', () => client.getSingle("mentions"));

  const props = defineProps({
    title: Array,
  });
</script>

<template>
  <div class="container">
  <div class="section1-mentions">
    <div class="section1-mentions__sideleft">
      <div class="section1-mentions__sideleft-borderT">
        <PrismicRichText :field="mentions.data.section1[0].titre" class="section1-mentions__sideleft-borderT__title"></PrismicRichText>
        <div></div>
      </div>
      <div class="section1-mentions__sideleft-borderS">
        <PrismicRichText :field="mentions.data.section1[0].soustitre" class="section1-mentions__sideleft-borderS__soustitre"></PrismicRichText>
      </div>
    </div>
    <div class="section1-mentions__slider">
      <img src="/luka-jevremovic.webp" alt="">
      <p>Luka <span>Jevremovic</span></p>
      <img src="/icons/icon-linkedin.svg" alt="">
    </div>
    <div class="section1-mentions__slider">
      <img src="/justine-duval.webp" alt="">
      <p>Justine <span>Duval</span></p>
      <img src="/icons/icon-linkedin.svg" alt="">
    </div>
  </div>
  <div class="section2-mentions">
    <div class="section2-mentions__sideleft">
      <div class="section2-mentions__sideleft-borderT">
      <PrismicRichText :field="mentions.data.section2[0].titre" class="section2-mentions__sideleft-borderT__title"></PrismicRichText>
      </div>
      <div class="section2-mentions__sideleft-borderS">
        <p>Coordonnées</p>
        <p>Département MMI de Montbéliard Adresse : 4 Pl. Lucien Tharradin, 25200 Montbéliard<br>
        Téléphone : 03 81 99 47 34<br>
        Email : [Adresse e-mail]<br></p>
        <p>Coordonnées</p>
        <p>Département MMI de Montbéliard Adresse : 4 Pl. Lucien Tharradin, 25200 Montbéliard<br>
        Téléphone : 03 81 99 47 34<br>
        Email : [Adresse e-mail]<br></p>

      </div>

    </div>
    <div class="section2-mentions__sideright"></div>
  </div>
</div>
</template>

<style lang="scss">
.container {
  padding: 0 rem(20) ;
}
  //SECTION 1 - CONCEPTION
  .section1-mentions {
    margin-bottom: rem(40);
 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(20);

    &__slider {
      display: flex;
      flex-direction: column;
      font-family: $font-poppins;
      align-items: center;
      text-transform: uppercase;
      font-weight: 700;
      font-size: $size-13;
      gap: rem(10);

      span {
        font-weight: 300;
      }

      :nth-child(3) {
        width: rem(17);
      }

      :nth-child(1) {
        width: rem(196);
      }
    }

    &__sideleft {
      &-borderT {
        display: flex;
        align-items: flex-end;
        gap: rem(5);

        span {
          color: $blue;
        }

        @include borderColorTitle;
        border-color: $blue;

        &__title {
          font-family: $font-redhat;
          font-size: $size-32;
          font-weight: 200;
          text-transform: uppercase;

          strong {
            font-weight: 800;
          }
        }
      }

      &-borderS {
        @include borderColorSubtitle;

        &__soustitre {
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
  }

  //SECTION 2 - MENTIONS LEGALES

  .section2-mentions {

    &__sideleft {
      &-borderT {
        @include borderColorTitle;
        border-color : $red;
        
        display: flex;
        align-items: flex-end;
        gap: rem(5);

        span {
          color: $blue;
        }
 
        &__title{
          font-family: $font-redhat;
          font-size: $size-32;
          font-weight: 200;
          text-transform: uppercase;

          strong {
            font-weight: 800;
          }

        }
      }
      &-borderS {
        @include borderColorSubtitle;

          strong {
            font-weight: 700;
            color: $blue;
          }
          p:nth-of-type(odd){
            font-family: $font-redhat;
            text-transform: uppercase;
            font-weight:700;
            font-size : $size-16
          }
          p:nth-of-type(even) {
            font-family: $font-poppins;
          }
        }
      }
     
    }


  // Media queries
  @media (min-width: 768px) {
    .section1-mentions {
      padding: rem(40);
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: rem(20);

      &__slider {
        font-size: $size-14;

        :nth-child(3) {
          width: rem(20);
        }
      }

      &__sideleft {
        &-borderT {
          @include borderColorTitle;
          border-color: $blue;

          &__title {
            font-size: $size-32;
          }
        }

        &-borderS {
          @include borderColorSubtitle;

          &__soustitre {
            font-size: $size-16;
          }
        }
      }
    }
  }

  // Media queries
  @media (min-width: 1024px) {
    .section1-mentions {
      gap: rem(40);

      &__slider {
        font-size: $size-14;

        :nth-child(1) {
          width: rem(210);
        }

        :nth-child(3) {
          width: rem(20);
        }
      }

      &__sideleft {
        &-borderT {
          @include borderColorTitle;
          border-color: $blue;

          &__title {
            font-size: $size-45;
          }
        }

        &-borderS {
          @include borderColorSubtitle;

          &__soustitre {
            font-size: $size-19;
          }
        }
      }
    }
  }

  // Media queries
  @media (min-width: 1440px) {
    .section1-mentions {
      gap: rem(40);

      &__slider {
        font-size: $size-16;

        :nth-child(1) {
          width: rem(280);
        }

        :nth-child(3) {
          width: rem(24);
        }
      }

      &__sideleft {
        &-borderT {
          @include borderColorTitle;
          border-left: 15px solid;
          border-color: $blue;

          &__title {
            font-size: $size-90;
          }
        }

        &-borderS {
          @include borderColorSubtitle;

          &__soustitre {
            font-size: $size-19;
          }
        }
      }
    }
  }
</style>
