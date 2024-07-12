<script setup>
    const props = defineProps([
        'icon', 'title', 'parag' 
    ])
</script>

<template>
    <div class="core-value-card">
        <div class="core-value-card__wrapper">
            <ElementsIcon 
                class="core-value-card__icon"
                :name='icon'
                :filled="true"
                :fontControlled="false"
            />
            <h3 class="core-value-card__title">{{ title }}</h3>
            <p class="core-value-card__parag">{{ parag }}</p>
        </div>
    </div>
</template>


<style lang="sass">
.core-value-card
    width: 100%
    display: flex
    align-items: center

.core-value-card:after
    margin: 0 auto
    display: block
    content: url(assets/icons/divider.svg)

.core-value-card:last-child
    width: auto
    
.core-value-card:last-child:after
    display: none

.core-value-card__wrapper
    text-align: center
    width: 285px
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