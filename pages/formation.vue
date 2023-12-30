<script setup>
const { client } = usePrismic();
const { data: formation, error } = await useAsyncData('formation', () => client.getSingle("formation"));
</script>

<template>
    <div>
        <div>
            <hero></hero>
        </div>
        <div class="section1-formation">
            <div class="section1-formation__content">
                <borderSection :title="formation.data.section1[0].title"
                :subtitle="formation.data.section1[0].subtitle" ></borderSection>
            </div>
            <div class="section1-formation__parcours">
                
            </div>
        </div>

        <div class="section2-formation">
            <div class="section2-formation__content">
                <borderSection color="red" :title="formation.data.section2[0].title"
                    :subtitle="formation.data.section2[0].subtitle" ></borderSection>
            </div>
            <div class="section2-formation__parcours">
            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
.section1-formation{
    padding: rem(30) rem(20);
    display: flex;
    flex-direction: column;
    gap: rem(40);

    &__parcours{
        background-color: $black;
        width: 100%;
        height: rem(400);
    }
    
}

.section2-formation{
    padding: rem(30) rem(20);
    display: flex;
    flex-direction: column;
    gap: rem(40);
    &__parcours{
        background-color: $black;
        width: 100%;
        height: rem(150);
    }
}

@media screen and (min-width: 768px) {
    .section1-formation, .section2-formation{
    padding: rem(60) rem(40);
    }
}

@media screen and (min-width: 1024px) {
    .section2-formation{
        display: flex;
        flex-direction: row-reverse;
        gap: rem(40);
        
        &__content{
            width: 50%;
        }
        &__parcours{          
            width: 50%;
            height: initial;
        }
}
}

@media screen and (min-width: 1440px) {
    .section1-formation{
        padding: rem(120) rem(75);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        gap: rem(150);

        &__parcours{
            height: 100%;
        }
    } 

    .section2-formation{
        padding: rem(120) rem(75);
}
}
</style>