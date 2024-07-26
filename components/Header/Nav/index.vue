<script setup>
const routes = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About us",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Work",
    path: "/work",
  },
  {
    id: 5,
    name: "News",
    path: "/news",
  },
  {
    id: 6,
    name: "Contacts",
    path: "/contacts",
  },
];

const router = useRoute();
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li
        class="nav__item"
        v-for="route in routes"
        :key="route.id"
      >
        <NuxtLink v-if="route.id === 1" class="nav__link" :to="route.path">
          <IconLogoCreateX alt="CreateX" :fontControlled="false" filled/>
        </NuxtLink>
        <NuxtLink v-else class="nav__link" :class="router.name === route.path.replace('/', '') ? 'nav__link_active' : ''" :to="route.path">
          {{ route.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="sass">
.nav__list
    display: flex

.nav__item
    @include fast-transition
    margin-right: 40px
    opacity: 1
.nav__item:hover
    opacity: 0.7

.nav__link
    @include font-styles(16px, 700, 160%, 0, $header_gray)
.nav__link_active
    color: $orange

.nav__item:nth-child(1)
    margin-right: 60px
    display: flex
    align-items: center
</style>
