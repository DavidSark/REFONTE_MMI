<script setup>
const { client } = usePrismic();
const { data: communication, error } = await useAsyncData('communication', () => client.getSingle("communication"));


useSeoMeta({
    title: communication.value.data.meta_title,
    description: communication.value.data.meta_description,
    ogDescription: communication.value.data.meta_description,
    ogImage: communication.value.data.meta_image.url,
    twitterCard: 'summary_large_image',
})
</script>

<template>
    <div class="section1-communication">
        <div class="section1-communication__sideleft">
            <borderSection :title="communication.data.section1[0].title" :subtitle="communication.data.section1[0].subtitle"
            color="red"  />
            <Button class="section1-communication__sideleft-btn" size="small">Candidater</Button>
        </div>
        <img src="/image-design-1.webp" alt="Etudiant">
    </div>

    <div class="section2-communication">
        <Cardparcours :image="communication.data.card[0].image.url" :title="communication.data.card[0].title" />
        <Cardparcours :image="communication.data.card[1].image.url" :title="communication.data.card[1].title" />
        <Cardparcours :image="communication.data.card[2].image.url" :title="communication.data.card[2].title" />
    </div>

    <div class="section4-communication">
        <Cardetudiants :image="communication.data.etudiants[0].image.url" :job="communication.data.etudiants[0].job"
            :name="communication.data.etudiants[0].name" :link="communication.data.etudiants[0].link.url" bgColor="bgRed"/>
        <Cardetudiants :image="communication.data.etudiants[1].image.url" :job="communication.data.etudiants[1].job"
            :name="communication.data.etudiants[1].name" :link="communication.data.etudiants[1].link.url"  bgColor="bgRed"/>
        <Cardetudiants :image="communication.data.etudiants[2].image.url" :job="communication.data.etudiants[2].job"
            :name="communication.data.etudiants[2].name" :link="communication.data.etudiants[2].link.url" bgColor="bgRed" />
    </div>
</template>

<style lang="scss">
.section1-communication {
    padding: rem(30) rem(20);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(50);

    img {
        width: rem(250);
    }

    &__sideleft {
        &-btn {
            width: rem(140);
        }
    }
}

.section2-communication {
    display: flex;
    flex-direction: column;
    gap: rem(10);
    padding: rem(30) rem(20);
}




@media (min-width : 768px) {
    .section1-communication {
        padding: rem(60) rem(40);

        img {
            width: rem(400);
        }
    }

    .section2-communication {
        padding: rem(30) rem(40);
        flex-direction: row;
    }

    .section4-communication {
        padding: rem(30) rem(40);
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    }
}



@media (min-width : 1024px) {
    .section1-communication {
        padding: rem(90) rem(40);
        flex-direction: row;
        gap: rem(50);

        img {
            width: 40%;
        }
    }

    .section4-communication {
        margin-top:rem(100);
        display: grid;
        grid-template-columns: repeat(3, 1fr);

    }

}



@media (min-width : 1440px) {
    .section1-communication {
        margin: rem(130) rem(0);
        padding: rem(30) rem(75);
        flex-direction: row;
        gap: rem(100);

        img {
            width: rem(470);
        }
    }

    .section2-communication {
        padding: rem(50) rem(75);
        gap: rem(20)
    }

    .section4-communication {
        margin-top:rem(160);

    }
}

@media(min-width : 1750px) {
    .section4-communication{
        display: none;
    }
}

</style>