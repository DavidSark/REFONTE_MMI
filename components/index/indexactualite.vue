<script setup>
const { client } = usePrismic();
const { data: departement, error } = await useAsyncData('departement', () => client.getSingle("departement"));

</script>

<template>
     <div class="section2-departement">
        <div class="section2-departement__title">
            <h2>Les <br><span>actualités</span><span>.</span></h2>
        </div>

        <div class="section2-departement__card">
        <div class="section2-departement__card-1">
            <img src="/image-dep-card1.webp" alt="">
            <h3><span>Bienvenue aux </span>étudiants 2023</h3>
            <p>C’est partie pour une nouvelle édition de la journée. <span>Bienvenue aux étudiants</span> où les différentes promos de MMI ont pu se réunir pour participer à un jeu de piste !</p>
            <a href="https://www.instagram.com/mmi_montbeliard/" target="_blank">
            <Button class="section2-departement__card__btn" size="small" >En savoir plus</Button>
             </a>
        </div>
        <div class="section2-departement__card-2">
            <img src="/image-dep-card2.webp" alt="">
            <h3><span>offf </span>barcelona 2023</h3>
            <p>Certains de nos étudiants ont pu partir en voyage à Barcelone en participant au <span>Festival du Design “OFFF”.</span></p>
            <a href="https://www.instagram.com/mmi_montbeliard/" target="_blank">
            <Button class="section2-departement__card__btn" size="small" >En savoir plus</Button>
            </a>
        </div>
        <div class="section2-departement__card-3">
            <img src="/image-dep-card3.webp" alt="">
            <h3><span>rentrée </span>2023</h3>
            <p>C’est partie pour une <span>nouvelle année</span>, pour nos étudiants de MMI. Au programme quelques jours de découverte pour nos nouveaux étudiants.</p>
            <a href="https://www.instagram.com/mmi_montbeliard/" target="_blank">
            <Button class="section2-departement__card__btn" size="small" >En savoir plus</Button>
            </a>
        </div>
    </div>
    </div>
</template>

<style lang="scss">



.section2-departement {
    padding:rem(0) rem(20) rem(60) rem(20);
    &__card {
        display: flex;
        flex-direction: column;
        gap:rem(60);
        h3 {
                margin:rem(10) rem(0);
                text-transform: uppercase;
                font-family: $font-redhat;
           
                font-size:$size-16;
                span {
                    font-weight: 700;
                }
              
            }
            p {
                    font-family: $font-poppins;
                    font-size: $size-13;
                    font-weight: 300;
                    line-height: normal;
                    span {
                    font-weight: 700;
                    color:$green;
                }
                }
    
  
            &__btn {
                    cursor: pointer;
                    margin-top:rem(10)
                }
        
        &-2 {
            p {
                span{
                    color:$blue;
                }
            }

        }
        &-3 {
            p {
                span{
                    color:$red;
                }
            }

        }

    }
   
    &__title {
    letter-spacing: -5.34%;
    font-family: $font-redhat;
    margin:rem(40) rem(0);
    font-size: $size-32;
    font-weight: 700;
    text-transform: uppercase;
    color: $black;

 
        :nth-child(2){
            font-weight: 100;
            color: $black;
        }
        :nth-child(3){
            font-weight: 700;
            color: $red;
        }
   
        }
}


img {
    width: 100%;
    height: auto;
}

@media (min-width : 768px) {

    .section2-departement {
        padding:rem(30) rem(40);
        &__card{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
           h6 {
            font-size:$size-16;
           }
           p {
            font-size: $size-16;
           }
        }
    }
}




@media (min-width: 1024px ) {

    .section2-departement{
        &__title {
            font-size: 7.5vw;
        }
    }
    
}

@media (min-width: 1440px) {

    .section2-departement {
        padding:rem(20) rem(75);
        &__title {
            letter-spacing: -9px;
        }
        &__card{
            margin:rem(100) rem(0);
            gap: rem(100);
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            align-items: center;
           h3 {
            font-size:$size-20;
           }
           p {
            font-size: $size-16;
           }
           &-2 {
            img {
                width: 450px;
                height: auto;
            }
           }
        }

    }
}

@media screen and (min-width:1760px) {
    .section2-departement {
        &__title {
                font-size: $size-123
        }
        &__card {
            &-2 {
            img {
                width: 100%;
                height: auto;
            }
           }
        }
 
    }
}


</style>