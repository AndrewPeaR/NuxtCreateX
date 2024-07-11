<script setup>
    const props = defineProps([
        'icon', 'title', 'parag' 
    ])
</script>

<template>
    <div class="core-value-card">
        <ElementsIcon 
            class="core-value-card__icon"
            :name='icon'
            :filled="true"
            :fontControlled="false"
        />
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
.core-value-card__icon
    margin-bottom: 24px
.core-value-card__title
    margin-bottom: 8px
    @include font-styles(20px, 700, 150%, 0, $dark)
.core-value-card__parag
    @include font-styles(16px, 400, 160%, 0, $accent)
</style>