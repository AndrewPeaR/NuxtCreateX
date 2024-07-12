<script setup>

</script>

<template>
    <nav class="nav">
        <ul class="nav__list">
            <NuxtLink :to="'#'" class="nav__item"><IconLogoCreateX alt="CreateX" :fontControlled="false" :filled="true" /></NuxtLink>
            <NuxtLink :to="'#'" class="nav__item">About Us</NuxtLink>
            <NuxtLink :to="'#'" class="nav__item">Services</NuxtLink>
            <NuxtLink :to="'#'" class="nav__item">Work</NuxtLink>
            <NuxtLink :to="'#'" class="nav__item">News</NuxtLink>
            <NuxtLink :to="'#'" class="nav__item">Contacts</NuxtLink>
        </ul>
    </nav>
</template>

<style lang="sass">
.nav__list
    display: flex
    align-items: center
    
.nav__item
    @include fast-transition
    @include font-styles(16px, 700, 160%, 0, $header_gray)
    margin-right: 40px

// .nav__item:nth-child(n+2):after
//     content: ''
//     width: 100%
//     height: 2px
//     background: $orange

.nav__item:first-child
    margin-right: 60px
    display: flex
    align-items: center 

.nav__item:hover
    box-shadow: 0 80px 80px -20px rgba(154, 156, 165, 0.16), 0 30px 24px -10px rgba(154, 156, 165, 0.10), 0 12px 10px -6px rgba(154, 156, 165, 0.08), 0 4px 4px -4px rgba(30, 33, 44, 0.05)
</style>