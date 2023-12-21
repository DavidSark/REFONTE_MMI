<script setup>
const { client } = usePrismic();
const { data: contact, error } = await useAsyncData('contact', () => client.getSingle("contact"));

  const props = defineProps({
  
});

</script>

<template>
    <div class="section1-contact">
        <div class="section1-contact__side"> 
        <borderSection :title="contact.data.section1[0].title"
                  :subtitle="contact.data.section1[0].subtitle"
                     />
        <Button class="sectionB-sideleft__btn" size="small">En savoir plus</Button>
        </div>
        <div class="section1-contact__info">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.714464850608!2d6.802704075879118!3d47.495475595645296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4792172655793f9f%3A0x1b3b0f76560084ad!2sD%C3%A9partement%20MMI%20de%20Montb%C3%A9liard!5e0!3m2!1sfr!2sfr!4v1703111614273!5m2!1sfr!2sfr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
            <h5><span class="circle"></span>Où nous retrouver</h5>
            <h6>4 place Tharradin</h6>
            <h6>25200 Montbéliard</h6>
            <h6>tél : +33 (0)3 81 99 47 34</h6>
            <h6>Mail : [...]</h6>
            <div class="section1-contact__info-socials">
                <a href="https://www.facebook.com/mmimontbeliard" target="_blank"><img src="/icons/icon-facebook.svg" alt="facebook"></a>
        <a href="https://www.instagram.com/mmi_montbeliard" target="_blank"><img src="/icons/icon-instagram.svg" alt="instagram"></a>
        <a href="https://www.linkedin.com/school/mmimontbeliard" target="_blank"><img src="/icons/icon-linkedin.svg" alt="linkedin"></a>

            </div>
        </div>
    </div>
    <div class="section2-contact">
        <img src="/image9.webp" alt="">
        <img src="/image13.webp" alt="">
    </div>
    <div class="section3-contact">
        <div class="section3-contact_content">
            <PrismicRichText class="section3-contact__content-tagline" :field="contact.data.section3[0].tagline"></PrismicRichText>
            <PrismicRichText class="section3-contact__content-title" :field="contact.data.section3[0].title"></PrismicRichText>
        </div>
    </div>
    <div class="section4-contact">
        <cardcontact></cardcontact>
    </div>
    <div class="section5-contact">
        <Formcontact></Formcontact>
        <img src="/image-contact.webp" alt="">

    </div>
    <Footer></Footer>

</template>

<style lang="scss">
.section1-contact {
    padding:rem(30) rem(20);
    gap:rem(40);
    display: flex;
    flex-direction: column;
    &__info {
        iframe{
            width: 100%;
        }
    &-socials {
        display: flex;
        justify-content: flex-end;
        gap:rem(20);
        img {
            width: rem(30);
        }
    }
    h6{
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
    .circle {
        width: 50px;
        height: 50px;
        background-color: red;
    }
    }
}

.section2-contact {
    display: flex;
    flex-direction: column;
    gap:rem(3);
    img {
        width: 100%;
    }
}

.section3-contact {
    padding:rem(30) rem(20);
    &__content {
        &-tagline {
            font-family: $font-poppins;
            font-size: $size-10;
            text-transform: uppercase;
            text-align: right;
            margin-bottom: rem(15);
        }
        &-title {
            font-family: $font-redhat;
            text-transform: uppercase;
            font-size: $size-32;
            text-align: right;
            letter-spacing: -1.17px;
            strong {
                font-weight: 700;
            }
        }
    }

}

.section5-contact {
    display: flex;
    flex-direction: column-reverse;;
    img{
        width: 100%;
    }
}

@media (min-width : 768px) {
    .section1-contact {
        padding:rem(30) rem(40);
    &__info {
    h6 {
        font-size:$size-16
    }
    }
    }

    .section2-contact {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap:rem(10);
    }

    .section3-contact {
        padding:rem(30) rem(40);
        &__content {
            &-tagline {
                font-size: $size-13;
            }
        }
    }
}

@media (min-width: 1024px) {
    .section3-contact{
        &__content {
            &-title {
                font-size:$size-43;
            }
        }
    }
}


@media (min-width: 1440px) {
    .section1-contact {
        padding:rem(120) rem(75);
        display: grid;
        grid-template-columns: repeat(2,1fr);
        align-items: center;
        gap: rem(150);
        &__info {
            &-socials {
                justify-content: flex-start;
                margin:rem(20) rem(0);
            }
        }
        
    }
    .section3-contact {
        padding:rem(100) rem(75);
        &__content {
            &-tagline {
                font-size: $size-24 ;
                margin-bottom: rem(25);
            }
            &-title {
                font-size: $size-90;
                padding-left: rem(100);
            } 
        }
    }

}
</style>