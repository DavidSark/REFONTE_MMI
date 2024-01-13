<script setup>

</script>

<template>
    <div class="cardgooglemap__info">
        <iframe title="Map MMI Montbéliard"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.714464850608!2d6.802704075879118!3d47.495475595645296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4792172655793f9f%3A0x1b3b0f76560084ad!2sD%C3%A9partement%20MMI%20de%20Montb%C3%A9liard!5e0!3m2!1sfr!2sfr!4v1703111614273!5m2!1sfr!2sfr"
            width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        <h2><span class="circle"></span>Où nous retrouver</h2>
        <h6>4 place Tharradin</h6>
        <h6>25200 Montbéliard</h6>
        <h6>tél : +33 (0)3 81 99 47 34</h6>
        <h6>Mail : [...]</h6>
        <div class="cardgooglemap__info-socials">
            <a href="https://www.facebook.com/mmimontbeliard" target="_blank"><img src="/icons/icon-facebook.svg"
                    alt="facebook"></a>
            <a href="https://www.instagram.com/mmi_montbeliard" target="_blank"><img src="/icons/icon-instagram.svg"
                    alt="instagram"></a>
            <a href="https://www.linkedin.com/school/mmimontbeliard" target="_blank"><img src="/icons/icon-linkedin.svg"
                    alt="linkedin"></a>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.cardgooglemap {

    &__info {

        iframe {
            width: 100%;
        }

        &-socials {
            display: flex;
            justify-content: flex-end;
            gap: rem(20);

            img {
                width: rem(30);
            }
        }

        h6 {
            font-family: $font-poppins;
            text-transform: uppercase;
            font-weight: 300;
            font-size: $size-13;
            margin-bottom: rem(6)
        }

        h5 {
            margin-bottom: rem(15);
            margin-top: rem(20);
            font-family: $font-redhat;
            font-size: $size-20;
            text-transform: uppercase;
            font-weight: 700;
        }
    }
}


@media (min-width: 768px) {
    .cardgooglemap {
        padding: rem(30) rem(40);

        &__info {
            h6 {
                font-size: $size-16
            }
        }
    }
}

@media (min-width : 1440px) {
    .cardgooglemap {
        &__info {
            &-socials {
                justify-content: flex-start;
                margin: rem(20) rem(0);
            }
        }
    }
}</style>