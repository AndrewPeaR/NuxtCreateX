<script setup>
  
</script>

<template>
    <header class="header">
        <div class="wrapper header__wrapper">
            <HeaderNav />
            <HeaderNavContacts />
        </div>
    </header>
</template>

<style lang="sass">
.header
    width: 100%
    position: fixed
    top: 0
    z-index: 10
    background-color: $white

.header__wrapper
    display: flex
    justify-content: space-between
    align-items: center
    padding: 20px 0
</style>