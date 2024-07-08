<script setup>
    const props = defineProps([
        'btn_title', 'isOrange'
    ])
</script>

<template>
    <button v-if="isOrange" class="btn btn_orange">
        {{ btn_title }}
    </button>
    <button v-else class="btn">
        {{ btn_title }}
    </button>
</template>

<style lang="sass">
.btn
    padding: 0 30px
    @include font-styles(16px, 700, 325%, 0.5px, $white)
    text-transform: uppercase
    border-radius: 4px
    border: 1px solid $white

.btn_orange
    border: 1px solid $orange
    background-color: $orange
</style>