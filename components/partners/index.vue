<script setup>
// Реализовать через запрос, а не статику
const partners =['partner 1', 'partner 2', 'partner 3', 'partner 4']
</script>

<template>
    <div class="partners">
        <h2 class="partners__title">Supported by 12+ partners</h2>
        <div class="partners__items">
            <li class="partners__item"><NuxtLink :to="'#'"><img class="partners__image" src="/assets/image/partner1.png" alt="partner1"></NuxtLink></li>
            <li class="partners__item"><NuxtLink :to="'#'"><img class="partners__image" src="/assets/image/partner1.png" alt="partner1"></NuxtLink></li>
            <li class="partners__item"><NuxtLink :to="'#'"><img class="partners__image" src="/assets/image/partner1.png" alt="partner1"></NuxtLink></li>
            <li class="partners__item"><NuxtLink :to="'#'"><img class="partners__image" src="/assets/image/partner1.png" alt="partner1"></NuxtLink></li>
            <li class="partners__item"><NuxtLink :to="'#'"><img class="partners__image" src="/assets/image/partner1.png" alt="partner1"></NuxtLink></li>
            <li class="partners__item"><NuxtLink :to="'#'"><img class="partners__image" src="/assets/image/partner1.png" alt="partner1"></NuxtLink></li>
        </div>
    </div>
</template>

<style lang="sass">
.partners__title
    text-align: center
    margin-bottom: 60px
    @include font-styles(46px, 700, 130%, 0, $dark)

.partners__items
    display: flex
    justify-content: space-between

.partners__item
    list-style-type: none
    @include fast-transition
    filter: grayscale(100%)
.partners__item:hover
    filter: grayscale(0)
</style>