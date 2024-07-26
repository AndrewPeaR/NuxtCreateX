<script setup>

</script>

<template>
    <div class="padtop">
        <ElementsUpward />
        <Header />
        <slot />
        <FooterBlock />
    </div>
</template>

<style lang="sass">
.padtop
    padding-top: 89px
</style>