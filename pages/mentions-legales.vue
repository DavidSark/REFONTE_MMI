<script setup>
  const { client } = usePrismic();
  const { data: mentions, error } = await useAsyncData('mentions', () => client.getSingle("mentions"));

</script>

<template>
  <div class="container">
  <div class="section1-mentions">
    <div class="section1-mentions__sideleft">
      <borderSection :title="mentions.data.section1[0].titre"
                  :subtitle="mentions.data.section1[0].soustitre"
                     />
    </div>
    <div class="section1-mentions__slider">
      <img src="/luka-jevremovic.webp" alt="">
      <p>Luka <span>Jevremovic</span></p>
      <img src="/icons/icon-linkedin.svg" alt="">
    </div>
    <div class="section1-mentions__slider">
      <img src="/justine-duval.webp" alt="">
      <p>Justine <span>Duval</span></p>
      <img src="/icons/icon-linkedin.svg" alt="">
    </div>
  </div>
  <div class="section2-mentions">
    <div class="section2-mentions__sideleft">
      <div class="section2-mentions__sideleft-borderT">
      <PrismicRichText :field="mentions.data.section2[0].titre" class="section2-mentions__sideleft-borderT__title"></PrismicRichText>
      </div>
      <div class="section2-mentions__sideleft-borderS">
        <div class="section2-mentions__sideleft-borderS__c1">
        <p>Coordonnées</p>
        <p>Département MMI de Montbéliard Adresse : 4 Pl. Lucien Tharradin, 25200 Montbéliard<br>
        Téléphone : 03 81 99 47 34<br>
        Email : [Adresse e-mail]<br></p>
        <p>Directeur de la publication</p>
        <p>Monsieur Lamboux Durand Directeur du département MMI.</p>
        <p>HÉBERGEMENT DU SITE</p>
        <p>Centre de Ressources Informatiques (CRI), Université de Franche-Comte</p>
        <p>CRÉDITS PHOTOGRAPHIQUES</p>
        <p>Université de Franche-Comté</p>
        <p>Propriété Intellectuelle</p>
        <p>Tous les contenus de ce site web, y compris mais sans s'y limiter, les textes, les images, les vidéos, les logos et les graphiques, sont la propriété du Département MMI de Montbéliard ou de tiers ayant accordé des droits d'utilisation.<br><br> Toute reproduction, distribution, modification ou utilisation de ces contenus sans autorisation écrite préalable est strictement interdite.</p>
        </div>
        <div class="section2-mentions__sideleft-borderS__c2">
        <p>Protection des Données Personnelles</p>
        <p>Ce site web peut collecter des données personnelles dans le cadre de formulaires de contact ou d'inscription. Ces données seront utilisées conformément à notre politique de confidentialité, que vous pouvez consulter [lien vers la politique de confidentialité]. </p>
        <p>Cookies</p>
        <p>Ce site web utilise des cookies pour améliorer l'expérience de l'utilisateur.</p>
        <p>Liens Hypertextes </p>
        <p>Ce site web peut contenir des liens vers d'autres sites web. Le Département MMI de Montbéliard n'est pas responsable du contenu de ces sites tiers.</p>
        <p>Responsabilité</p>
        <p>Le Département MMI de Montbéliard s'efforce de fournir des informations exactes et à jour sur ce site web. Cependant, nous ne pouvons pas garantir l'exactitude, l'exhaustivité ou la pertinence de ces informations. En conséquence, le Département MMI de Montbéliard décline toute responsabilité en cas d'erreurs ou d'omissions dans le contenu de ce site web.</p>
        <p>Droit Applicable</p>
        <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.<br><br> La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.<br><br>Mentions légales rédigés le 10/11/2013</p>
        </div>
      </div>
    </div>
    
  </div>
</div>
<Footer></Footer>
</template>

<style lang="scss">
  .container {
    padding: rem(30) rem(20);
  }

  // SECTION 1 - CONCEPTION
  .section1-mentions {
    margin: rem(60) rem(0) rem(60) rem(0);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(20);

    &__slider {
      display: flex;
      flex-direction: column;
      font-family: $font-poppins;
      align-items: center;
      text-transform: uppercase;
      font-weight: 700;
      font-size: $size-13;
      gap: rem(10);

      span {
        font-weight: 300;
      }

      :nth-child(3) {
        width: rem(17);
      }

      :nth-child(1) {
        width: rem(196);
      }
    }
  }

  // SECTION 2 - MENTIONS LEGALES
  .section2-mentions {
    margin-bottom: rem(60);

    &__sideleft {
      &-borderT {
        @include borderColorTitle;
        border-color: $red;
        display: flex;
        align-items: flex-end;
        gap: rem(5);

        span {
          color: $blue;
        }

        &__title {
          font-family: $font-redhat;
          font-size: $size-32;
          font-weight: 200;
          text-transform: uppercase;

          strong {
            font-weight: 800;
          }
        }
      }

      &-borderS {

        &__c1 {
          display: flex;
          flex-direction: column
        }
        &__c2 {
          display: flex;
          flex-direction: column;
        }
        @include borderColorSubtitle;

        p:nth-of-type(odd) {
          margin: rem(10) 0;
          font-family: $font-redhat;
          text-transform: uppercase;
          font-weight: 700;
          font-size: $size-16;
        }

        p:nth-of-type(even) {
          font-family: $font-poppins;
          margin-bottom: rem(25);
          font-weight: 300;
          font-size: $size-13;
          line-height: normal;
        }
      }
    }
  }

  // MEDIA QUERIES
  @media (min-width: 768px) {
    .container {
      padding: rem(30) rem(35);
    }

    .section1-mentions {
      margin: rem(80) rem(0) rem(120) rem(0);
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: rem(20);

      &__slider {
        font-size: $size-14;

        :nth-child(3) {
          width: rem(20);
        }
      }
    }

    .section2-mentions {
      &__sideleft {
        &-borderS {
          @include borderColorSubtitle;

          p:nth-of-type(odd) {
            font-size: $size-19;
          }

          p:nth-of-type(even) {
            font-size: $size-16;
          }
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .container {
      padding: rem(30) rem(40);
    }

    .section1-mentions {
      gap: rem(40);

      &__slider {
        font-size: $size-14;

        :nth-child(1) {
          width: rem(210);
        }

        :nth-child(3) {
          width: rem(20);
        }
      }
    }

    .section2-mentions {
      &__sideleft {
        &-borderT {
          &__title {
            font-size: $size-45;
          }
        }
      }
    }
  }

  @media (min-width: 1440px) {
    .container {
      padding: rem(30) rem(75);
    }

    .section1-mentions {
      margin: rem(90) rem(0) rem(170) rem(0);
      gap: rem(40);

      &__slider {
        font-size: $size-16;

        :nth-child(1) {
          width: rem(280);
        }

        :nth-child(3) {
          width: rem(24);
        }
      }
    }

    .section2-mentions {
      &__sideleft {
        &-borderT {
          @include borderColorTitle;
          border-left: 15px solid $red;

          &__title {
            font-size: $size-90;
            margin-bottom: rem(10);
          }
        }
        &-borderS {
        display: flex;
        justify-content:center;
        align-items: flex-start;
        gap:rem(70);
        }
      }
    }
  }
</style>
