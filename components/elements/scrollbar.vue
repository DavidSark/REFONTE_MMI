<template>
 <div class="scrollbar-container" ref="scrollContainer" @scroll="handleScroll">
    <div class="scrollbar">
      <div
        v-for="(button, index) in buttons"
        :key="index"
        :class="{ 'active': activeButton === index }"
        class="scrollbar-button"
      ></div>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';

const scrollContainer = ref(null);
const buttons = [0, 1, 2, 3, 4];
let activeButton = 0;

const handleScroll = () => {
  const scrollPosition = scrollContainer.value.scrollTop;
  const containerHeight = scrollContainer.value.clientHeight;
  const totalScrollHeight = scrollContainer.value.scrollHeight;
  const percentageScrolled = (scrollPosition / (totalScrollHeight - containerHeight)) * 100;

  activeButton = Math.floor((percentageScrolled / 100) * buttons.length);

  // Supposez que vous avez des ancres avec les IDs "section-1", "section-2", etc.
  const section1 = document.getElementById('section-1');
  const section2 = document.getElementById('section-2');
  // ... Ajoutez d'autres ancres si nécessaire

  if (section1) {
    const section1Top = section1.offsetTop;
    const section1Height = section1.offsetHeight;

    if (scrollPosition >= section1Top && scrollPosition < section1Top + section1Height) {
      activeButton = 0;
    }
  }

  if (section2) {
    const section2Top = section2.offsetTop;
    const section2Height = section2.offsetHeight;

    if (scrollPosition >= section2Top && scrollPosition < section2Top + section2Height) {
      activeButton = 1;
    }
  }
  // Répétez pour d'autres ancres

};

onMounted(() => {
  handleScroll(); // Effectuer la vérification initiale du défilement
});
  </script>
  
  <style lang="scss" scoped>
    .scrollbar-container {
    display: none;
    position: fixed;
    left: rem(15);
    top: 50%;
    transform: translateY(-50%);
    height: 200px; /* Height of the scrollbar container */
    overflow-y: auto;
  }
  
  .scrollbar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .scrollbar-button {
    width: rem(9);
    height: rem(9);
    border-radius: 50%;
    margin-bottom: 20px; /* Space between buttons */
    background-color: $white-soft; /* Default button color */
    transition: background-color 0.3s ease;
  }
  
  .scrollbar-button.active {
    background-color: $black; /* Active button color */
  }

  @media (min-width : 1024px) {
    .scrollbar-container{
      display:block;
    }
    
  }

  @media (min-width : 1440px) {
    .scrollbar-container{
      left: rem(30);
    }
    
  }
  </style>
  