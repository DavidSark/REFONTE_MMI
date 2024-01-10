<script setup>
const { client } = usePrismic();
const { data: contact, error } = await useAsyncData('contact', () => client.getSingle("contact"));

  const props = defineProps({
  
});

</script>

<template>
<div class="form-contact">  
  <div class="form-contact__mmi">
    <img src="/icons/icon-mmi.svg" alt="">
          <div class="square"></div>
    <p>Contactez-nous</p>

  </div>
  <form class="form-contact__form" id="contactForm" action="http://localhost:3001/contact" method="POST">
  <div class="form-contact__input">
    <label for="nom">Prénom & NOM</label>
    <input type="text" id="nom" name="nom" required placeholder="Prénom & NOM...">
  </div>
  <div class="form-contact__input">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required  placeholder="youremail@gmail.com....">
  </div>
  <div class="form-contact__input">
    <label for="message">Message</label>
    <input type="text" id="message" name="message" required  placeholder="Votre message...">
  </div>
  <input class="form-contact__submit" type="submit" value="Envoyer">
</form>
  <div class="form-contact__info">
    
    <!-- <Button class="form-contact__info-btn" size="small" color="white" bgColor="bgBlue" borderColor="borderBlue" >Envoyer</Button> -->
    

  </div>

</div>

</template>

<style lang="scss" scoped>



.square {
  width: rem(9);
  height: rem(15);
  background-color: black;
}


.form-contact {
  padding:rem(25);
  border: 1px solid $white-soft;
  &__mmi {
    display: flex;
    flex-direction: row;
    align-items:center;

    font-family: $font-redhat;
    text-transform: uppercase;
    font-weight:700;
    gap:rem(5);
    img{
      width:rem(25) ;
    }
  }
  &__submit {
    border-radius: rem(30);
    padding: rem(8) rem(25);
    font-size: rem(14);
    border: none;
    text-align: center;
    text-transform: uppercase;
    font-family: $font-poppins;
    margin-top: rem(30);
    margin-bottom: rem(30);
    background-color: $blue;
    border : 1px solid $blue;
    color:$white;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
    border: 1px solid $blue;
    background-color: white;
    color: $blue; 
  }
 
  }

  &__info {
    img{
      display: none;
    }

    &-btn {
      margin-left:0;
      margin-right:rem(15);
       cursor: pointer;
      font-size:$size-12;
      width: rem(100);
    }
  }
  gap:rem(40);
  ::placeholder {
      font-family: $font-poppins;
      color: $gray-soft;
    }
  display: flex;
  flex-direction: column;

  font-family: $font-poppins;
  font-size: $size-12;
  label {
    font-size: $size-12;
    font-weight: 500;
    margin-bottom: rem(5);
    margin-top:rem(20);
  }
  &__input {
    margin-bottom:rem(20);


  input {

    font-size: $size-12;
    border: none;
    border-bottom: 1px solid $white-soft;
    padding-bottom: rem(6);
    padding-top: rem(15);

  &:focus {
    outline: none;
  }
}

  }
  &__input {
    display: flex;
    flex-direction: column;
  }

}

@media (min-width : 768px ) {
  .form-contact {
    margin: rem(0);
    padding:rem(35);

  }
}

@media (min-width : 1024px) {
  .square {
  width: rem(15);
  height: rem(25);
  background-color: black;
}
  .form-contact{
    padding:rem(45);

    &__mmi {
      font-size: $size-33;
      img {
        width: rem(40);
        margin-right: rem(10);
      }
    }
    &__info {
      display: flex;

    &-btn {
    font-size:$size-14;
    width: rem(110);
    }
    }
    label {
    font-size: $size-16;
  }
  input {
    font-size: $size-14;
  }
  }
}

@media (min-width : 1440px ) {
  .form-contact{
    padding: rem(80) rem(75);
    gap:rem(60);

    &__mmi {
      font-size: $size-33;
      img {
        width: rem(40);
        margin-right: rem(10);
      }
    }
    &__info {
      display: flex;
      flex-direction: row;
      align-items: center ;
      img{
        display: flex;
        cursor: pointer;
       
        width: rem(50);
      }
      input {
        cursor: pointer;
        display: flex;
        font-weight: 500;
        color: $gray-black;
        font-size: $size-16;
      }
      gap:rem(20);
   


    &-btn {
    font-size:$size-14;
    width: rem(120);
   
    }
    }
    label {
    font-size: $size-16;
  }
  &__input {
    margin-bottom:rem(40);

  input {
    font-size: $size-16;
  }
  }
}

}

</style>