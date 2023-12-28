<script setup>

const props = defineProps({
    href: String,
    size: String,
    color: String,
    bgColor: String,
    borderColor: String,
})

const className = computed (() => ({
    //taille du bouton
    ' -small': props.size === 'small',

    //couleur de texte du bouton
    ' -blue': props.color === 'blue',
    ' -white': props.color === 'white',

    //couleur de fond du bouton
    ' -bgBlack': props.bgColor === 'bgBlack',
    ' -bgBlue': props.bgColor === 'bgBlue',
    ' -bgTransparent' : props.bgColor === 'bgTransparent',

    //couleur du bord du bouton
    ' -borderBlue': props.borderColor === 'borderBlue',
    ' -borderWhite': props.borderColor === 'borderWhite',
}))

</script>

<template>
     <button :class="className" :href="href"><span>
        <slot></slot></span>
     </button>
</template>

<style lang="scss" scoped>
button{
    border: rem(2) solid $black;
    border-radius: rem(30);
    padding: rem(12) rem(25);
    // margin-left:rem(20);
    text-align: center;
    text-transform: uppercase;
    font-family: $font-poppins;
    font-size: $size-21;
    background-color: $white ;
    color:$black;
    cursor: pointer;
    transition: all 0.5s;
    span {
    cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
    }
  
}   


button span:after {
  content: '\203A';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

button:hover span {
  padding-right: 25px;
}

button:hover span:after {
  opacity: 1;
  right: 0;
}


.-small{
    padding: rem(8) rem(20);
    font-size: rem(14);
}

.-blue{
    color: $blue;
}

.-white{
    color: $white;
}

.-bgBlack{
    background-color: $black;
}
.-bgBlue{
    background-color: $blue ;
}

.-bgTransparent{
    background-color: transparent;
}

.-borderBlue{
    border-color: $blue;
}

.-borderWhite{
    border-color: $white;
}
</style>