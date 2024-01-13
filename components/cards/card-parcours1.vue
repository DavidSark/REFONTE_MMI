<script setup>

</script>

<template>
    <div class="circle">
    <div class="circle-dev"></div>
    <div class="circle-design"></div>
    <div class="circle-com"></div>
    </div>

</template>

<style lang="scss" scoped>

.circle {
    position: relative;
    &-dev {
        position: absolute;
        border: 1px solid red;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    }
}

</style>