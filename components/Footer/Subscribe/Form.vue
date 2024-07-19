<script setup>
const props = defineProps(['action', 'method'])
</script>

<template>
    <form :action="action" :method="method">
        <input class="footer-subscribe__input" type="text" placeholder="Your email address" name="subscribeInput">
        <ElementsButton 
            class="footer-subscribe__submit"
            :btn_title="'Subscribe'"
            :isOutline="false"
            :isOrange="true"
            :isLarge="false"
            type="submit"
        />
    </form>
</template>

<style lang="sass">
.footer-subscribe__input
    width: 338px
    padding: 11px 16px
    // Использую тут ргба и не выношу в константы потому, что этот цвет используется только
    // в одной форме, которая только в футере
    border: 1px solid rgba(255,255,255,0.2)
    border-radius: 4px
    background-color: rgba(255,255,255,0.12)
    border-top-right-radius: 0
    border-bottom-right-radius: 0
    color: $white
.footer-subscribe__submit
    border-top-left-radius: 0
    border-bottom-left-radius: 0
</style>