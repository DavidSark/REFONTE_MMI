<script setup>
const { client } = usePrismic();
const { data: developpement, error } = await useAsyncData('developpement', () => client.getSingle("developpement"));

useSeoMeta({
    title: developpement.value.data.meta_title,
    description: developpement.value.data.meta_description,
    ogDescription: developpement.value.data.meta_description,
    ogImage: developpement.value.data.meta_image.url,
    twitterCard:'summary_large_image',
})

</script>

<template>
    <div class="section1-developpement">
      <div class="section1-developpement__sideleft">
      <borderSection :title="developpement.data.section1[0].title"
                  :subtitle="developpement.data.section1[0].subtitle"
                  
                     />
      <Button class="section1-developpement__sideleft-btn" size="small">Candidater</Button>
      </div>
        <img src="/image-design-1.webp" alt="">
    </div>

    <div class="section2-developpement">
        <Cardparcours :image="developpement.data.card[0].image.url"
        :title="developpement.data.card[0].title"/>
        <Cardparcours :image="developpement.data.card[2].image.url"
        :title="developpement.data.card[2].title"/>
        <Cardparcours :image="developpement.data.card[1].image.url"
        :title="developpement.data.card[1].title"/>
    </div>

    <!-- <div class="section4-developpement">
        <Cardetudiants :image="developpement.data.etudiants[0].image.url"
        :job="developpement.data.etudiants[0].job"
        :name="developpement.data.etudiants[0].name"
        :link="developpement.data.etudiants[0].link.url"/>

    </div> -->
</template>

<style lang="scss">
.section1-developpement {
    padding:rem(30) rem(20);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:rem(50);
    img {
        width: rem(250);
    }
    &__sideleft {
        &-btn {
            width:rem(140);
        }
    }
}

.section2-developpement {
    display: flex;
    flex-direction: column;
    gap: rem(10);
    padding:rem(30) rem(20);
}




@media (min-width : 768px) {
    .section1-developpement {
        padding:rem(60) rem(40);
        img{
            width: rem(400);
        }
    }

    .section2-developpement{
        padding:rem(30) rem(40);
        flex-direction: row;
    }
}



@media (min-width : 1024px) {
    .section1-developpement {
        padding:rem(90) rem(40);
        flex-direction: row;
        gap:rem(50);
        img{
            width: 40%;
        }
    }

}



@media (min-width : 1440px) {
    .section1-developpement {
        margin: rem(130) rem(0);
        padding:rem(30) rem(75);
        flex-direction: row;
        gap:rem(100);
        img{
            width: rem(470);
        }
    }
    .section2-developpement {
        padding:rem(50) rem(75);
        gap:rem(20)

    }
}

</style>