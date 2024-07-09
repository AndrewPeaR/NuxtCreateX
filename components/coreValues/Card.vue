<script setup>
    const props = defineProps([
        'image', 'title', 'parag' 
    ])
</script>

<template>
    <div class="core-value-card">
        <!-- ?????????? -->
        <!-- Почему картинки заработали, когда я подставил _nuxt????? -->
        <img :src="`_nuxt/assets/icons/${image}`" :alt="props.image" class="core-value-card__img">
        <h3 class="core-calue-card__title">{{ title }}</h3>
        <p class="core-value-card__parag">{{ parag }}</p>
    </div>
</template>


<style lang="sass">
.core-value-card
    width: 285px
    text-align: center
    display: flex
    align-items: center
    flex-direction: column
.core-value-card__img
    margin-bottom: 24px
.core-value-card__title
    margin-bottom: 8px
    @include font-styles(20px, 700, 150%, 0, $dark)
.core-value-card__parag
    @include font-styles(16px, 400, 160%, 0, $accent)
</style>