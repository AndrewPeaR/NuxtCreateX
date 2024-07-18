<script setup>
const props = defineProps(["action", "method"]);
</script>

<template>
  <div class="footer-subscribe">
        <p class="footer-subscribe__title">
            Let’s stay in touch
        </p>
        <FooterSubscribeForm 
            class="footer-subscribe__form"
            :action="'#'"
            :method="'#'"
        />
         <p class="footer-subscribe__description">
            *Subscribe to our newsletter to receive communications and early updates from Createx Construction Bureau.
         </p>
      </div>
</template>

<style lang="sass">
.footer-subscribe
    grid-area: C
.footer-subscribe__title
    margin-bottom: 24px
    @include font-styles(24px, 700, 150%, 0, $white)
.footer-subscribe__form
    margin-bottom: 16px

.footer-subscribe__description
    opacity: 0.6
    @include font-styles(12px, 400, 150%, 0, $white)
</style>
