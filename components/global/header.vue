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
  if(isMenuOpen.value == true){
    document.body.style.overflow = 'hidden';
  }else{
    document.body.style.overflow = '';
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

    <div>
      <div>
        <button @click="toggleMenu">
          Open Menu
        </button>

        <div v-if="isMenuOpen" class="menu">
          <!-- Contenu du menu ici -->
          <p>Menu content goes here.</p>
          <RouterLink to="/formation"><button>formation</button></RouterLink>
          <br>
          <RouterLink to="/"><button>Accueil</button></RouterLink>
          <br>
          <button @click="toggleMenu">
            Close Menu
          </button>
        </div>
      </div>
    </div>
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

    <div class="header-menu -circle">
      <div class="header-menu-center ">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>



  </div>
</template>

<style lang="scss" scoped>
.menu {
  background: red;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  padding: 50px 10px;
}

.header {
  .button {
    height: max-content;
  }

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
  padding: rem(30) rem(20);
  background: transparent;
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
        background-color: $white;
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
      border-color: $white ;
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
}</style>