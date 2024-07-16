<script setup>
const props = defineProps(["isLeft", "isGray"]);
</script>

<template>
  <button
    :class="{
      'slider-btn_left': isLeft,
      'slider-btn_gray': isGray,
      'slider-btn_outline': !isGray,
    }"
    class="slider-btn"
  >
    <IconArrow
      alt="arrow"
      :fontControlled="false"
      class="slider-btn__icon"
      filled
    />
  </button>
</template>

<style lang="sass">
.slider-btn
    width: 48px
    height: 48px
    border-radius: 24px
    @include fast-transition

.slider-btn__icon path
    @include fast-transition

.slider-btn_gray
    background-color: $white
    opacity: 0.5

.slider-btn_gray:hover
    opacity: 1

.slider-btn_outline:hover
    background-color: $orange

.slider-btn_outline:hover .slider-btn__icon path
    fill: $white

.slider-btn_left
    transform: rotate(180deg)
</style>
