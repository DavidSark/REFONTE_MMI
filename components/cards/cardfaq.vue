<script setup>
const { client } = usePrismic();
const { data: faq, error } = await useAsyncData('faq', () => client.getSingle("faq"));

const props = defineProps({
    // question: Array,
    // reponse: Array,
    tabs: Array,

});

</script>

<template>
    <div class="row" >
        <div class="col" >
            <div class="tabs" >
                <div class="tab" v-for="item in tabs">
                    <input type="checkbox" id="chck1">
                    <label class="tab-label" for="chck1">    <PrismicRichText :field="item.question"></PrismicRichText></label>
                    <div class="tab-content">
                    <PrismicRichText :field="item.reponse"></PrismicRichText>
                    </div>
                </div>
                <!-- <div class="tab">
                    <input type="checkbox" id="chck2">
                    <label class="tab-label" for="chck2">Item 2</label>
                    <div class="tab-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                    </div>
                </div> -->
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