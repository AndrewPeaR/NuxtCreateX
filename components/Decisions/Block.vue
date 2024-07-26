<script setup>
const decisionsItems = [
  {
    id: 1,
    text: "Vitae ultrices ornare eu sed in est quisque duis id.",
  },
  {
    id: 2,
    text: "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
  },
  {
    id: 3,
    text: "Mauris odio pellentesque commodo, diam.",
  },
  {
    id: 4,
    text: "Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.",
  },
  {
    id: 5,
    text: "At pharetra libero blandit risus, fringilla sed commodo diam.",
  },
  {
    id: 6,
    text: "Integer ultricies viverra ut enim viverra ut.",
  },
];
</script>

<template>
  <section class="decisions">
    <img
      src="/assets/image/decisions-poster.png"
      alt="decisions-poster"
      class="decisions__poster"
    />
    <div class="decisions__text">
      <h2 class="section-title decisions__title">Constructive decisions</h2>
      <ul class="decisions__items">
        <li class="decisions__item" v-for="item in decisionsItems" :key="item.id">
          {{ item.text }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="sass">
.decisions
    position: relative
    display: flex
    flex-direction: row-reverse
.decisions__poster
    position: absolute
    left: 0
    top: 0
.decisions__title
    margin-bottom: 60px
.decisions__item
    display: flex
    align-items: center
    gap: 16px   
    @include font-styles(16px, 400, normal, 0, $header_gray)
    margin-bottom: 20px
.decisions__item:before
    content: url('/assets/icons/check.svg')

</style>
