<script setup>
const coreValueCard = [
  {
    id: 1,
    icon: "QualityCard.svg",
    title: "Quality",
    parag:
      "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.",
  },
  {
    id: 2,
    icon: "SafetyCard.svg",
    title: "Safety",
    parag:
      "Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.",
  },
  {
    id: 3,
    icon: "ComfortCard.svg",
    title: "Comfort",
    parag:
      "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.",
  },
];
</script>

<template>
  <section class="core-values">
    <h2 class="section-title">Our core values</h2>
    <p class="section-description">
      Our mission is to set the highest standards for construction sphere.
    </p>
    <div class="core-values-cards">
      <CoreValuesCard
        v-for="card in coreValueCard"
        :key="card.id"
        :icon="card.icon"
        :title="card.title"
        :parag="card.parag"
      />
    </div>
  </section>
</template>

<style lang="sass">
.core-values-cards
    display: flex
    justify-content: space-between
</style>
