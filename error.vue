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
    <Header :elements="home.data.header"></Header>
    <hero></hero>
  
  </div>
</template>