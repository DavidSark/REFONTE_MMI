<script setup>
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlides() {
  slideIndex++;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  const slideWidth = slides[0].clientWidth;
  document.querySelector('.slides').style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

setInterval(showSlides, 3000); // Change image every 3 seconds

</script>

<template>
    <div class="slider">
  <div class="slides">
    <img src="/justine-duval.webp" alt="Image 1">
    <img src="/justine-duval.webp" alt="Image 2">
    <img src="/justine-duval.webp" alt="Image 3">
  </div>
</div>


</template>

<style lang="scss" scoped>
.slider {
  width: 100%;
  overflow: hidden;
  .slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
    img {
      width: 100%;
      height: auto;
    }
  }
}

</style>