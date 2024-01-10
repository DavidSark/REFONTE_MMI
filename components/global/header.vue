<script setup>

const { client } = usePrismic()
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))

const props = defineProps({
  elements: Array
})


//on scroll le background est blanc
onMounted(() => {
  let scrolled = 0;
  let header = document.getElementsByClassName('header')[0];
  document.addEventListener('scroll', (e) => {
    scrolled = window.scrollY;
    if (scrolled > 0) {
      header.classList.add('-bg-white');
    } else {
      header.classList.remove('-bg-white');
    }
  });
});








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

const handleMouseWheel = (event) => {
  const scrollContainer = document.querySelector(".menu-right__content");

  if (scrollContainer) {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
  }
};

onMounted(() => {
  console.log("Component mounted");
  document.addEventListener('wheel', handleMouseWheel, { passive: false });
});

onUnmounted(() => {
  document.removeEventListener('wheel', handleMouseWheel);
});

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
            <div class="menu-content__text-flex">
              <div class="bouton"></div>
              <RouterLink to="/formation">
                <p>la formation</p>
              </RouterLink>
            </div>
            <div class="menu-content__text-flex">
              <div class="bouton"></div>
              <RouterLink to="/departement">
                <p>le departement</p>
              </RouterLink>
            </div>
            <div class="menu-content__text-flex">
              <div class="bouton"></div>
              <RouterLink to="/international">
                <p>international</p>
              </RouterLink>
            </div>
            <div class="menu-content__text-flex">
              <div class="bouton"></div>
              <RouterLink to="/candidater">
                <p>candidater</p>
              </RouterLink>
            </div>
            <div class="menu-content__text-flex">
              <div class="bouton"></div>
              <RouterLink to="/espace-pro">
                <p>espace professionnel</p>
              </RouterLink>
            </div>
            <div class="menu-content__text-flex">
              <div class="bouton"></div>
              <RouterLink to="/contact">
                <p>contact</p>
              </RouterLink>
            </div>

            <div class="menu-content__text-flex">
              <div class="bouton"></div>

              <RouterLink to="/faq">
                <p>faq</p>
              </RouterLink>
            </div>

            <div class="menu-content__line"></div>
          </div>
        </div>
      </div>

      <div class="menu-right">
        <div class="menu-right__content">
          <div class="menu-right__content-section1">
            <RouterLink to="/formation">
              <img src="/image1.webp" alt="">
              <div class="menu-right__content-section1-text">
                <p>01</p>
                <p>La formation</p>
              </div>
            </RouterLink>
          </div>
          <div class="menu-right__content-section1">
            <RouterLink to="/departement">
              <img src="/image-dep-card3.webp" alt="">
              <div class="menu-right__content-section1-text" >
                <p>02</p>
                <p>Le département</p>
              </div>
            </RouterLink>
          </div>
          <div class="menu-right__content-section1">
            <RouterLink to="/international">
              <img src="/image-international-2.webp" alt="">
              <div class="menu-right__content-section1-text -03">
                <p>03</p>
                <p>International</p>
              </div>
            </RouterLink>
          </div>
          <div class="menu-right__content-section1">
            <RouterLink to="/candiater">
              <img src="/candidater_hover.webp" alt="">
              <div class="menu-right__content-section1-text">
                <p>04</p>
                <p>Candidater</p>
              </div>
            </RouterLink>
          </div>
          <div class="menu-right__content-section1">
            <RouterLink to="/espace-pro">
              <img src="/image4.webp" alt="">
              <div class="menu-right__content-section1-text">
                <p>05</p>
                <p>Espace pro</p>
              </div>
            </RouterLink>
          </div>
          <div class="menu-right__content-section1">
            <RouterLink to="/contact">
              <img src="/image5.webp" alt="">
              <div class="menu-right__content-section1-text">
                <p>06</p>
                <p>Contact</p>
              </div>
            </RouterLink>
          </div>
          <div class="menu-right__content-section1">
            <RouterLink to="/faq">
              <img src="/faq_hover.webp" alt="">
              <div class="menu-right__content-section1-text">
                <p>07</p>
                <p>FAQ</p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  padding: rem(20);
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

  &-right {
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
  z-index: 100;

  &-left {
    margin: rem(30) rem(0) rem(0) rem(0);
  }

  &-content__leave {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: $size-21;
    font-weight: 300;
    color: $gray-soft;
    padding-right: rem(25);
    margin-bottom: rem(20) ;
    button {
      border: none;
      background: none;
      display: inline-flex;
    }
  }

  &-content {
    margin: rem(10) rem(40);

    &__title {
      font-size: $size-32;
      text-align: left;
    }

    a {
      text-decoration: none;
      color: $black;
      font-size: $size-16;
      font-weight: 300;
    }

    &__text {
      margin: rem(30) rem(0) rem(0) rem(0);
      display: flex;
      flex-direction: column;
      gap: rem(25);

      :hover {

        .bouton {
          transform: translateX(-150%);
          opacity: 1;
          width: rem(10);
          height: rem(10);
        }

      }

      &-flex {
        display: flex;
        align-items: center;
        position: relative;

        .bouton {
          position: absolute;
          width: 2%;
          height: 2%;
          background: $black;
          border-radius: rem(20);
          transform: translateX(-450%);
          opacity: 0;
          transition: all .2s;
        }
      }

    }

    &__line {
      background: $black;
      height: rem(1);
      width: 100%;
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

  .menu {
    z-index: 100;
    display: flex;
    &-left {
      width: 45%;
      background: $white;
      height: 100vh;
      margin: 0;
    }
    &-content {
      &__title{
        font-size: 10vh;
      }
      &__text{
        a{
          font-size: 2vw;
        }
      }
      margin: rem(0) rem(40);
      &__leave {
        padding-left: rem(25) ;
        padding-top:rem(40);
        display: flex;
        flex-direction: row-reverse;
      }
    }
    &-right {
      position: relative;
      display: flex;
      flex: 1;
      width: 30%;
      height: 100vh;
      &__content {
        display: flex;
        gap: rem(10);
        overflow-x: auto;
        position: relative;
        
        &::-webkit-scrollbar {
          display: none;
        }

        :hover {
          img {
            filter: none;
            transform: scale(1.2);
           
          }

          .menu-right__content-section1-text {
            :nth-child(1) {
              color: $white;
              -webkit-text-stroke-width: none;
              -webkit-text-stroke-color: none;
            }
          }
        }

        &-section1 {
          overflow: hidden;
          display: flex;
          flex: 0 0 auto;
          position: relative;
          :link{
            overflow: hidden;
            display: flex;
            flex: 0 0 auto;
            position: relative;
          }
          
        

          img {
            transition: transform .4s;
            object-fit: cover;
            width: rem(200);
            filter: grayscale(100);
          }

          &-text {
            z-index: 5;
            position: absolute;
            right: rem(20);
            bottom: rem(30);
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            font-weight: 100;
            color: $white;
            font-size: 2.2vw;
            white-space: nowrap;

            :nth-child(1) {
              font-size: $size-60;
              font-weight: 600;
              letter-spacing: -5.37px;
              color: transparent;
              -webkit-text-stroke-width: 1px;
              -webkit-text-stroke-color: $white;
              transition: all .4s;
            }
          }
        }
      }
    }
  }
}




@media screen and (min-width: 1024px) {
  .menu {
    z-index: 100;
    display: flex;
    &-left {
      width: 45%;
      background: $white;
      height: 100vh;
      margin: 0;
    }
    &-content {
      &__title{
        font-size: 10vh;
      }
      &__text{
        a{
          font-size: 2vw;
        }
      }
      margin: rem(0) rem(60);
      &__leave {
        padding-left: rem(45) ;
        padding-top:rem(40);
        display: flex;
        flex-direction: row-reverse;
      }
    }
    &-right {
      position: relative;
      display: flex;
      flex: 1;
      width: 55%;
      height: 100vh;
      &__content {
        display: flex;
        gap: rem(10);
        overflow-x: auto;
        position: relative;
        
        &::-webkit-scrollbar {
          display: none;
        }

        :hover {
          img {
            filter: none;
            transform: scale(1.2);
          }

          .menu-right__content-section1-text {
            :nth-child(1) {
              color: $white;
              -webkit-text-stroke-width: none;
              -webkit-text-stroke-color: none;
            }
          }
        }

        &-section1 {
          overflow: hidden;
          display: flex;
          flex: 0 0 auto;
          position: relative;
          :link{
            overflow: hidden;
            display: flex;
            flex: 0 0 auto;
            position: relative;
          }
         

          img {
            transition: transform .4s;
            object-fit: cover;
            width: 20vw;
            filter: grayscale(100);
          }

          &-text {
          
         
      

            :nth-child(1) {
              font-size: $size-80;
              font-weight: 600;
              letter-spacing: -5.37px;
              color: transparent;
              -webkit-text-stroke-width: 1px;
              -webkit-text-stroke-color: $white;
              transition: all .4s;
            }
          }
        }
      }
    }
  }
}


@media (min-width: 1236px) {

  .menu {
    z-index: 100;
  }
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


  .menu{
    &-left{
      width:36.5%
    }
    &-content{
      &__text{
        gap: 2.5rem;
        a{
          font-size: $size-32;
        }
      }
    }

    &-right{
      &__content{
        &-section1{
          &-text{
            right: rem(20);
            bottom: rem(40);
            font-size: $size-36;
            white-space: nowrap;

          }
        }
      }
    }
  }

}</style>