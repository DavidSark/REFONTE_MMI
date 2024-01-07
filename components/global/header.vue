<script setup>

const { client } = usePrismic()
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))

const props = defineProps({
  elements: Array
})

//création de deux constantes + utilisation de vue-router pour la route
const isMenuOpen = ref(false);
const route = useRoute();



//constante toggleMenu avec une fonction qui va
//ouvrir ou fermer le menu + appel à la fonction
//updateBodyOverflow pour retirer le scroll si ouvert
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  updateBodyOverflow();
};


//constante updateBodyOverflow avec une fonction qui va 
//retirer le scroll si le menu est ouvert ou fermé
const updateBodyOverflow = () => {
  const body = document.body;
  if (isMenuOpen.value == true) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
};

//watchers pour vérifier si on change de page ou non
//afin de fermer le menu si on change de page ou non
watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false;
    updateBodyOverflow();
  }
);

</script>
<template>
  <div class="header">
    <div class="header-block">
      <div class="header-block__logo" v-for="item in elements">
        <img :src="item.header_logo.url" :alt="item.header_logo.alt">
      </div>
      <div class="header-block__container">
        <div class="header-block__container-square">
          <div></div>
        </div>
        <div class="header-block__container-text" v-for="item in elements">
          <PrismicRichText :field="item.header_title"></PrismicRichText>
          <div></div>
          <PrismicRichText :field="item.header_tagline" class="tagline"></PrismicRichText>
        </div>
      </div>
    </div>

    <div class="header-menu -circle" @click="toggleMenu">
      <div class="header-menu-center ">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>


    <div v-if="isMenuOpen" class="menu">
      <!-- Contenu du menu ici -->
      <div class="menu-left">
        <div class="menu-content__leave">
          <p>quitter</p>
          <button @click="toggleMenu">
            <img src="/icons/x.svg" alt="">
          </button>
        </div>

        <div class="menu-content">
          <p class="menu-content__title">menu</p>
          <div class="menu-content__text">
            <RouterLink to="/formation">
              <p>la formation</p>
            </RouterLink>
            <RouterLink to="/departement">
              <p>le departement</p>
            </RouterLink>
            <RouterLink to="/international">
              <p>international</p>
            </RouterLink>
            <RouterLink to="/candidater">
              <p>candidater</p>
            </RouterLink>
            <RouterLink to="/espace-pro">
              <p>espace professionnel</p>
            </RouterLink>
            <RouterLink to="/contact">
              <p>contact</p>
            </RouterLink>
            <RouterLink to="/faq">
              <p>faq</p>
            </RouterLink>
            <div class="menu-content__line"></div>
          </div>

          <div class="menu-content__button">
            <Button size="small" bgColor="bgBlue" borderColor="borderBlue" color="white">s'inscrire</Button>
          </div>
        </div>


        <div class="header-block menu-tagline">
          <div class="header-block__logo" v-for="item in elements">
            <img :src="item.header_logo.url" :alt="item.header_logo.alt">
          </div>
          <div class="header-block__container">
            <div class="header-block__container-square">
              <div></div>
            </div>
            <div class="header-block__container-text" v-for="item in elements">
              <PrismicRichText :field="item.header_title"></PrismicRichText>
              <div></div>
              <PrismicRichText :field="item.header_tagline" class="tagline"></PrismicRichText>
            </div>
          </div>
        </div>
      </div>

      <div class="menu-right">
        <div class="menu-right__content">
          <div class="menu-right__content-image">
          <img src="image1.webp" alt="">
            <div class="menu-right__content-image-text">
              <p>01</p>
              <p>La formation</p>
            </div>
          </div>  
        </div>
       
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {

  z-index: 99;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  font-family: $font-poppins;
  font-size: $size-13;
  font-weight: bold;
  background: red;
  transition: background-color 0.3s ease;

  &-block {
    display: flex;
    align-items: center;

    &__logo {
      img {
        width: rem(45);
      }
    }

    &__container {
      margin: 0 rem(10);
      display: flex;

      justify-content: space-between;

      &-square {
        margin-right: rem(5);
        width: rem(13);
        height: rem(13);
        background-color: $black;
      }
    }
  }

  &-menu {

    &-center {
      width: fit-content;
      text-align: center;
      margin-left: rem(10);
      margin-top: rem(10);

      :nth-child(2) {
        width: rem(15);
      }

      div {

        transition: all .5s;
        width: rem(20);
        height: rem(.5);
        background-color: $black;
        margin: rem(8) 0;
      }

    }

    &.-circle {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: transparent;
      border: rem(1) solid;
      border-color: $black ;
      cursor: pointer;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid transparent;
        border-radius: inherit;
        z-index: 1;
        animation: animateBorder 3s linear infinite;
      }
    }
  }

  .tagline {
    display: none;
  }

  &.-bg-white {
    background: $white;
  }
}


.menu {
  &-right{
    display: none;
  }
  position: absolute;
  background: $white;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  text-transform: uppercase;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }

  &-content__leave {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: rem(40) rem(40) rem(20) rem(40);
    font-size: $size-21;
    font-weight: 300;
    color: $gray-soft;

    button {
      border: none;
      background: none;
      display: inline-flex;
    }
  }

  &-content {
    margin: rem(10) rem(40);

    &__title {
      font-size: $size-80;
    }

    a {
      text-decoration: none;
      color: $black;
      font-size: $size-24;
      font-weight: 300;
    }

    &__text {
      margin: rem(30) rem(0) rem(0) rem(0);
      display: flex;
      flex-direction: column;
      gap: rem(25);
    }

    &__line {
      background: $black;
      height: rem(1);
      width: 100%;
      margin: rem(20) rem(0);
    }

    &__button {
      margin-top: rem(25);
    }
  }

  .menu-tagline {
    margin: rem(120) rem(40) rem(30) rem(40);

    img {
      width: rem(30);
    }
  }
}



//media queries
//adaptation du menu à 625px pour afficher la tagline du menu
@media screen and (min-width: 625px) {
  .header {
    &-block {
      &__container {
        &-text {
          display: flex;

          :nth-child(2) {
            margin: 0 rem(10);
            background: $gray-soft;
            width: rem(1);
            height: rem(13);
          }
        }
      }
    }

    .tagline {
      display: block;
      color: $gray-soft;
      font-weight: 300;
    }
  }
}

//media queries
//adaptation des tailles de texte du menu
@media (min-width: 768px) {
  .header {
    font-size: $size-16;
    padding: rem(30) rem(35);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    &-block {
      &__container {
        &-text {
          :nth-child(2) {
            height: rem(16);
          }
        }

        &-square {
          margin-left: rem(15);
        }
      }
    }
  }
}




@media screen and (min-width: 1024px) {
  .menu {
   &-left{
    width: 50%;
   }
    display: flex;
  
    &-content {
      &__leave {
        display: flex;
        flex-direction: row-reverse;
      }
    }


    &-right{
   
      display: flex;
      width: 80%;
      overflow-x: auto;
      overflow-y:hidden ;
      
      &__content{
        display: flex;  
        &-image{
          display: flex;
          
          img{ 
            width: 50%;
            object-fit: cover;
         
            border: 1px solid red;

          }
          &-text{
            position: absolute;
            z-index: 5;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            right: 0;
            
            font-weight: 100;
            color: $white;
            font-size: $size-40;
            white-space: nowrap;
            :nth-child(1){
              font-size: $size-80;
              font-weight: 600;
              letter-spacing: -5.37px;
              color: transparent;
              -webkit-text-stroke-width: 1px;
              -webkit-text-stroke-color: $white;
              
            }
          }
        }
      }
    }
  }


}



@media (min-width: 1236px) {
  .header {
    font-size: $size-21;

    &-block {
      &__logo {
        img {
          width: rem(40);
        }
      }

      &__container {
        &-text {
          :nth-child(2) {
            margin: 0 rem(20);
            height: rem(18);
          }
        }

        &-square {
          margin-left: rem(10);
          width: rem(15);
          height: rem(20);
        }
      }
    }
  }
}


@media screen and (min-width: 1440px) {
  .header {
    padding: rem(30) rem(60);
    font-size: rem(21);

    &-block {
      &__logo {
        img {
          width: rem(45);
        }
      }

      &__container {
        &-text {
          :nth-child(2) {
            margin: 0 rem(20);
            height: rem(18);
          }
        }

        &-square {
          margin-left: rem(20);
          width: rem(15);
          height: rem(20);
        }
      }
    }
  }


}
</style>