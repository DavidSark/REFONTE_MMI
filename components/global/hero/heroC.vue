<script setup>
const { client } = usePrismic();
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))

</script>

<template>
    <div class="container-hero">
      <div class="container-hero__left">
        <div class="container-hero__left-title">
            <h1>Mmi Montbéliard</h1>
            <h2>Métiers du Multimédia et de l'internet</h2>
        </div>
       
        <div class="container-hero__left-buttons">
          <Button size="small" bgColor="bgBlue" borderColor="borderBlue" color="white">Candidater</Button>
          <Button size="small" bgColor="bgTransparent" >Formation</Button>


        </div>
        <div class="container-hero__left-social">
            <p>retrouvez-nous sur nos réseaux sociaux !</p>
            <div class="container-hero__left-social-line"></div>
            <div class="container-hero__left-social-icons">
              <a href="https://www.facebook.com/mmimontbeliard" target="_blank"><img src="/icons/icon-facebook.svg" alt="icone facebook"></a>
              <a href="https://www.instagram.com/mmi_montbeliard/" target="_blank"><img src="/icons/icon-instagram.svg" alt="icone instagram"></a>
              <a href="https://www.linkedin.com/school/mmimontbeliard" target="_blank"><img src="/icons/icon-linkedin.svg" alt="icone linkedin"></a>
            </div>
          </div>
      </div>
     
      <div class="container-hero__right">
        <img src="/image1.webp" alt="Cours en MMI">      
        <img src="/image3.webp" alt="Cours en MMI">      
      </div>
    </div>
</template>

 <style lang="scss" scoped>
.container-hero {
    font-family: $font-poppins;

    display: flex;
    height: 100vh;
    &__left{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &-title{
        padding: rem(0) rem(35) rem(35) rem(35);
        :nth-child(1){
          font-family: $font-redhat;
          letter-spacing: -6.38px;
            font-size: $size-60; 
            font-weight: 700;
            text-transform: uppercase;
            display: table-caption;
        }
        :nth-child(2){
            font-size: $size-16;    
            letter-spacing: rem(3);
            color: $gray-soft;   
            text-transform: uppercase;
        }
        }
        &-buttons{
            padding: rem(0) rem(35) rem(35) rem(35);
            display: flex;
            gap: rem(20);
        }
        &-social{
            
            text-transform: uppercase;
            display: flex;
            flex-direction: column;
            gap: rem(10);
            padding: rem(0) rem(35) rem(35) rem(35);
            font-size: $size-13;
            font-weight: 300;
            color: $gray-soft;
            &-icons{
             display: flex;
             align-items: flex-end;
             gap: rem(20);
             img{
                width: rem(20);
                height: rem(20);
             }
            }
        } 
    }

    &__right{
        width: 50%;
        display: flex;
        gap:rem(5);
        overflow: hidden;
        img{
            width: 50%;
            object-fit: cover;
            object-position: 65% 50%;
            filter: grayscale(1);
        }           
    }
  }


  @media (min-width: 1024px) {
    .container-hero {
    &__left{
        &-title{
            :nth-child(1){
            font-size: 6.3vw;        
        }
            :nth-child(2){
                font-size: 1.5vw;     
                font-weight: 300;
               
            }
        }
        &-buttons{
           
        }
        &-social{
           display: flex;
           flex-direction: row-reverse;
           align-items: center;
           justify-content: flex-end;
           &-line{
            height: rem(1);
            width: rem(103);
            background-color: $gray-soft;
            margin: 0 rem(20);
           }
        } 
    }
  }
}





//Media queries pour adapter l'espacement vertical du hero
  @media (min-width: 1440px) {
    .container-hero {
    &__left{
        &-title{
        padding: rem(0) rem(0) rem(35) rem(60);
        }
        &-buttons{
            padding: rem(0) rem(60) rem(35) rem(60);
        }
        &-social{
          font-size: $size-16;
         
            padding: rem(0) rem(60) rem(35) rem(60);
            &-icons{
              gap: rem(19);
              img{
                width: rem(25);
                height: rem(25);
             }
            }
        } 
        &-title{
            :nth-child(1){
            font-size: 6.3vw;          
          }
          :nth-child(2){
            font-size: 1.80vw;  
                letter-spacing: 0.2vw;    
                white-space: nowrap;
            }
        }
    }
  }
} 
</style>