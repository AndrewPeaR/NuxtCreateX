<script setup>

</script>

<template>
    <section class="clients-saying">
        <div class="clients-saying__text">
            <h2 class="clients-saying__title left">What our clients are saying</h2>
            <ClientsSayingSlider />
        </div>
        <img class="clients-saying__poster" src="assets/image/ClientsSayingPoster.png" alt="ClientsSayingPoster">
    </section>
</template>

<style lang="sass">
.clients-saying
    width: 100%
    display: flex
    justify-content: space-between
    position: relative
.clients-saying__title
    @include font-styles(46px, 700, 130%, 0, $dark)
    margin-bottom: 60px
.clients-saying__poster
    position: absolute
    right: 0
    top: 0
</style>