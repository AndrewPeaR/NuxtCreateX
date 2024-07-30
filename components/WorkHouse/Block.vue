<script setup>
const links = [
  {
    id: 1,
    link: "/",
    name: "Homepage",
  },
  {
    id: 2,
    link: "/work",
    name: "Work",
  },
  {
    id: 3,
    link: "/about",
    name: "Modern cottage",
  },
];
</script>

<template>
  <section class="work">
    <div class="wrapper">
      <ElementsPathlink :links="links" />
      <h2 class="section-title left work__title">Moder Cottage</h2>
      <WorkHouseSlider />
    </div>
  </section>
</template>

<style lang="sass">
.work
    margin: 80px 0 200px 0
    // margin-bottom: 200px
.work__title
    margin-bottom: 60px !important
</style>
