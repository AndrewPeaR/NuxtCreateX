<script setup>
const props = defineProps([
        'label', 'type', 'placeholder', 'nameInput'
    ])
</script>

<template>
    <div class="input">
        <label class="input__label" :for="props.nameInput">{{ props.label }}</label>
        <input class="input__area" :type="type" :name="props.nameInput" :id="props.nameInput" :placeholder="props.placeholder">
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
    // Очень плохой костыль, я знаю....
    width: 300px

    @include font-styles(14px, 400, 150%, 0, $placeholder)
    background-color: $input_bg
    border: 1px solid $input_stroke
    border-radius: 4px
    padding: 12px 16px 12px 16px
    @include fast-transition

.input__area:focus
    border: 1px solid $placeholder
</style>