<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const { client } = usePrismic();
const { data: faq, error } = await useAsyncData('faq', () => client.getSingle("faq"));


useSeoMeta({
    title: faq.value.data.meta_title,
    description: faq.value.data.meta_description,
    ogDescription: faq.value.data.meta_description,
    ogImage: faq.value.data.meta_image.url,
    twitterCard: 'summary_large_image',
})


  
  const canvas = ref(null);
  const context = ref(null);

  
  const bulles = [
    // Les positions et tailles sont estimées; ajustez-les selon l'image
    { x: 250, y: 100, radius: 90, style: "hollow", velocityY: 0 },
    { x: 450, y: 100, radius: 50, style: "hollow", velocityY: 0 },
    { x: 200, y: 200, radius: 60, style: "hollow", velocityY: 0 },
    { x: 250, y: 100, radius: 100, style: "hollow", velocityY: 0 },
  

    { x: 120, y: 100, radius: 80, style: "solid", velocityY: 0 },
    { x: 350, y: 150, radius: 60, style: "solid", velocityY: 0 },
    { x: 120, y: 100, radius: 80, style: "solid", velocityY: 0 },
    { x: 350, y: 150, radius: 60, style: "solid", velocityY: 0 },
  ];
  let selectedBulle = null;
  let offsetX, offsetY;


  let animationStarted = false;

  function onScroll() {
  if (animationStarted) return;

  const canvasTop = canvas.value.getBoundingClientRect().top;
  const viewportHeight = window.innerHeight;

  if (canvasTop < viewportHeight) {
    setTimeout(() => {
      if (!animationStarted) {
        dropBulles();
        animationStarted = true;
      }
    }, 50); 
  }
}
  
  onMounted(() => {
    context.value = canvas.value.getContext('2d');
  updateCanvasSize();
  drawBulles();
  window.addEventListener('resize', updateCanvasSize);
  window.addEventListener('scroll', onScroll); 
  });

  onUnmounted(() => {
  window.removeEventListener('resize', updateCanvasSize);
  window.removeEventListener('scroll', onScroll);
});
  
  function drawBulles() {
    context.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
    bulles.forEach(bulle => {
      context.value.beginPath();
      context.value.arc(bulle.x, bulle.y, bulle.radius, 0, Math.PI * 2);
  
      if (bulle.style === "solid") {
        context.value.fillStyle = 'white';
        context.value.fill();
      } else if (bulle.style === "hollow") {
        context.value.strokeStyle = 'white';
        context.value.lineWidth = 1; // Épaisseur du bord
        context.value.stroke();
      }
    });
  }
  
  function checkCollisions() {
    for (let i = 0; i < bulles.length; i++) {
      for (let j = i + 1; j < bulles.length; j++) {
        const dx = bulles[i].x - bulles[j].x;
        const dy = bulles[i].y - bulles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < bulles[i].radius + bulles[j].radius) {
          // Collision détectée, inversez les directions
          const angle = Math.atan2(dy, dx);
          const speed1 = bulles[i].velocityY;
          const speed2 = bulles[j].velocityY;
  
          bulles[i].velocityY = speed2;
          bulles[j].velocityY = speed1;
  
          // Corrigez la position pour éviter que les bulles ne se chevauchent
          const overlap = bulles[i].radius + bulles[j].radius - distance;
          const moveX = (overlap / 2) * Math.cos(angle);
          const moveY = (overlap / 2) * Math.sin(angle);
  
          bulles[i].x += moveX;
          bulles[i].y += moveY;
          bulles[j].x -= moveX;
          bulles[j].y -= moveY;
        }
      }
    }
  
    // Vérifier les collisions avec les bords du cadre
    bulles.forEach(bulle => {
      if (bulle.x - bulle.radius < 0) {
        bulle.x = bulle.radius;
      }
      if (bulle.x + bulle.radius > canvas.value.width) {
        bulle.x = canvas.value.width - bulle.radius;
      }
      if (bulle.y - bulle.radius < 0) {
        bulle.y = bulle.radius;
      }
      if (bulle.y + bulle.radius > canvas.value.height) {
        bulle.y = canvas.value.height - bulle.radius;
      }
    });
  }
  
  function dropBulles() {
    bulles.forEach(bulle => {
      gsap.to(bulle, {
        y: canvas.value.height - bulle.radius,
        duration: 2,
        ease: 'bounce.out',
        onUpdate: () => {
          checkCollisions();
          drawBulles();
        }
      });
    });
  }
  
  function startDrag(e) {
    const rect = canvas.value.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
  
    bulles.forEach(bulle => {
      const distance = Math.sqrt((mouseX - bulle.x) ** 2 + (mouseY - bulle.y) ** 2);
      if (distance < bulle.radius) {
        selectedBulle = bulle;
        offsetX = bulle.x - mouseX;
        offsetY = bulle.y - mouseY;
        document.addEventListener('mousemove', dragging);
        document.addEventListener('mouseup', endDrag);
      }
    });
  }
  
  function dragging(e) {
    if (!selectedBulle) return;
    const rect = canvas.value.getBoundingClientRect();
    let newX = e.clientX - rect.left + offsetX;
    let newY = e.clientY - rect.top + offsetY;
  
    newX = Math.max(selectedBulle.radius, Math.min(newX, canvas.value.width - selectedBulle.radius));
    newY = Math.max(selectedBulle.radius, Math.min(newY, canvas.value.height - selectedBulle.radius));
  
    selectedBulle.x = newX;
    selectedBulle.y = newY;
    checkCollisions();
    drawBulles();
  }
  
  function endDrag() {
    if (!selectedBulle) return;
    document.removeEventListener('mousemove', dragging);
    document.removeEventListener('mouseup', endDrag);
  
    gsap.to(selectedBulle, {
      y: canvas.value.height - selectedBulle.radius,
      duration: 1,
      ease: 'bounce.out',
      onUpdate: () => {
        checkCollisions();
        drawBulles();
      }
    });
  
    selectedBulle = null;
  }




  function updateCanvasSize() {
  const parent = canvas.value.parentElement;
  canvas.value.width = parent.clientWidth;
  canvas.value.height = parent.clientHeight;
}
</script>

<template>
      <div class="container__index-heroM">
    <heroM title="Foire aux questions" tagline="Posez-nous vos questions !" TopImage="/images/faq-heroM-1.webp" BottomImage="/images/faq-heroM-2.webp" Button1="Candidater" Button2="Formation" Button1Url="/candidater" Button2Url="/formation"></heroM>
    </div>
    <div class="container__index-heroT">
        <HeroT title="Foire aux questions" tagline="Posez-nous vos questions!" TopImage="images/faq-heroM-1.webp" Button1="Candidater" Button2="Formation" Button1Url="/candidater" Button2Url="/formation"></HeroT>
      </div>
      <div class="container__index-heroC">
        <heroC-hover  title="Foire aux questions" tagline="Posez-nous vos questions !" TopImage="/images/faq-heroM-1.webp" BottomImage="/images/faq-heroM-2.webp" Button1="Candidater" Button2="Formation" Button1Url="/candidater" Button2Url="/formation"> 
        </heroC-hover>
      </div> 
    <div class="section1-faq">
        <div class="section1-faq__sideleft" data-scroll-indicator-title="Hello World">
            <div class="section1-faq__sideleft-container">
                <borderSection :title="faq.data.section1[0].title" :subtitle="faq.data.section1[0].subtitle" />
                <RouterLink to="/formation">
                <Button class="btn-margin" bgColor="bgBlack" color="white" size="small">Découvrir la formation</Button>
            </RouterLink>
            <RouterLink to="/contact">
                <Button class="btn-margin" size="small">Nous contacter</Button>
                </RouterLink>
            </div>
            <div class="section1-faq__sideleft-accordion">
                <Cardfaq></Cardfaq>
                <!-- <Cardfaq :tabs="faq.data.questions"></Cardfaq> -->
                <!-- <Cardfaq :question="faq.data.questions[0].question"
                    :reponse="faq.data.questions[1].reponse"></Cardfaq> -->
            </div>
            <div class="section1-faq__sideleft-contact">
                <Formcontact />
            </div>
        </div>
        <div class="section1-faq__sideright">
              <canvas id="test" ref="canvas" @mousedown="startDrag" @mouseup="endDrag" @mouseleave="endDrag">
             </canvas>
        </div>
    </div>
</template>

<style lang="scss">
#canvas{
  background-color: #1C1C1C; 
}
.container__index{
  overflow: hidden;
  //pour le hero
  &-heroT{
    display: none;
  }
  &-heroC{
    display: none;
  }
}

.section1-faq {
    &__sideright {
        display: none;
    }
    &__sideleft {
        padding: rem(30) rem(20);
        &-contact {
          margin-top: rem(50);
        }
        &-container {
            :nth-child(2) {
                margin-bottom: 10px;
            }
        }
        &-accordion {
            margin-top: rem(30);
        }
    }
}

.btn-margin {
    margin-left:rem(20);
    margin-bottom: rem(10);
}

@media (min-width : 768px) {
  .container__index{
    &-heroM{
      display: none;
    }
    &-heroT{
      display: block;
    }
  }
    .section1-faq {
        &__sideleft {
            padding: rem(60) rem(40);
            
        }
    }
}

@media (min-width : 1024px) {
  .container__index{
    &-heroM{
      display: none;
    }
    &-heroT{
      display: none;
    }
    &-heroC{
      display: block;
    }
  }
    .section1-faq {
        display: flex;
      
        &__sideleft {
            width: 50%;
        }
        
        &__sideright {
            flex: 1;
            margin-top: rem(70);
            display: block; 
            background-color: #1C1C1C;          
        }

       
    }
}


@media (min-width : 1440px) {
    .section1-faq {
        &__sideleft {
            padding: rem(100) rem(75);
        }
        &__sideright{
            margin-top:100px;
            // background-color: red;
       
        

        }
    }
}</style>

