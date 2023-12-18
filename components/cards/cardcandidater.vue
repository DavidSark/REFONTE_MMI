<script>

</script>

<template>
    <div class="section3-candidater">
      <div class="section3-candidater__image">
        <img src="/image-candidater.webp" alt="">
        <p class="section3-candidater__image-text">Prêt à vous <span class="section3-candidater__image-text__span1">lancer</span> 
            <span class="section3-candidater__image-text__span2">?</span></p>
      </div>
      <div class="section3-candidater__qualites">
        <p class="section3-candidater__qualites-title"><span class="section3-candidater__qualites-title__span1">les qualités</span> requises <span class="section3-candidater__qualites-title__span2">.</span></p>
        <p class="section3-candidater__qualites-text"><span class="section3-candidater__qualites-text__span">01 </span>curiosité</p>
        <p class="section3-candidater__qualites-text"><span class="section3-candidater__qualites-text__span">02 </span>créativité</p>
        <p class="section3-candidater__qualites-text"><span class="section3-candidater__qualites-text__span">03 </span>esprit d'équipe</p>




      </div>
    </div>
    <Footer></Footer>
  </template>
  
  <style lang="scss" scoped>
  .section3-candidater {
    font-family: $font-redhat;
    text-transform: uppercase;
  
    &__qualites {
        padding:rem(40) rem(25);
        height:rem(300);
        &-text {
     
            padding: rem(0) rem(0);
            font-size:$size-24;
            font-weight: 300;
            &__span {
                font-weight: 700;
            }
        
        }
        &-title {
            color:$black;
            font-size:$size-33;
            line-height:100%;
        &__span2 {
            font-weight:700;
            font-size:$size-45;
            color:$green;
        }
        &__span1{
            font-weight: 700;

        }
        }
        
    }
    &__image {
    
      position: relative;
      img {
        width: 100%;
        filter: grayscale(100%);
        transition: filter 0.5s ease-in-out;
      }
      &:hover img {
        filter: grayscale(0%);
      }
      .section3-candidater__image-text {
        position: absolute;
        bottom: 20px;
        right: 20px; 
    
        color: white; 

        font-size: $size-33; 
        font-weight: bold; 
        text-align: right; 
        z-index: 1; 
        &__span1 {
            font-weight: 300;
        }
        &__span2 {
            color:$blue;
        }
        
      }
    }
  }

  </style>