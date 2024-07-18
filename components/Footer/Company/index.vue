<script setup>
const socials = [
  {
    id: 1,
    icon: "whatsapp.svg",
    link: "https://google.com",
  },
  {
    id: 2,
    icon: "telegram.svg",
    link: "https://google.com",
  },
  {
    id: 3,
    icon: "facebook.svg",
    link: "https://google.com",
  },
  {
    id: 4,
    icon: "twitter.svg",
    link: "https://google.com",
  },
  {
    id: 5,
    icon: "youtube.svg",
    link: "https://google.com",
  },
];
</script>

<template>
  <div class="footer-company">
    <div class="footer-company__links">
      <NuxtLink :to="'#'"
        ><IconWhiteLogoCreateX alt="CreateX" :fontControlled="false" filled
      /></NuxtLink>
      <div class="footer-company__social">
        <NuxtLink v-for="social in socials" :key="social.id" :to="social.link">
          <ElementsIcon
            class="footer-company__social-icon"
            :name="social.icon"
            :filled="true"
            :fontControlled="false"
          />
        </NuxtLink>
      </div>
    </div>
    <p class="footer-company__description">
      Createx Construction Bureau has been successfully operating in the USA
      construction market since 2000. We are proud to offer you quality
      construction and exemplary service. Our mission is to set the highest
      standards for construction sphere.
    </p>
  </div>
</template>

<style lang="sass">
.footer-company
    grid-area: A
.footer-company__links
    display: flex
    justify-content: space-between
    margin-bottom: 24px
.footer-company__social-icon
    margin-left: 16px
.footer-company__description
    opacity: 0.6
    @include font-styles(14px, 400, 150%, 0, $white)
</style>
