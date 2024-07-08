<script setup>
    const props = defineProps([
        'image', 'title', 'parag' 
    ])
</script>

<template>
    <div class="coreValueCard">
        <!-- ?????????? -->
        <!-- Почему картинки заработали, когда я подставил _nuxt????? -->
        <img :src="`_nuxt/assets/icons/${image}`" :alt="props.image" class="coreValueCard__img">
        <h3 class="coreValueCard__title">{{ title }}</h3>
        <p class="coreValueCard__parag">{{ parag }}</p>
    </div>
</template>


<style lang="sass">
.coreValueCard
    width: 285px
    text-align: center
    display: flex
    align-items: center
    flex-direction: column
.coreValueCard__img
    margin-bottom: 24px
.coreValueCard__title
    margin-bottom: 8px
    @include font-styles(20px, 700, 150%, 0, $dark)
.coreValueCard__parag
    @include font-styles(16px, 400, 160%, 0, $accent)
</style>