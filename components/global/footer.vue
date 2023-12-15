<script setup>

</script>

<template>
    <div class="footer">
        <div class="footer-subtitles">
            <img src="/icons/icon-mmi.svg" alt="">
            <h2>Mmi montbéliard</h2>
            <h2>Métiers du multimédia et de l'internet</h2>
        </div>
        <div class="footer-links">
            <RouterLink to="mentions-legales"><p>Mentions légales</p></RouterLink>
            <div></div>
            <RouterLink to="/confidentialite"><p>Confidentialité</p></RouterLink>
        </div>
        <div class="footer-icons">
        <img src="/icons/icon-facebook.svg" alt="facebook">
        <img src="/icons/icon-instagram.svg" alt="instagram">
        <img src="/icons/icon-linkedin.svg" alt="linkedin">
        </div>
    </div>

</template>

<style lang="scss" scoped>

.footer {
    &-links {
        font-weight: 300;
        font-family: $font-poppins;
        font-size: $size-12;
        text-transform: uppercase;
        display: flex;
        gap:rem(10);
        justify-content: center;
        margin-bottom:rem(30);
        a {
        text-decoration-line: underline;
        color: $gray-soft;
        }
        :nth-child(2) {
            background: $gray-soft;
            width: rem(1);
            height: rem(13);
          }
       
    }

    &-subtitles {
        text-transform: uppercase;
        font-family: $font-redhat;
        font-weight: 700;
        font-size: $size-21;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:rem(5);
        margin-bottom: rem(20);
        
        
        img {
            width: rem(37);
        }
        :nth-child(3) {
            font-family: $font-poppins;
            font-weight: 300;
            font-size: $size-13;
        }
    }
    &-icons {
        display: flex;
        justify-content: center;
        gap: rem(20);
        
        img {
            width: rem(30);
        }
    }
}

</style>