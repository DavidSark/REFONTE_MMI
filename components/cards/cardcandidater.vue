<script>

</script>

<template>
  <div class="section3-candidater">
    <div class="section3-candidater__image">
      <img src="/image-candidater.webp" alt="Etudiantes qui travaillent">
      <p class="section3-candidater__image-text">Prêt à vous <span class="section3-candidater__image-text__span1">lancer
        </span>
        <span class="section3-candidater__image-text__span2">?</span>
      </p>
    </div>
    <div class="section3-candidater__qualites">
      <p class="section3-candidater__qualites-title"><span class="section3-candidater__qualites-title__span1">les
          qualités</span> requises <span class="section3-candidater__qualites-title__span2">.</span></p>
      <div class="section3-candidater__qualites-group">
        <p class="section3-candidater__qualites-group__text"><span
            class="section3-candidater__qualites-group__text-span">01 </span>curiosité</p>
        <p class="section3-candidater__qualites-group__text"><span
            class="section3-candidater__qualites-group__text-span">02 </span>créativité</p>
        <p class="section3-candidater__qualites-group__text"><span
            class="section3-candidater__qualites-group__text-span">03 </span>esprit d'équipe</p>
      </div>



    </div>
  </div>
</template>
  
<style lang="scss" scoped>
.section3-candidater {
  font-family: $font-redhat;
  color:$white;
  text-transform: uppercase;

  &__qualites {
    display: flex;
    flex-direction: column;
    justify-content: center;
  
    padding: rem(50) rem(25);
    background-color: $black;

    &-group {
      margin-top: rem(30);

      &__text {
        border-bottom: 1px solid $white-soft;
        margin-top: rem(10);
        padding: rem(5) rem(0);
        font-size:$size-24;

        &-span {
          font-weight: 900;
          color: transparent;
          font-size: $size-28;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: $white;
        }
      }

    }

    &-title {
      color: $white;
      font-size: $size-33;
      line-height: 100%;
      letter-spacing: -2.34px;

      &__span2 {
        font-weight: 800;
        font-size: $size-45;
        color: $green;
      }

      &__span1 {
        font-weight: 900;

      }
    }

  }

  &__image {

    position: relative;

    img {
      width: 100%;
      filter: grayscale(100%);
      transition: filter 0.5s ease-in-out;
    }

    .section3-candidater__image-text {
      position: absolute;
      bottom: 20px;
      right: 20px;

      color: white;

      letter-spacing: -2.34px;
      font-size: $size-33;
      font-weight: bold;
      text-align: right;
      z-index: 1;

      &__span1 {
        font-weight: 300;
      }

      &__span2 {
        color: $blue;
      }

    }
  }
}

@media (min-width: 728px) {
  .section3-candidater {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: stretch;

    &__image {
      position: relative;

      img {
        height: 100%;
      }
    }
  }
}

@media (min-width: 1024px) {
  .section3-candidater {
    align-items: stretch;


    &__qualites {
      &-group {
      
        &__text {
          font-size: $size-33;

          &-span {
            font-size: $size-33;
          }
        }

      }

      &-title {
        color: $white;
        font-size: $size-55;
        line-height: 100%;
        letter-spacing: -2.34px;

        &__span2 {
          font-weight: 800;
          font-size: $size-45;
          color: $green;
        }

        &__span1 {
          font-weight: 900;

        }
      }

    }

    &__image {
      .section3-candidater__image-text {
        position: absolute;
        bottom: 20px;
        right: 30px;
        font-size: $size-55;
      }
    }
  }
}

@media (min-width: 1440px) {
  .section3-candidater {
    &__qualites {
      &-group {
        &__text {
          font-size: $size-55;
          padding: rem(10) rem(0);

          &-span {
            font-size: $size-55;
            -webkit-text-stroke-width: 2px;

          }
        }

      }

      &-title {

        font-size: $size-90;
        line-height: 100%;
        letter-spacing: -2.34px;

        &__span2 {
          font-weight: 800;
          font-size: $size-90;
          color: $green;
        }

        &__span1 {
          font-weight: 900;

        }
      }

    }

    &__image {
      .section3-candidater__image-text {
        position: absolute;
        bottom: 20px;
        right: 30px;
        font-size: $size-100;
      }
    }
  }
}</style>