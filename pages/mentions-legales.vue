<script setup>
const { client } = usePrismic();
const { data: mentions, error } = await useAsyncData('mentions', () => client.getSingle("mentions"));


const props = defineProps({
  title: Array,
 
})
</script>

<template>

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
  

</div>
<pre>
  <!-- {{ mentions.data}}
  {{mentions.data.test1[0].text}}
  {{mentions.data.test2[0].text}}
  {{mentions.data.section1[0].soustitre[0].text}}
  {{mentions.data.section1[0].titre[0].text}} -->
</pre>
</template>

<style lang="scss">

.section1-mentions {
  padding: rem(20);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:rem(20);
  &__slider {
    display: flex;
    flex-direction: column;
    font-family: $font-poppins;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: $size-13;
    gap:rem(10);
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
    gap:rem(5);
    // :nth-child(2){
    //   width: rem(10);
    //   height: rem(10);
    //   border-radius: 50%;
    //   background-color: $blue;
    //   margin-bottom: rem(3) ;
    // }
    span {
      color: $blue;
    }
    @include borderColorTitle;
    border-color:$blue;
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
        color:$blue;
      }
    }
  }
}
}

//media queries
@media (min-width: 768px) {
  .section1-mentions {
  padding: rem(40);
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap:rem(20);
  &__slider {
    font-size: $size-14;
    :nth-child(3) {
      width: rem(20);
    }
  }
  &__sideleft {
  &-borderT {
    @include borderColorTitle;
    border-color:$blue;
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
//media queries
@media (min-width: 1024px) {
  .section1-mentions {
  gap:rem(40);
  &__slider {
    font-size: $size-14;
    :nth-child(1){
      width: rem(210);
    }
    :nth-child(3) {
      width: rem(20);
    }
  }
  &__sideleft {
  &-borderT {
    @include borderColorTitle;
    border-color:$blue;
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

//mediaqueries
@media (min-width: 1440px) {
  .section1-mentions {
  gap:rem(40);
  &__slider {
    font-size: $size-16;
    :nth-child(1){
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