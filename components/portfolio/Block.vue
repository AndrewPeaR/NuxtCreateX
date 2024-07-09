<script setup>
const cards = [
  {
    id: 1,
    image: "portfolio.png",
    title: "Red Finger Building",
    text: "Business Centers",
    link: "https://google.com",
  },
  {
    id: 2,
    image: "portfolio2.png",
    title: "Cubes Building",
    text: "Business Centers",
    link: "https://google.com",
  },
  {
    id: 3,
    image: "portfolio3.png",
    title: "The Pencil Building",
    text: "Stores & Malls",
    link: "https://google.com",
  },
];
</script>

<template>
  <div class="portfolio">
    <PortfolioCard
      v-for="card in cards"
      :image="card.image"
      :title="card.title"
      :text="card.text"
      :link="card.link"
    />
  </div>
</template>

<style lang="sass">
.portfolio
    display: flex
    justify-content: space-between
</style>
