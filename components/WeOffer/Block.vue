<script setup>

</script>

<template>
    <div class="wrapper">
        <section class="we-offer">
            <img class="we-offer__image" src="/assets/image/weoffer.png" alt="weoffer">
            <div class="we-offer__info">
                <h2 class="section-title left we-offer__title">
                    We offer
                </h2>
                <WeOfferAccordeon />
            </div>
        </section>
    </div>
</template>

<style lang="sass">
.we-offer
    display: flex
    gap: 105px
    margin: 290px 0 140px 0
    max-height: 440px
.we-offer__title
    margin-bottom: 60px
</style>