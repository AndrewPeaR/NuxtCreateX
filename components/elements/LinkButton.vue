<script setup>
const props = defineProps(["title", "link", "isOrange"]);
</script>

<template>
  <a :class="{'link-btn_orange': isOrange}" class="link-btn" :href="link">
    {{ title }}
  </a>
</template>

<style lang="sass">
.link-btn
    display: inline-block
    height: 44px
    border-radius: 4px
    border: 1px solid $orange
    padding: 0 30px
    text-transform: uppercase
    text-align: center
    @include font-styles(14px, 700, 310%, 0.5px, $orange)
    @include fast-transition

.link-btn:visited
    color: $orange

.link-btn:hover
    background-color: $orange
    color: $white
    // cursor: pointer

.link-btn_orange
    display: flex
    align-items: center
    border: none
    background-color: $orange
    color: $white
    height: 52px

.link-btn_orange:visited
    color: $white

.link-btn_orange:hover
    box-shadow: 0 10px 20px 10px rgba(34, 60, 80, 0.10)
</style>
