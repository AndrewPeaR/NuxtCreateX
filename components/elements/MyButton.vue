<script setup>
const props = defineProps(["btn_title", "isOrange", "isLarge"]);
let btn_class = "btn";
btn_class += props.isLarge ? " btn_large" : "";
btn_class += props.isOrange ? " btn_orange" : "";
</script>

<template>
  <button v-if="isOrange" :class="btn_class">
    {{ btn_title }}
  </button>
  <button v-else :class="btn_class">
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
    box-shadow: 0px 10px 30px 10px rgba(34, 60, 80, 0.01)

.btn:hover
    box-shadow: 0px 10px 20px 10px rgba(34, 60, 80, 0.10)

.btn_orange
    border: 1px solid $orange
    background-color: $orange

.btn_large
    height: 52px
    line-height: 325%
</style>
