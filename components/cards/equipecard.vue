<script setup>

const { client } = usePrismic();
const { data: equipe, error } = await useAsyncData('equipe', () => client.getSingle("equipe"));


const props = defineProps({
  members: Array
})


</script>

<template>
  <div class="equipecard-item" v-for="item in members">
    <img class="equipecard-item__image1" :src="item.image.url" :alt="item.image.alt">
    <div class="equipecard-item">
      <PrismicRichText :field="item.name"></PrismicRichText>
      <PrismicRichText class="equipecard-item__fonction" :field="item.fonction"></PrismicRichText>
      <a :href="item.link.url">
        <img class="equipecard-item__image2" src="/icons/icon-linkedin.svg" alt="LinkedIn">
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.equipecard-item {
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  display: flex;
  flex-direction: column;
  font-family: $font-poppins;
  align-items: center;
  text-transform: uppercase;
  font-weight: 300;
  font-size: $size-13;
  gap: rem(8);
  margin-bottom:rem(40);

  strong {
    font-weight: 700;
  }

  &__fonction {
    font-size: $size-12;
  }

  &__image1 {
    width: rem(197);
    margin-bottom: rem(8)
  }

  &__image2 {
    width: rem(22);
  }
}

@media (min-width: 768px) {
  .equipecard-item {
    font-size: $size-14;

    &__fonction {
      font-size: $size-13;
    }

    &__image2 {
      width: rem(25);
    }
  }
}

@media (min-width: 1440px) {
  .equipecard-item {
    font-size: $size-16;

    &__fonction {
      font-size: $size-14;
    }

    &__image1 {
      width: rem(220);
    }

    &__image2 {
      width: rem(29);
    }
  }
}</style>