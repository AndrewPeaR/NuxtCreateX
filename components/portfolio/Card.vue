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
      <NuxtLink :to="link">
        <ElementsButton
          :isOrange="true"
          :isLarge="false"
          :isOutline="true"
          :btn_title="'View project'"
          class="portfolio-card__link"
        />
      </NuxtLink>
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
    @include shadow
    @include hover-shadow

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
    left: 0

.portfolio-card__title
    @include font-styles(20px, 700, 150%, 0, $dark)
    margin-bottom: 4px

.portfolio-card__description
    @include font-styles(14px, 400, 150%, 0, $accent)
    margin-bottom: 24px
</style>
