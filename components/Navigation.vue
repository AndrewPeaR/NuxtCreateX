<template>
    <nav class="nav">
        <ul class="nav__list">
            <a href="#" class="nav__item"><img src="@/assets/img/logo.svg" alt="CreateX"></a>
            <a href="#" class="nav__item">About Us</a>
            <a href="#" class="nav__item">Services</a>
            <a href="#" class="nav__item">Work</a>
            <a href="#" class="nav__item">News</a>
            <a href="#" class="nav__item">Contacts</a>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Navigation'
    }
</script>

<style lang="sass">
.nav
    &__list
        .nav__item
            @include font-styles(16px, 700, 160%, 0, $header_gray)
            margin-right: 40px
            
            &:first-child
                margin-right: 60px
</style>