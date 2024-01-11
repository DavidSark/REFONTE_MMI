<script>

export default {
    
  mounted() {
    this.onMouseMove = (e) => {
      document.documentElement.style.setProperty('--cursor-x', e.clientX + "px");
      document.documentElement.style.setProperty('--cursor-y', e.clientY + "px");
    };

    this.onMouseEnter = () => {
      document.documentElement.style.setProperty('--cursor-size', "350px");
    };

    this.onMouseLeave = () => {
      document.documentElement.style.setProperty('--cursor-size', "32px");
    };

    window.addEventListener('mousemove', this.onMouseMove);
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.onMouseMove);
  },
};
</script>


<template>

    <div class="main_page">
        <div class="layer dark_layer">
            <div class="text_container"  @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
                <div>LOREM</div>
                <div>IPSUM</div>
                <div>DOLOR</div>
                <div>SIT</div>
                <div>AMET</div>
            </div>
        </div>
        <div class="layer layer_red" :class="{ 'large-cursor': cursorSize === 350 }">
            <div class="text_container text_black">
                <div>AMET</div>
                <div>SIT</div>
                <div>DOLOR</div>
                <div>IPSUM</div>
                <div>LOREM</div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

:root{
    --cursor-size: 32px;
    --cursor-x:0px;
    --cursor-y: 0px;
}
.main_page{
    position: relative;
    width: 100vw;
    height: 100vh;

    .layer{
        color: white;
        position: absolute;
        width: 100vw;
        background: rgb(15,14,16);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .dark_layer{
        background-color: rgb(15,14,16);

    }
    .text_container{
            width: 380px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: "Montserrat", sans-serif;
            font-size: 90px;
            font-weight: 600;
            line-height: 70px;
            user-select: none;
        }

    .layer_red{
            background-color: green;
            mask: url('/mask.svg');
            -webkit-mask: url('/mask.svg');
            mask-repeat:no-repeat ;
            -webkit-mask-repeat:no-repeat ;
            mask-position: calc(var(--cursor-x) - var(--cursor-size)/2)  calc(var(--cursor-y) - var(--cursor-size)/2);
            -webkit-mask-position: calc(var(--cursor-x) - var(--cursor-size)/2)  calc(var(--cursor-y) - var(--cursor-size)/2);
            mask-size: var(--cursor-size);
            -webkit-mask-size: var(--cursor-size);
            pointer-events: none;
            transition-duration: 100ms;
            transition-timing-function: ease;
  
   
            
          
            .text_black{
                color: black !important;
            }
        }
}


</style>

  