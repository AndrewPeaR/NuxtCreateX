<script setup>

</script>

<template>
    <nav class="nav">
        <ul class="nav__list">
            <a href="#" class="nav__item"><IconLogoCreateX alt="CreateX" :fontControlled="false" :filled="true" /></a>
            <a href="#" class="nav__item">About Us</a>
            <a href="#" class="nav__item">Services</a>
            <a href="#" class="nav__item">Work</a>
            <a href="#" class="nav__item">News</a>
            <a href="#" class="nav__item">Contacts</a>
        </ul>
    </nav>
</template>

<style lang="sass">
.nav__list
    display: flex
    align-items: center
    
.nav__item
    @include font-styles(16px, 700, 160%, 0, $header_gray)
    margin-right: 40px
    
.nav__item:first-child
    margin-right: 60px
    display: flex
    align-items: center 
</style>