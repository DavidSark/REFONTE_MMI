<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const { client } = usePrismic();
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"));

let animationFrameId;

const updateCursorPosition = (x, y) => {
  document.documentElement.style.setProperty('--cursor-x', x + "px");
  document.documentElement.style.setProperty('--cursor-y', y + "px");
};

const onMouseMove = (e) => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  animationFrameId = requestAnimationFrame(() => updateCursorPosition(e.clientX, e.clientY));
};

const onMouseEnter = () => {
  document.documentElement.style.setProperty('--cursor-size', "350px");
};

const onMouseLeave = () => {
  document.documentElement.style.setProperty('--cursor-size', "32px");
};

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove);
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove);
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

<template>
  <div class="main_page">
    <div class="layer dark_layer">
      <div class="text_container" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <PrismicRichText :field="home.data.index_tagline"></PrismicRichText> 
      </div>
    </div>
    <div class="layer layer_red">
      <div class="text_container text_black">
        <PrismicRichText :field="home.data.index_tagline"></PrismicRichText> 
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
    height: 100vh;

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
            padding: 140px;
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

  