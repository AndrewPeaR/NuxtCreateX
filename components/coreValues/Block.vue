<script setup>
const coreValueCard = [
  {
    icon: "QualityCard.svg",
    title: "Quality",
    parag:
      "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.",
  },
  {
    icon: "SafetyCard.svg",
    title: "Safety",
    parag:
      "Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.",
  },
  {
    icon: "ComfortCard.svg",
    title: "Comfort",
    parag:
      "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.",
  },
];
</script>

<template>
  <div class="core-values">
    <h2 class="section-title">We are Createx Construction Bureau</h2>
    <p class="section-description">
      We are rightfully considered to be the best construction company in the
      USA.
    </p>
    <div class="core-values-cards">
      <CoreValuesCard
        v-for="card in coreValueCard"
        :key="card.title"
        :icon="card.icon"
        :title="card.title"
        :parag="card.parag"
      />
    </div>
  </div>
</template>

<style lang="sass">
.core-values-cards
    display: flex
    justify-content: space-between
</style>
