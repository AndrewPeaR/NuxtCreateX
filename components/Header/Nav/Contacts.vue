<script setup></script>

<template>
  <div class="contacts">
    <div class="contacts__item">
      <IconIPhone
        alt="phone"
        class="contacts__item-phone"
        :fontControlled="false"
        filled
      />
      <div class="contacts__item-text">
        <p class="contacts__item-title">Call us</p>
        <a href="tel:(405) 555-0128" class="contacts__item-contact"
          >(405) 555-0128</a
        >
      </div>
    </div>
    <div class="contacts__item">
      <IconChat
        alt="chat"
        class="contacts__item-chat"
        :fontControlled="false"
        filled
      />
      <div class="contacts__item-text">
        <p class="contacts__item-title">Talk to us</p>
        <a href="mailto:hello@createx.com" class="contacts__item-contact"
          >hello@createx.com</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.contacts
    display: flex

.contacts__item
    display: flex
    margin-left: 40px

.contacts__item-text
    margin-left: 12px

.contacts__item-title
    @include font-styles(14px, 700, 150%, 0, $header_gray)

.contacts__item-contact
    @include font-styles(18px, 400, 150%, 0, $dark)
</style>
