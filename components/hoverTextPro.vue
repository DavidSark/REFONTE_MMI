<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const { client } = usePrismic();
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"));

let animationFrameId;
const textContainerRef = ref(null); // Référence au conteneur de texte

const isCursorOnButton = ref(false);
const updateCursorPosition = (x, y) => {
  // Obtenir les dimensions et la position du conteneur de texte
  const rect = textContainerRef.value.getBoundingClientRect();
  // Ajuster les positions x et y pour le décalage
  const adjustedX = x - rect.left;
  const adjustedY = y - rect.top;

  document.documentElement.style.setProperty('--cursor-x', adjustedX + "px");
  document.documentElement.style.setProperty('--cursor-y', adjustedY + "px");
};

const onMouseMove = (e) => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  animationFrameId = requestAnimationFrame(() => updateCursorPosition(e.clientX, e.clientY));
};

const onMouseEnter = () => {
  document.documentElement.style.setProperty('--cursor-size', "350px");
  textContainerRef.value.addEventListener('mousemove', onMouseMove); // Ajouter l'écouteur ici
};

const onMouseEnterButton = () => {
  isCursorOnButton.value = true;
  document.documentElement.style.setProperty('--cursor-size', "350px"); // Maintenir la taille du masque
};

const onMouseLeaveButton = () => {
  isCursorOnButton.value = false;
};

const onMouseLeave = () => {
    if (!isCursorOnButton.value) {
    document.documentElement.style.setProperty('--cursor-size', "32px"); // Réduire la taille du masque seulement si le curseur n'est pas sur le bouton
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    textContainerRef.value.removeEventListener('mousemove', onMouseMove);
  }
};

onMounted(() => {
  // Plus besoin d'ajouter l'événement à window
});

onBeforeUnmount(() => {
  // Plus besoin de retirer l'événement de window
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});


const props = defineProps({
  textVisible: Array,
  textHidden : Array,
})
</script>

<template>
  <div class="main_page">
    
    <div class="layer dark_layer">
      <div class="text_container"  ref="textContainerRef" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <PrismicRichText class="prismic" :field="textVisible"></PrismicRichText> 
      </div>
    </div>
    <div class="layer layer_red">
      <div class="text_container text_black">
        <PrismicRichText class="prismic" :field="textHidden"></PrismicRichText> 
            <RouterLink to="/espace-pro" @mouseenter="onMouseEnterButton" @mouseleave="onMouseLeaveButton">
                    <Button size="small" class="button">déposer une offre</Button>
            </RouterLink>

            
      </div>
    </div>

    
        
  </div>
</template>
<style lang="scss" scoped>
:root{
    --cursor-size: 32px;
    --cursor-x:0px;
    --cursor-y: 0px;
}
.main_page{
    position: relative;
    width: 100vw;
    .layer{
        color: $black;
        position: absolute;
        width: 100vw;
        
        background: rgb(15,14,16);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
   
    }

    .dark_layer{
        background-color: $white;
    }
    .text_container{
            width: 100%;
            padding: rem(70) rem(0) rem(140) rem(0);
            user-select: none;

            .prismic{
              padding: rem(0) rem(40);
           
            }
        }

    .layer_red{
            background-color: $black;
            mask: url('/mask.svg');
            -webkit-mask: url('/mask.svg');
            mask-repeat:no-repeat ;
            -webkit-mask-repeat:no-repeat ;
            mask-position: calc(var(--cursor-x) - var(--cursor-size)/2)  calc(var(--cursor-y) - var(--cursor-size)/2);
            -webkit-mask-position: calc(var(--cursor-x) - var(--cursor-size)/2)  calc(var(--cursor-y) - var(--cursor-size)/2);
            mask-size: var(--cursor-size);
            -webkit-mask-size: var(--cursor-size);
            pointer-events: none;
            transition-duration: 100ms;
            transition-timing-function: ease;
            a { 
                pointer-events: all;
                margin: rem(0) rem(40);
            }
            .text_black{
                color: $white !important;
            }
        }
}

@media screen and (min-width: 1440px) {
.main_page{
    .text_container{

            .prismic{
                padding: rem(0) rem(75);
           
            }
        }
    .layer_red{
        a{
           .button{
               margin: rem(0) rem(40);
           } 
        }    
    
    }
}
   
}

</style>