<template>
   
    <div class="year-container">
        <div class="year-wrapper">
      <div class="year"><span>1ère </span><br>année</div>
      <div class="paths">
        <div class="path">{{ path1 }}</div>
        <div class="box-1eme">{{ boxTitle }}</div>
        <div class="path">{{ path2 }}</div>
        
      </div>
    
    </div>
    <div class="year-wrapper">
      <div class="year"><span>2ème </span><br>année</div>
      <div class="paths">
        <div class="path">{{ path1 }}</div>
        <div class="box-2eme">{{ boxTitle }}</div>
        <div class="path">{{ path2 }}</div>
      </div>
      </div>
      <div class="year-wrapper">
      <div class="year"><span>3ème </span><br>année</div>
      <div class="paths">
      
        <div class="box-3eme">{{ boxTitle }}</div>
      
      </div>
      </div>
    </div>

  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const yearTitle = ref('1ère Année');
  const path1 = ref('Communication');
  const boxTitle = ref('Design');
  const path2 = ref('Développement');
  </script>
  
  <style lang="scss">
  .year-container {
    display: flex;
    flex-direction: column;
    align-items: center;
   
    text-transform: uppercase;
    padding:rem(20);
    gap:rem(60);
    
    .wrapper {
        display: flex;
        flex-direction: column;
       
        
    }
    .year {
      font-family: $font-redhat;
      text-transform: uppercase;
      text-align: center;
      font-weight: 700;
      font-size: $size-40;
      border-bottom: 2px solid $white-soft ;
      padding-bottom: 10px;
      margin-bottom: rem(10);
      span{
        font-weight: 300;
      }
    }
    .paths {
      display: flex;
      flex-direction: column;
      justify-content: stretch;
     
    
    
      .path {
        font-family: $font-poppins;
        font-weight: 300;
        text-align: center;
        
        // styles for the path titles
      }
      .box-1eme {
        font-family: $font-poppins;
        font-weight: 300;
        text-align: center;
        // styles for the box
        border: 4px solid $red;
        padding: rem(10) rem(0);
        margin: rem(20) rem(0);
      }
      .box-2eme{
        font-family: $font-poppins;
        font-weight: 300;
        text-align: center;
        // styles for the box
        border: 4px solid $red;
        padding: rem(40) rem(0);
        margin: rem(30) rem(0);

      }
      .box-3eme {
        font-family: $font-poppins;
        font-weight: 300;
        text-align: center;
        // styles for the box
        border: 4px solid $red;
        padding: rem(80) rem(0);
        margin: rem(20) rem(0);

      }
    }
  }

  @media (min-width : 768px) {
    .year-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
   
    text-transform: uppercase;
    padding:rem(20);
    gap:rem(90);
    
    .wrapper {
        display: flex;
        flex-direction: column;
       
        
    }
    .year {
      font-family: $font-redhat;
      text-transform: uppercase;
      text-align: center;
      font-weight: 700;
      font-size: $size-45;
      border-bottom: 2px solid $white-soft ;
      padding-bottom: 10px;
      margin-bottom: rem(10);
      span{
        font-weight: 300;
      }
    }
    .paths {
      display: flex;
      flex-direction: column;
      justify-content: stretch;
    
      .path {
        font-family: $font-poppins;
        font-size: $size-16;
        font-weight: 300;
        text-align: center;
        // styles for the path titles
      }
      .box-1eme {
        font-family: $font-poppins;
        font-weight: 300;
        text-align: center;
        // styles for the box
        border: 4px solid $red;
        padding: rem(10) rem(0);
        margin: rem(50) rem(0);
      }
      .box-2eme{
        font-family: $font-poppins;
        font-weight: 300;
        text-align: center;
        // styles for the box
        border: 4px solid $red;
        padding: rem(40) rem(0);
        margin: rem(30) rem(0);

      }
      .box-3eme {
        font-family: $font-poppins;
        font-weight: 300;
        text-align: center;
        // styles for the box
        border: 4px solid $red;
        padding: rem(80) rem(0);
        margin: rem(20) rem(0);

      }
    }
  }

  }
  
  @media (min-width : 1024px) {
    .year-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
   
    text-transform: uppercase;
    padding:rem(20);
    gap:rem(60);
    
    .wrapper {
        display: flex;
        flex-direction: column;
       
        
    }
    .year {
      font-family: $font-redhat;
      text-transform: uppercase;
      text-align: center;
      font-weight: 700;
      font-size: $size-55;
      border-bottom: 2px solid $white-soft ;
      padding-bottom: 10px;
      margin-bottom: rem(10);
      span{
        font-weight: 300;
      }
    }
    .paths {
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      font-size: $size-19;
      
      
      .path {
        font-family: $font-poppins;
        font-size: $size-19;
        font-weight: 300;
        text-align: center;
        
        // styles for the path titles
      }
      .box-1eme {
        font-family: $font-poppins;
        font-weight: 300;
        text-align: center;
        // styles for the box
        border: 4px solid $red;
        padding: rem(10) rem(0);
        margin: rem(50) rem(0);
      }
      .box-2eme{
        font-family: $font-poppins;
        font-weight: 300;
        text-align: center;
        // styles for the box
        border: 4px solid $red;
        padding: rem(40) rem(0);
        
        margin: rem(30) rem(0);

      }
      .box-3eme {
        font-family: $font-poppins;
        font-weight: 300;
        text-align: center;

        // styles for the box
        border: 4px solid $red;
        padding: rem(80) rem(0);
        margin: rem(20) rem(0);

      }
    }
  }

  }
  </style>
  