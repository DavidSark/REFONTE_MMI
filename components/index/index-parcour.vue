<script setup>
// gsap.registerPlugin(ScrollTrigger);

// const textElements = gsap.utils.toArray('.text');

// textElements.forEach(text => {
//   gsap.to(text, {
//     backgroundSize: '100%',
//     ease: 'none',
//     scrollTrigger: {
//       trigger: text,
//       start: 'center 80%',
//       end: 'center 20%',
//       scrub: true,
//     },
//   });
// });
</script>

<template>
    <div class="container">
  <NuxtLink to="/parcours/design">
  <h1 class="text">DESIGN.<span>création web.</span></h1>
</NuxtLink>
<NuxtLink to="/parcours/developpement">
  <h1 class="text">développement web.<span>Intégration web.</span></h1>
</NuxtLink>
<NuxtLink to="/parcours/communication">
  <h1 class="text">communication.<span>stratégie web.</span></h1>
</NuxtLink>
  <!-- <h1 class="text">HOVER ON ME<span><a href="https://stacksorted.com/text-effects/minh-pham" target="_blank">SOURCE</a></span></h1>
  <h1 class="text">LIKE THIS?<span><a href="https://twitter.com/juxtopposed" target="_blank">LET'S CONNECT</a></span></h1> -->
</div>

</template>

<style lang="scss" scoped>

.container {
  font-family: $font-redhat;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 20vh;
  margin-top:rem(40)

  
}
.text {
  font-size: 7.2vw;
  letter-spacing: -.05em;
  cursor: pointer;
  line-height: 120%;
  margin: 0;
  margin-left: 20px;

  width: 100vw;
  color: $black;
  background: linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 0%;
  transition: background-size cubic-bezier(.1,.5,.5,1) 0.5s;

  border-bottom: 2px solid $white-soft;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
}

span {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: $blue;
  color: $white;
  
  clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
  transform-origin: center;
  transition: all cubic-bezier(.1,.5,.5,1) 0.6s;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text:hover > span {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

a {
  text-decoration: none;
  color: inherit;
  
}

@media (min-width: 540px){
    .container {
  font-family: $font-redhat;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 40vh;
  margin-top:rem(40);
  padding: rem(30) rem(40);

    }
    .text {
        margin-left: 0px;

    }

}


@media (min-width:1024px) {
.container {
  font-family: $font-redhat;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 60vh;

  
}
}



@media (min-width:1440px) {
.container {
  font-family: $font-redhat;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 90vh;
  padding: rem(30) rem(75);

  
}

.text {

  margin-left: 0px;
}
}

</style>