<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const { client } = usePrismic();
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"));

let animationFrameId;
const textContainerRef = ref(null); // Référence au conteneur de texte

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

const onMouseLeave = () => {
  document.documentElement.style.setProperty('--cursor-size', "32px");
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  textContainerRef.value.removeEventListener('mousemove', onMouseMove); // Retirer l'écouteur
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
        <PrismicRichText :field="textVisible"></PrismicRichText> 
      </div>
    </div>
    <div class="layer layer_red">
      <div class="text_container text_black">
        <PrismicRichText :field="textHidden"></PrismicRichText> 
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
        padding: rem(0) rem(60);
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
            padding: rem(140) rem(0);
            user-select: none;
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
        

            .text_black{
                color: $white !important;
                
            }
        }
}

</style>

  