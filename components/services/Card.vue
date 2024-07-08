<script setup>
    
</script>

<template>
    <div class="servicesCard">
        <img class="servicesCard__backgroundImage" src="/assets/image/image.png" alt="serviceCard">
        <div class="servicesCard__info">
            <!-- <img class="servicesCard__infoIcon" src="" alt=""> -->
            <IconConstruction class="servicesCard__infoIcon" :fontControlled="false" :filled="true"/>
            <h3 class="servicesCard__title">Construction</h3>
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
    @include font-styles(20px, 700, 150%, 0, $dark)
    @include transition

.servicesCard__infoIcon
    margin-bottom: 24px

.servicesCard__infoIcon > path
    fill: $orange
    @include transition

.servicesCard:hover
    background-color: $dark
.servicesCard:hover .servicesCard__backgroundImage
    opacity: 0.6
.servicesCard:hover .servicesCard__title
    color: $white
.servicesCard:hover .servicesCard__infoIcon > path
    fill: $white

</style>