<template>
    <header>
        <div class="wrapper header">
            <Navigation />
            <NavContacts />
        </div>
    </header>
</template>

<script>
import NavContacts from './NavContacts.vue';
import Navigation from './Navigation.vue';

    export default {
        
    }
</script>

<style lang="sass">
.header
    display: flex
    justify-content: space-between
    align-items: center
    padding: 20px 0
</style>