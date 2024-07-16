<script setup>
const props = defineProps(["label", "type", "placeholder", "nameInput", "hardWidth"]);
</script>

<template>
  <div class="input">
    <label class="input__label" :for="props.nameInput">{{ props.label }}</label>
    <input
      class="input__area"
      :type="type"
      :name="props.nameInput"
      :id="props.nameInput"
      :placeholder="props.placeholder"
      :class="hardWidth ? 'input__area_hard-width' : 'input__area_responsive-width'"
    />
  </div>
</template>

<style lang="sass">
.input
    text-align: left
.input__label
    display: block
    margin-bottom: 8px
    @include font-styles(14px, 400, 150%, 0, $header_gray)
.input__area
    @include font-styles(14px, 400, 150%, 0, $placeholder)
    background-color: $input_bg
    border: 1px solid $input_stroke
    border-radius: 4px
    padding: 12px 16px 12px 16px
    @include fast-transition

.input__area_hard-width
    width: 415px

.input__area_responsive-width
    width: 100%

.input__area:focus
    border: 1px solid $placeholder
</style>
