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
    align-items: center;

    font-family: $font-redhat;
    text-transform: uppercase;
    font-weight:700;
    gap:rem(5);
    span {
      width: rem(20);
      border: 1px solid red;
    }
    img{
      width:rem(25) ;
    }
  }
  &__info {

    &-btn {
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
  }
  input {
    font-size: $size-12;
    border: none;
    border-bottom: 1px solid $white-soft;
    padding-bottom: rem(6);
    padding-top: rem(15);
  

  }
  &__input {
    display: flex;
    flex-direction: column;
  }

}

</style>