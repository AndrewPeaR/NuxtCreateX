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
  <section class="portfolio">
    <div class="portfolio__wrapper">
      <PortfolioCard
      v-for="card in cards"
      :key="card.id"
      :image="card.image"
      :title="card.title"
      :text="card.text"
      :link="card.link"
    />
    </div>
    <ElementsLearnMore 
    :text="'Explore all our works'"
    :link="'https://google.com'"
    :link_title="'View portfolio'"
  />
  </section>
  
</template>

<style lang="sass">
.portfolio__wrapper
    display: flex
    justify-content: space-between
    margin-bottom: 80px
</style>
