<script setup></script>

<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__wrapper">
        <FooterCompany />
        <FooterSubscribe />
        <FooterContacts />
        <FooterWhoWeAre />
        <FooterExperience />
      </div>
      <p class="footer__copyright">
        © All rights reserved. Made with <IconMadeWithHeart
          alt="Heart"
          :fontControlled="false"
          filled
        /> by Createx Studio 
      </p>
    </div>
  </footer>
</template>

<style lang="sass">
.footer
    background-color: $dark
    padding: 80px 0
.footer__wrapper
    display: grid
    grid-template-areas: "A B C" "D F G"
    grid-template-columns: 40% auto 40%
    grid-template-rows: repeat(2, 1fr)
    row-gap: 50px
    margin-bottom: 60px
// Незнаю, правильно ли так определять стили для мини заголовков в футере
// Переопределять одно и тоже каждый раз мало хочется как-то
.footer__title
    margin-bottom: 13px
    text-transform: uppercase
    @include font-styles(16px, 700, 150%, 1px, $white)
.footer__items
    display: flex
    flex-direction: column
.footer__item
    margin-bottom: 5px
    @include font-styles(16px, 400, 160%, 0, $white)
.footer__link
    color: $white
    opacity: 0.6
.footer__link_capitalize
    text-transform: capitalize
.footer__copyright
    display: flex
    gap: 5px
    @include font-styles(12px, 400, 150%, 0, $white)
</style>
