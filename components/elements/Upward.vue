<script setup>
function ScrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<template>
    <button class="upward" @click="ScrollToTop()">
        <IconUpward alt="upward" :fontControlled="false" filled/>
    </button>
</template>

<style lang="sass">
.upward
    position: fixed
    z-index: 10
    width: 40px
    height: 40px
    bottom: 80px
    right: 18%
    background-color: $orange
    border-radius: 4px
    @include transition

</style>