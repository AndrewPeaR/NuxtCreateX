<script setup>
    const props = defineProps([
        'image', 'icon', 'title'
    ])
</script>

<template>
    <div class="servicesCard">
        <img class="servicesCard__backgroundImage" :src="`/_nuxt/assets/image/${image}`" alt="serviceCard">
        <div class="servicesCard__info">
             <ElementsIcon 
                class="servicesCard__icon"
                :name='icon'
                filled
                :fontControlled="false"
             />
            <h3 class="servicesCard__title">{{ title }}</h3>
        </div>
    </div>
</template>

<style lang="sass">
.servicesCard
    position: relative
    border-radius: 4px
    opacity: 1
    background-color: $white
    width: 285px
    height: 285px
    @include transition
    @include shadow
    @include hover-shadow

.servicesCard__backgroundImage
    opacity: 0
    @include transition

.servicesCard__info
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    display: flex
    flex-direction: column
    align-items: center
.servicesCard__title
    white-space: nowrap
    @include font-styles(20px, 700, 150%, 0, $dark)
    @include transition

.servicesCard__icon
    margin-bottom: 24px

.servicesCard__icon path
    fill: $orange
    @include transition

.servicesCard:hover
    background-color: $dark
.servicesCard:hover .servicesCard__backgroundImage
    opacity: 0.6
.servicesCard:hover .servicesCard__title
    color: $white
.servicesCard:hover .servicesCard__icon path
    fill: $white

</style>