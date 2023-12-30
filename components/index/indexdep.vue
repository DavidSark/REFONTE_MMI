<script setup>

</script>

<template>
    <div class="section-indexdep">
        <div class="section-indexdep__text">
            <h2>Le département<span>.</span></h2>
            <p>Un environnement propice <span>au développement des étudiants.</span></p>
        </div>

        <div class="section-indexdep__button">
            <Button size="small">découvrir</Button>
            <Button>découvrir</Button>
        </div>

        <div class="section-indexdep__image">
            <img src="mmi_ellipse.webp" alt="">
            <img src="mmi_ellipse.webp" alt="">
            <img src="mmi_ellipse.webp" alt="">
            <div class="section-indexdep__blackellipse"></div>
        </div>
        <div class="section-indexdep__blackellipse2"></div>
    </div>
</template>

<style lang="scss" scoped>
.section-indexdep {
    position: relative;

    &__image {
        display: flex;
        align-items: center;
        height: 50%;
        justify-content: flex-end;
        position: relative;

        :nth-child(2),
        :nth-child(3) {
            display: none;
        }
    }

    &__blackellipse {
        position: absolute;
        width: 200px;
        height: 100px;
        border-radius: 100px 100px 0 0;
        background-color: $black;
        overflow: hidden;
        position: absolute;
        transform: rotate(-90deg);
        top: 40px;
        right: -70px;
        z-index: -1;
    }

    &__text {
        font-family: $font-poppins;
        text-transform: uppercase;
        margin-bottom: rem(15);

        h2 {
            font-size: $size-39;
            font-weight: 700;
            margin-bottom: rem(15);

            span {
                color: $blue;
            }
        }

        p {
            font-size: $size-24;
        }

        span {
            font-weight: 700;
        }
    }

    &__button {
        :nth-child(2) {
            display: none;
        }
    }
}


@media screen and (min-width:480px) {
    .section-indexdep {
        &__text {
            h2 {
                //font-size: $size-24;
            }

            p {
                // font-size: $size-16;
                max-width: rem(500);
            }

            ;
        }

        &__image {
            gap: 30px;

            :nth-child(2) {
                display: block;
            }
        }
    }
}

@media screen and (min-width:768px) {
    .section-indexdep {
        &__text {
            h2 {
                // font-size: $size-32;
            }

            p {
                max-width: rem(600);
                font-size: $size-32;
            }

            ;
        }

        &__blackellipse {
            right: -90px;
        }
    }
}

@media screen and (min-width: 1024px) {
    .section-indexdep {
        &__text {
            h2 {
                font-size: 7.5vw;
                margin-bottom: rem(40);
            }

            p {
                max-width: initial;
                font-size: 4vw;
            }
        }

        &__blackellipse {
            display: none;
        }

        &__blackellipse2 {
            position: absolute;
            width: 402.5px;
            height: 201.25px;
            border-radius: 500px 500px 0 0;
            background-color: $black;
            overflow: hidden;
            position: absolute;
            transform: rotate(-90deg);
            top: 100px;
            right: -140px;
            z-index: -1;
        }
    }
}

@media screen and (min-width: 1440px) {
    .section-indexdep {
        h2 {
            margin-bottom: rem(60);
        }

        &__button {
            :nth-child(1) {
                display: none;
            }

            :nth-child(2) {
                display: block;
            }
        }

        &__image {
            gap: 70px;

            :nth-child(3) {
                display: block;
            }
        }

        &__blackellipse2 {
            position: absolute;
            width: 40vw;
            height: 20vw;
            border-radius: 500px 500px 0 0;
            background-color: $black;
            overflow: hidden;
            position: absolute;
            transform: rotate(-90deg);
            top: 20vh;
            right: -14.9vw;
            z-index: -1;
        }
    }
}

@media screen and (min-width:1760px) {
    .section-indexdep {
        &__text {
            h2 {
                font-size: $size-123
            }

            p {
                font-size: $size-75
            }

            ;
        }
    }
}
</style>