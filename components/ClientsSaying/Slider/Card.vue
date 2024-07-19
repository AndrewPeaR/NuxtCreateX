<script setup>
const props = defineProps([
  "image",
  "text",
  "firstname",
  "lastname",
  "company",
  "company_position",
]);
</script>

<template>
  <div class="clients-saying-card">
    <div class="clients-saying-card__person">
      <img
        :src="`_nuxt/assets/image/${image}`"
        alt="client image"
        class="clients-saying-card__image"
      />
    </div>
    <div class="clients-saying-card__info">
      <p class="clients-saying-card__text">
        {{ text }}
      </p>
      <p class="clients-saying-card__author">
        {{ `${firstname} ${lastname}` }}
      </p>
      <p class="clients-saying-card__company">
        {{ `${company_position}, ${company}` }}
      </p>
    </div>
  </div>
</template>

<style lang="sass">
// Костыль, если не указать ширину, то слайдер растягивается на 3 миллиона пикселей
.clients-saying-slider .swiper
    max-width: 600px
.clients-saying-card
    width: 600px
.clients-saying-card__person
    width: 72px
    height: 72px
    border-radius: 36px
    margin-bottom: 24px
.clients-saying-card__image
    width: 100%
    height: 100%
    object-fit: cover
    object-position: center
.clients-saying-card__text
    margin-bottom: 24px
    @include font-styles(16px, 400, 160%, 0, $header_gray)
.clients-saying-card__author
    margin-bottom: 4px
    @include font-styles(16px, 700, 160%, 0, $dark)
.clients-saying-card__company
    @include font-styles(14px, 400, 150%, 0, $accent)
</style>
