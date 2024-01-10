<template>
    <canvas
    class="test"
  
      ref="canvas"
      width="450px"
        height="850px"
   
  
      @mousedown="startDrag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
    ></canvas>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { gsap } from 'gsap';
  
  const canvas = ref(null);
  const context = ref(null);

  
  const bulles = [
    // Les positions et tailles sont estimées; ajustez-les selon l'image
    { x: 120, y: 100, radius: 80, style: "solid", velocityY: 0 },
    
    { x: 250, y: 100, radius: 90, style: "hollow", velocityY: 0 },
    { x: 450, y: 100, radius: 50, style: "hollow", velocityY: 0 },
    { x: 200, y: 200, radius: 60, style: "hollow", velocityY: 0 },

    
    { x: 250, y: 100, radius: 100, style: "hollow", velocityY: 0 },
    { x: 350, y: 150, radius: 60, style: "solid", velocityY: 0 },

    
    

    // Ajoutez d'autres bulles si nécessaire
  ];
  let selectedBulle = null;
  let offsetX, offsetY;
  
  onMounted(() => {
    context.value = canvas.value.getContext('2d');
    drawBulles();
    dropBulles();
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
  </script>
  
  <style>
  canvas {
    background-color: #1C1C1C; /* Couleur de fond du canvas */
  }

  </style>
  