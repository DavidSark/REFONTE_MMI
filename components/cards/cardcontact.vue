<script setup>
const { client } = usePrismic();
const { data: contact, error } = await useAsyncData('contact', () => client.getSingle("contact"));

const props = defineProps({
});


</script>

<template>
    <div class="cardcontact">
        <div class="cardcontact-jpo">
            <div class="cardcontact-jpo__borderT">
                <PrismicRichText class="cardcontact-jpo__borderT-date" :field="contact.data.jpo[0].date"></PrismicRichText>
            </div>
            <div class="cardcontact-jpo__borderS">
                <PrismicRichText class="cardcontact-jpo__borderS-subtitle" :field="contact.data.jpo[0].subtitle">
                </PrismicRichText>
                <PrismicRichText class="cardcontact-jpo__borderS-description" :field="contact.data.jpo[0].description">
                </PrismicRichText>

            </div>
            <Button class="sectionB-sideleft__btn" borderColor="borderBlue" color="blue" size="small">consulter</Button>
        </div>

        <div class="cardcontact-superieur">
            <div class="cardcontact-superieur__borderT">
                <PrismicRichText class="cardcontact-superieur__borderT-date" :field="contact.data.superieur[0].date">
                </PrismicRichText>
            </div>
            <div class="cardcontact-superieur__borderS">
                <PrismicRichText class="cardcontact-superieur__borderS-subtitle"
                    :field="contact.data.superieur[0].subtitle"></PrismicRichText>
                <PrismicRichText class="cardcontact-superieur__borderS-description"
                    :field="contact.data.superieur[0].description"></PrismicRichText>
            </div>
        </div>

        <div class="cardcontact-diplomes">
            <div class="cardcontact-diplomes__borderT">
                <PrismicRichText class="cardcontact-diplomes__borderT-date" :field="contact.data.diplomes[0].date">
                </PrismicRichText>
            </div>
            <div class="cardcontact-diplomes__borderS">
                <PrismicRichText class="cardcontact-diplomes__borderS-subtitle" :field="contact.data.diplomes[0].subtitle">
                </PrismicRichText>
                <PrismicRichText class="cardcontact-diplomes__borderS-description"
                    :field="contact.data.diplomes[0].description"></PrismicRichText>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.sectionB-sideleft__btn {
    width: rem(150);
}

.cardcontact {
    padding: rem(20);

    &-diplomes {
        padding-top: rem(40);
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        &__borderT {
            display: flex;
            align-items: flex-end;
            gap: rem(5);

            span {
                color: $red;
            }

            @include borderColorTitle;

            border-left: none;
            border-right: 10px solid $red;
            padding: rem(10);
            justify-content: flex-end;
            text-align: right;

            &-date {
                font-family: $font-redhat;
                font-size: $size-32;
                font-weight: 700;
                text-transform: uppercase;

                strong {
                    color: $red;
                }
            }
        }

        &__borderS {
            @include borderColorSubtitle;
            border-left: none;
            border-right: 3px solid $white-soft;
            padding: rem(20);
            text-align: right;

            strong {
                font-weight: 700;
                color: $red;
            }

            &-subtitle {
                text-transform: uppercase;
                font-size: $size-13;
                font-family: $font-poppins;
                font-weight: 300;
                margin-bottom: rem(15);
            }

            &-description {
                font-size: $size-13;
                font-family: $font-poppins;
                font-weight: 300;
                line-height: normal;
                font-size: $size-13;
            }
        }



    }

    &-superieur {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &__borderT {
            gap: rem(5);

            span {
                color: $green;
            }

            @include borderColorTitle;
            border-color : $green;

            &-date {
                font-family: $font-redhat;
                font-size: $size-32;
                font-weight: 700;
                text-transform: uppercase;

                strong {
                    color: $green;
                }
            }
        }

        &__borderS {
            @include borderColorSubtitle;

            strong {
                font-weight: 700;
                color: $green;
            }

            &-subtitle {
                text-transform: uppercase;
                font-size: $size-13;
                font-family: $font-poppins;
                font-weight: 300;
                margin-bottom: rem(15);
            }

            &-description {
                font-size: $size-13;
                font-family: $font-poppins;
                font-weight: 300;
                line-height: normal;
                font-size: $size-13;
            }

        }
    }



    &-jpo {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        &__borderT {
            display: flex;
            align-items: flex-end;
            gap: rem(5);

            span {
                color: $blue;
            }

            @include borderColorTitle;

            border-left: none;
            border-right: 10px solid $blue;
            padding: rem(10);
            justify-content: flex-end;
            text-align: right;

            &-date {
                font-family: $font-redhat;
                font-size: $size-32;
                font-weight: 700;
                text-transform: uppercase;

                strong {
                    color: $blue;
                }
            }
        }

        &__borderS {
            @include borderColorSubtitle;
            border-left: none;
            border-right: 3px solid $white-soft;
            padding: rem(20);
            text-align: right;

            strong {
                font-weight: 700;
                color: $blue;
            }

            &-subtitle {
                text-transform: uppercase;
                font-size: $size-13;
                font-family: $font-poppins;
                font-weight: 300;
                margin-bottom: rem(15);
            }

            &-description {
                font-size: $size-13;
                font-family: $font-poppins;
                font-weight: 300;
                line-height: normal;
                font-size: $size-13;
            }
        }
    }

}

@media (min-width : 768px) {
    .cardcontact {
        padding: rem(0) rem(40);

        &-jpo {
            &__borderS {
                &-subtitle {
                    font-size: $size-16;
                }

                &-description {
                    font-size: $size-16;
                }
            }
        }

        &-superieur {
            &__borderS {
                &-subtitle {
                    font-size: $size-16;
                }

                &-description {
                    font-size: $size-16;
                }
            }
        }

        &-diplomes {
            &__borderS {
                &-subtitle {
                    font-size: $size-16;
                }

                &-description {
                    font-size: $size-16;
                }
            }
        }
    }
}

@media(min-width : 1024px) {
    .cardcontact {
        padding: rem(50) rem(40);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: rem(90);

        &-jpo {
            &__borderT {
                &-date {
                    font-size: $size-45;
                }
            }
        }

        &-superieur {
            margin-top: rem(90);
            align-items: flex-end;

            &__borderT {

                display: flex;
                align-items: flex-end;

                &-date {
                    font-size: $size-45;
                }

                border-left: none;
                border-right: 10px solid $green;
                padding: rem(10);
                justify-content: flex-end;
                text-align: right;
            }

            &__borderS {
                border-left: none;
                border-right: 3px solid $white-soft;

                justify-content: flex-end;
                text-align: right;
            }
        }

        &-diplomes {
            margin-top: rem(190);

            padding-top: rem(0);

            &__borderT {
                &-date {
                    font-size: $size-45;
                }
            }
        }
    }
}

@media (min-width : 1440px) {
    .cardcontact {
        gap: rem(100);
        padding: rem(70) rem(75);

        &-jpo {
            &__borderT {
                @include borderColorTitle;
                border: none;
                border-right: 15px solid $blue;

                &-date {
                    font-size: $size-75;
                }
            }
        }

        &-superieur {
            &__borderT {
                @include borderColorTitle;
                border-left: none;
                border-right: 15px solid $green;
                padding: rem(10);
                justify-content: flex-end;
                text-align: right;

                &-date {
                    font-size: $size-75;
                }
            }
        }

        &-diplomes {
            &__borderT {
                @include borderColorTitle;
                border: none;
                border-right: 15px solid $red;

                &-date {
                    font-size: $size-75;
                }

            }
        }
    }
}
</style>