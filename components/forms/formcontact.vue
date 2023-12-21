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
  <div class="form-contact__input">
    <label for="prenom">Prénom & NOM</label>
    <input type="text" name="prenom"  required placeholder="Prénom & NOM...">
  </div>
  <div class="form-contact__input">
    <label for="prenom">Email</label>
    <input type="text" name="prenom" required  placeholder="youremail@gmail.com....">
  </div>
  <div class="form-contact__input">
    <label for="prenom">Message</label>
    <input type="text" name="prenom" required  placeholder="Votre message...">
  </div>
  <div class="form-contact__info">
    <Button  class="form-contact__info-btn" size="small" color="white" bgColor="bgBlue" borderColor="borderBlue" >Envoyer</Button>
    <img src="/icons/icon-cloud.svg" alt="">
    <input type="file" accept=".pdf, .doc, .docx"  id="fileUpload" name="fileUpload">
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

  margin:rem(20);
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
  &__info {
    img{
      display: none;
    }


    &-btn {
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
  }
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
  input {
    font-size: $size-14;
  }
  }

}

</style>