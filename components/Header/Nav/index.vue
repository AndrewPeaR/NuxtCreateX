<script setup></script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <NuxtLink class="nav__link" :to="'#'"
          ><IconLogoCreateX alt="CreateX" :fontControlled="false" filled
        /></NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink class="nav__link" :to="'#'">About Us</NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink class="nav__link" :to="'#'">Services</NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink class="nav__link" :to="'#'">Work</NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink class="nav__link" :to="'#'">News</NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink class="nav__link" :to="'#'">Contacts</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="sass">
.nav__list
    display: flex
    align-items: center

.nav__item
    @include fast-transition
    margin-right: 40px
    opacity: 1
.nav__item:hover
    opacity: 0.7

.nav__link
    @include font-styles(16px, 700, 160%, 0, $header_gray)

.nav__item:nth-child(1)
    margin-right: 60px
    display: flex
    align-items: center
</style>
