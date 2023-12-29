<script setup>
const { client } = usePrismic();
const { data: faq, error } = await useAsyncData('faq', () => client.getSingle("faq"));

// const props = defineProps({
//     // question: Array,
//     // reponse: Array,
//     tabs: Array,

// });

</script>

<template>
    <div class="row" >
        <div class="col" >
            <div class="tabs" >
                <!-- <div class="tab" v-for="item in tabs">
                    <input type="checkbox" id="chck1">
                    <label class="tab-label" for="chck1">    <PrismicRichText :field="item.question"></PrismicRichText></label>
                    <div class="tab-content">
                    <PrismicRichText :field="item.reponse"></PrismicRichText>
                    </div>
                </div> -->
                <div class="tab">
                    <input type="checkbox" id="chck1">
                    <label class="tab-label" for="chck1">Comment s'inscrire à la formation pour les nouveaux étudiants? </label>
                    <div class="tab-content">
                        Au BUT MMI de Montbéliard, l'inscription se fait via Parcoursup, où les candidats peuvent mettre en avant leurs compétences pour être potentiellement sélectionnés. 
                    </div>
                </div>
                <div class="tab">
                    <input type="checkbox" id="chck2">
                    <label class="tab-label" for="chck2">Quels sont les parcours offerts dans la formation ?</label>
                    <div class="tab-content">
                        Les parcours sont Communication, Design et Développement Web, chacun ciblant des compétences spécifiques liées aux métiers du multimédia. 
                    </div>
                </div>
                <div class="tab">
                    <input type="checkbox" id="chck3">
                    <label class="tab-label" for="chck3">Quand se déroule les portes ouvertes ?</label>
                    <div class="tab-content">
                        La journée portes ouvertes vise à permettre aux visiteurs de découvrir les locaux, d'échanger avec les étudiants et les enseignants pour mieux appréhender le programme. Cette année, les portes ouvertes se dérouleront le 27 janvier 2024. 
                    </div>
                </div>
                <div class="tab">
                    <input type="checkbox" id="chck4">
                    <label class="tab-label" for="chck4">Options d'alternance disponibles pour les étudiants ?</label>
                    <div class="tab-content">
                        Les étudiants peuvent signer un contrat d'alternance de la deuxième année (ou troisième) jusqu'à la fin de la formation, leur permettant de combiner études et expérience en entreprise.
                    </div>
                </div>
                <div class="tab">
                    <input type="checkbox" id="chck5">
                    <label class="tab-label" for="chck5">Quelle est la durée des stages obligatoires ?</label>
                    <div class="tab-content">
                        Les stages obligatoires durent 10 semaines en 2ème année et 16 semaines en 3ème année, se déroulant généralement de mars à juin pour la 2ème année et février à juin pour la 3ème année.
                    </div>
                </div>
                <div class="tab">
                    <input type="checkbox" id="chck6">
                    <label class="tab-label" for="chck6">Est-il possible d'étudier à l'internationale ?</label>
                    <div class="tab-content">
                        Les étudiants ont l'opportunité de réaliser des stages ou des alternances à l'étranger, offrant une chance de renforcer leurs compétences linguistiques et techniques dans le domaine du numérique. Ils peuvent également passer leur 1er semestre de 2ème année avec deux CEGEPs canadiens partenaires.
                    </div>
                </div>
                <div class="tab">
                    <input type="checkbox" id="chck7">
                    <label class="tab-label" for="chck7">Peut-on intégrer la formation sans connaissances en programmation ?</label>
                    <div class="tab-content">
                        Oui, la formation MMI ne requiert pas de connaissances préalables en codage. Vous apprendrez à zéro dès la 1ère année de formation.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
input {
    position: absolute;
    opacity: 0;
    z-index: -1;
}

// Layout
.row {
    display: flex;
    .col {
        flex: 1;
    }
}

/* Accordion styles */
.tabs {
    overflow: hidden;
}

.tab {
    margin-top: rem(10);
    border-bottom: 2px solid $white-soft;
    width: 100%;
    overflow: hidden;

    &-label {
        display: flex;
        justify-content: space-between;
        padding: 1em 0;
        color: $black;
        font-weight: 700;
        font-family: $font-redhat;
        font-size: $size-14;
        text-transform: uppercase;
        cursor: pointer;
        /* Icon */

        &::after {
            content: "\002B";
            font-weight: bold;
            width: 1em;
            height: 1em;
            text-align: center;
            transition: all .35s;
        }
    }

    &-content {
        max-height: 0;
        padding: 0;
        color: $black;
        font-family: $font-poppins;
        font-size: $size-13;
        line-height: normal;
        transition: all .55s;
    }

    &-close {
        display: flex;
        justify-content: flex-end;
        padding: 1em;
        font-size: 0.75em;
        cursor: pointer;

    }
}

// :checked
input:checked {
    +.tab-label {
        &::after {
            content: "\2212";
            transform: rotate(180deg);
        }
    }

    ~.tab-content {
        max-height: 15vh;
        padding: 1em 0;
    }
}


@media (min-width: 768px) {
    .tab {
        &-label {
            font-size:$size-19;
        }
        &-content {
            font-size: $size-16;

        }
    }
}
</style>