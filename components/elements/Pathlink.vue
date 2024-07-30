<script setup>
const props = defineProps(['links'])
</script>

<template>
    <div class="pathlink">
        <NuxtLink class="pathlink__item" v-for="link in links" :key="link.id" :to="link.link">{{ link.name }}</NuxtLink>
    </div>
</template>

<style lang="sass">
.pathlink
    color: $placeholder
    margin-bottom: 40px
.pathlink__item
    text-transform: capitalize
    margin-right: 11px
    @include font-styles(14px, 400, 150%, 0, $header_gray)
.pathlink__item:after
    content: '/'
    margin-left: 11px
    color: $placeholder
.pathlink__item:last-child
    color: $placeholder
.pathlink__item:last-child:after
    content: ''
</style>