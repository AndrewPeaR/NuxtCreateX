<script setup>
// Реализовать через запрос, а не статику
const partners = [
  {
    id: 1,
    image: "partner1.svg",
    site: 'https://google.com'
  },
  {
    id: 2,
    image: "partner1.svg",
    site: 'https://google.com'
  },
  {
    id: 3,
    image: "partner1.svg",
    site: 'https://google.com'
  },
  {
    id: 4,
    image: "partner1.svg",
    site: 'https://google.com'
  },
  {
    id: 5,
    image: "partner1.svg",
    site: 'https://google.com'
  },
  {
    id: 6,
    image: "partner1.svg",
    site: 'https://google.com'
  },
];
</script>

<template>
  <section class="partners">
    <h2 class="partners__title">Supported by 12+ partners</h2>
    <ul class="partners__items">
      <li class="partners__item"
        v-for="partner in partners"
        :key="partner.id"
        >
        <NuxtLink :to="partner.site"
          >
          <ElementsIcon :filled="true" :fontControlled="false" :name="partner.image"/>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style lang="sass">
.partners
  margin-bottom: 170px
.partners__title
    text-align: center
    margin-bottom: 60px
    @include font-styles(46px, 700, 130%, 0, $dark)

.partners__items
    display: flex
    justify-content: space-between

.partners__item
    list-style-type: none
    @include fast-transition
    filter: grayscale(100%)
.partners__item:hover
    filter: grayscale(0)
</style>
