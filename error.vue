<script setup>
const { client } = usePrismic();
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))

useSeoMeta({
  title: 'Page 404 - MMI Montbéliard',
  ogTitle: 'Page 404 - MMI Montbéliard',
  description: `Oups, la page que vous recherchez est introuvable. Retournez à la page d'accueil pour explorer nos contenus ou contactez-nous pour toute assistance.`,
  ogDescription: `Oups, la page que vous recherchez est introuvable. Retournez à la page d'accueil pour explorer nos contenus ou contactez-nous pour toute assistance.`,
  ogImage: '/mmimontbeliard.webp',
  twitterCard: 'summary_large_image',
})
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/404' })
</script>

<template>
  <div>
    <div class="container">
     
      <div class="e404">
        Erreur 404
      </div>


      <div class="container_text">
        <h3>
          Il semblerait que vous soyez perdu...
        </h3>
        <RouterLink to="/">
          <Button size="small" class="button">Retour à l'accueil</Button>
        </RouterLink>
      </div>

    </div>

  </div>
</template>


<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: rem(20);
  font-size: 5vw;
  font-family: $font-poppins;
  height: 100vh;
  .e404{
  font-weight: 700;
  font-size: 8vw;
  }

  &_text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
}

@media screen and (min-width: 1024px) {
    .container{
      .e404{
        font-size: rem(82);
      }

      &_text{
        font-size: rem(51)
      }
    }
}
</style>