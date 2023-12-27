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
     <button :class="className" :href="href">
        <slot></slot>
     </button>
</template>

<style lang="scss" scoped>
button{
    border: rem(2) solid $black;
    border-radius: rem(30);
    padding: rem(12) rem(25);
    margin-left:rem(20);
    text-align: center;
    text-transform: uppercase;
    font-family: $font-poppins;
    font-size: $size-21;
    background-color: $white ;
    color:$black;
  
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