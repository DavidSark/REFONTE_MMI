<script setup>
const { client } = usePrismic();
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))

</script>

<template>
    <div class="container-hero">
      <div class="container-hero__top">
        <img src="image1.webp" alt="Cours en MMI">
      </div>
      <div class="container-hero__middle">
        <h1>Mmi Montbéliard</h1>
        <h2>Métiers du Multimédia et de l'internet</h2>
      </div>
      <div class="container-hero__bottom">
        <div class="container-hero__bottom-buttons">
          <Button size="small" bgColor="bgBlue" borderColor="borderBlue" color="white">Candidater</Button>
          <Button size="small" bgColor="bgTransparent" >Formation</Button>
        </div>
        <div class="container-hero__bottom-social">
            <p>retrouvez-nous sur nos réseaux sociaux !</p>
            <div class="container-hero__bottom-social-icons">
              <a href="https://www.facebook.com/mmimontbeliard" target="_blank"><img src="/icons/icon-facebook.svg" alt="icone facebook"></a>
              <a href="https://www.instagram.com/mmi_montbeliard/" target="_blank"><img src="/icons/icon-instagram.svg" alt="icone instagram"></a>
              <a href="https://www.linkedin.com/school/mmimontbeliard" target="_blank"><img src="/icons/icon-linkedin.svg" alt="icone linkedin"></a>
            </div>
          </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.container-hero {
  font-family: $font-poppins;
  text-transform: uppercase;

    &__middle {
      padding: rem(20);
      :nth-child(1) {
        font-size: $size-39;
        font-weight: 700;
        display: table-caption;
      }
      :nth-child(2) {
        font-size: $size-13;
        letter-spacing: calc(1px + (10 - 1) * ((100vw - 320px) / (1440 - 320)));
      }
    }

    &__top,
    &__bottom {
      overflow: hidden;
    }

    &__top{
      img {
        width: 100%;
        height: auto;
        max-height: rem(350);
        object-fit: cover;
        filter: grayscale(1);
        object-position: 10% 10%;
        transform: scale(150%);
      }
    }
    &__bottom{
      &-buttons {
        display: flex;
        gap: rem(20);
       margin: 0 rem(20);
      }

      &-social{
        margin: rem(20) rem(20) rem(20) rem(20);
        color: $black;
        font-size: $size-13;
        font-weight: 300;
        display: flex;
        flex-direction: column;
        gap: rem(5);
        :nth-child(2) {
          margin-left: 0
        }

       &-icons{
        display: flex;
        gap: 15px;
        img{
        width: rem(20);
        height: rem(20);
        margin-left: 0;
        }
       }
      }
    }
  }
</style>