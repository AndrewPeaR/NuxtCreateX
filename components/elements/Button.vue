<script setup>
const props = defineProps(["btn_title", "isOutline", "isOrange", "isLarge", 'isSmall']);
</script>

<template>
  <button
    :class="{
      btn_outline: isOutline,
      btn_orange: isOrange,
      btn_large: isLarge && !isSmall,
      btn_outline_orange: isOutline && isOrange,
      btn_small: isSmall && !isLarge
    }"
    class="btn"
  >
    {{ btn_title }}
  </button>
</template>

<style lang="sass">
.btn
    padding: 0 30px
    @include font-styles(16px, 700, normal, 0.5px, $white)
    text-transform: uppercase
    border-radius: 4px
    border: 1px solid $white
    height: 44px
    @include fast-transition
    @include shadow
    @include hover-shadow

.btn_orange
    border: 1px solid $orange
    background-color: $orange

.btn_large
    height: 52px
    line-height: 325%

.btn_small
    height: 36px
    padding: 0 24px
    font-size: 12px

.btn_outline_orange
    color: $orange

.btn_outline
    background-color: transparent

.btn_outline:hover
    border: 1px solid $orange
    background-color: $orange
    color: $white
</style>
