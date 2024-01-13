<script>

</script>

<template>
    <div class="circles">
    <div class="circle">
        <NuxtLink to="/parcours/design">
        <div class="circle-parcours-1"></div>
        <h3>Création numérique</h3>
        </NuxtLink>
    </div>
    <div class="circle">
        <NuxtLink to="/parcours/developpement">
        <div class="circle-parcours-2"></div>
        <h3>Développement web</h3>
        </NuxtLink>
    </div>
    <div class="circle">
        <NuxtLink to="/parcours/communication">
        <div class="circle-parcours-3"></div>
  
        <h3>Communication</h3>
    </NuxtLink> 
    </div>
</div>
</template>

<style lang="scss" scoped>
a {
    text-decoration: none;
}
.circles {
    display: flex;
    flex-direction: column;
    gap:rem(40);
    
}
.circle {
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    
    &:hover {
    transform: scale(1.1);
    
  }
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h3 {
        text-transform: uppercase;
        font-family: $font-poppins;
        font-size: $size-19;
        font-weight: 300;
        text-align: center;
        padding:rem(15);
        color:$black;
  
      
     
    }

    &-parcours-1, &-parcours-2, &-parcours-3 {

        
        width: rem(230);
        height: rem(230);
        border-radius: 50%;
        background-color: $white-soft;
       
        background-position: center 20%;
        background-size: cover;
        border: 7px solid $white-soft;
    }
    &-parcours-1 {
    background-image: url('/image-interface.webp');
    }
    &-parcours-2 {
    background-image: url('/image-dev.webp');
    }
    &-parcours-3 {
    background-image: url('/image-stratdecom.webp');
    }

}

@media (min-width: 768px) {
    .circles {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap:rem(43);
      
        justify-content: center;
    }
}
@media (min-width: 1024px){
    .circles {
        justify-content: center;
        gap:rem(43);
        .circle {
            
    &-parcours-1, &-parcours-2, &-parcours-3 {

        
width: rem(200);
height: rem(200);
border-radius: 50%;
background-color: $white-soft;

background-position: center 20%;
background-size: cover;
border: 7px solid $white-soft;
}
        }
    }

  
}
</style>