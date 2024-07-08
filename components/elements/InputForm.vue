<script setup>
const props = defineProps([
        'label', 'type', 'placeholder', 'nameInput'
    ])
</script>

<template>
    <label class="input__label" for="props.nameInput"> </label>
    <input class="input__area" :type="type" :name="props.nameInput" :placeholder="props.placeholder">
</template>

<style lang="sass">

</style>