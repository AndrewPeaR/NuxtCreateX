<script setup>
const props = defineProps(["image", "title", "text", "link"]);
</script>

<template>
  <div class="portfolio-card">
    <!-- Ваши эти картинки что-то с чем-то... -->
    <img
      :src="`_nuxt/assets/image/${image}`"
      :alt="image"
      class="portfolio-card__image"
    />
    <div class="portfolio-card__menu">
      <h3 class="portfolio-card__title">{{ title }}</h3>
      <p class="portfolio-card__description">{{ text }}</p>
      <ElementsLinkButton
        :href="link"
        :title="'View project'"
        class="portfolio-card__link"
      >
        View project
      </ElementsLinkButton>
    </div>
  </div>
</template>

<style lang="sass">
.portfolio-card
    border-radius: 4px
    overflow-y: hidden
    position: relative
    width: 390px
    height: 440px
    @include fast-transition
    box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03)


.portfolio-card:hover
    box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.16), 0px 30px 24px -10px rgba(154, 156, 165, 0.10), 0px 12px 10px -6px rgba(154, 156, 165, 0.08), 0px 4px 4px -4px rgba(30, 33, 44, 0.05)
    
.portfolio-card:hover .portfolio-card__menu
    bottom: 0

.portfolio-card__menu
    position: absolute
    height: 163px
    width: 100%
    padding-top: 16px
    background-color: $white
    text-align: center
    @include fast-transition
    bottom: -68px

.portfolio-card__title
    @include font-styles(20px, 700, 150%, 0, $dark)
    margin-bottom: 4px

.portfolio-card__description
    @include font-styles(14px, 400, 150%, 0, $accent)
    margin-bottom: 24px
</style>
