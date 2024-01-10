    <template>
        <canvas
        ref="canvas"
        width="550"
        height="600"
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
    { x: 150, y: 150, radius: 50, style: "solid" },
    { x: 250, y: 100, radius: 30, style: "hollow" },
    { x: 350, y: 150, radius: 70, style: "solid" },
    { x: 450, y: 100, radius: 20, style: "hollow" },
    { x: 400, y: 200, radius: 40, style: "solid" },
    { x: 200, y: 200, radius: 60, style: "hollow" },
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
    function dropBulles() {
        bulles.forEach(bulle => {
        gsap.to(bulle, {
            y: canvas.value.height - bulle.radius,
            duration: 1.5,
            ease: 'bounce.out',
            onUpdate: drawBulles
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
        onUpdate: drawBulles
        });
    
        selectedBulle = null;
    }
    </script>


    <style>
    canvas {
    background-color: black; /* Couleur de fond du canvas */
    }
    </style>
    