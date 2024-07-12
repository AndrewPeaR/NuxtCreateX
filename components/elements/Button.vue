<script setup>
const props = defineProps(["btn_title", "isOutline", "isOrange", "isLarge"]);
</script>

<template>
  <button
    :class="{
      btn_outline: isOutline,
      btn_orange: isOrange,
      btn_large: isLarge,
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
    box-shadow: 0 10px 30px 10px rgba(34, 60, 80, 0.01)

.btn:hover
    box-shadow: 0 10px 20px 10px rgba(34, 60, 80, 0.10)

.btn_orange
    border: 1px solid $orange
    background-color: $orange

.btn_large
    height: 52px
    line-height: 325%
  
.btn_outline
    background-color: transparent
    color: $orange
.btn_outline:hover
    border: 1px solid $orange
    background-color: $orange
    color: $white
</style>
