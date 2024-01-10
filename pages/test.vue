
<script setup>
import { ref } from 'vue';

const formValues = ref({
  lastName: '',
  firstName: '',
  email: '',
  message: ''
});

const showSuccessPopup = ref(false);

const handleSubmit = async () => {
  try {
    const formData = new FormData();
    formData.append('lastName', formValues.value.lastName);
    formData.append('firstName', formValues.value.firstName);
    formData.append('email', formValues.value.email);
    formData.append('message', formValues.value.message);

    const response = await fetch('/test', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      // Réinitialiser les valeurs du formulaire après l'envoi réussi
      formValues.value = {
        lastName: '',
        firstName: '',
        email: '',
        message: ''
      };

      // Afficher le message de succès
      showSuccessPopup.value = true;

      // Masquer le message de succès après quelques secondes
      setTimeout(() => {
        showSuccessPopup.value = false;
      }, 5000);
    } else {
      console.error('Une erreur s\'est produite lors de l\'envoi du formulaire.');
    }
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la soumission du formulaire :', error);
  }
};
</script>


<template>
    <div>
      <h1>Formulaire de Contact</h1>
      <form @submit.prevent="handleSubmit" >
        <label for="lastName">Nom</label>
        <input type="text" id="lastName" name="lastName" v-model="formValues.lastName" required>
  
        <label for="firstName">Prénom</label>
        <input type="text" id="firstName" name="firstName" v-model="formValues.firstName" required>
  
        <label for="email">Email</label>
        <input type="email" id="email"  name="email" v-model="formValues.email" required>
  
        <label for="message">Message</label>
        <textarea id="message" name="message" v-model="formValues.message" required></textarea>
  
        <button type="submit">Envoyer</button>
      </form>
  
      <!-- Affichage du message de succès -->
      <div v-if="showSuccessPopup" class="success-popup">
        <p>Message envoyé avec succès !</p>
        
      </div>
    </div>
  </template>
  
  