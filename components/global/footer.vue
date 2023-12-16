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
            <RouterLink to="/mentions-legales"><p>Mentions légales</p></RouterLink>
            <div></div>
            <RouterLink to="/confidentialite"><p>Confidentialité</p></RouterLink>
        </div>
        <div class="footer-icons">
        <a href="https://www.facebook.com/mmimontbeliard" target="_blank"><img src="/icons/icon-facebook.svg" alt="facebook"></a>
        <a href="https://www.instagram.com/mmi_montbeliard" target="_blank"><img src="/icons/icon-instagram.svg" alt="instagram"></a>
        <a href="https://www.linkedin.com/school/mmimontbeliard" target="_blank"><img src="/icons/icon-linkedin.svg" alt="linkedin"></a>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.footer {
    padding: rem(25) 0;
    border-top :2px solid $white-soft;
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
            margin-bottom: rem(10);
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

//media queries
@media (min-width: 1440px) {
.footer {
    &-links {
        font-size: $size-13;
        margin-bottom:rem(30);      
    }

    &-subtitles {
        font-size: $size-26;
        img {
            width: rem(45);
            margin-bottom: rem(15);
        }
        :nth-child(3) {
            font-size: $size-16;
        }
    }
    &-icons { 
        img {
            width: rem(30);
        }
    }

}

}

</style>