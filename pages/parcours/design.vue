<script setup>
const { client } = usePrismic();
const { data: design, error } = await useAsyncData('design', () => client.getSingle("design"));
</script>

<template>
    <div class="section1-design">
      <div class="section1-design__sideleft">
      <borderSection :title="design.data.section1[0].title"
                  :subtitle="design.data.section1[0].subtitle"
                  color="red"
                     />
      <Button class="section1-design__sideleft-btn" size="small">Candidater</Button>
      </div>
        <img src="/image-design-1.webp" alt="">
    </div>

    <div class="section2-design">
        <Cardparcours :image="design.data.card[0].image.url"
        :title="design.data.card[0].title"/>
        <Cardparcours :image="design.data.card[0].image.url"
        :title="design.data.card[0].title"/>
        <Cardparcours :image="design.data.card[0].image.url"
        :title="design.data.card[0].title"/>
        
        
    </div>
</template>

<style lang="scss">
.section1-design {
    padding:rem(30) rem(20);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:rem(50);
    &__sideleft {
        &-btn {
            width:rem(140);
        }
    }
}

.section2-design {
    display: flex;
    flex-direction: column;
    gap: rem(10);
    padding:rem(30) rem(20);
}


@media (min-width : 768px) {
    .section1-design {
        padding:rem(60) rem(40);
        img{
            width: rem(400);
        }
    }

    .section2-design{
        padding:rem(30) rem(40);
        flex-direction: row;
    }
}



@media (min-width : 1024px) {
    .section1-design {
        padding:rem(90) rem(40);
        flex-direction: row;
        gap:rem(50);
        img{
            width: 40%;
        }
    }

}



@media (min-width : 1440px) {
    .section1-design {
        margin: rem(130) rem(0);
        padding:rem(30) rem(75);
        flex-direction: row;
        gap:rem(100);
        img{
            width: rem(470);
        }
    }
    .section2-design {
        padding:rem(50) rem(75);
        gap:rem(20)

    }
}

</style>