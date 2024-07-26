<script setup>

</script>

<template>
  <section class="portfolio">
    <h2 class="section-title left">Browse our selected projects<br />and learn more about our work</h2>
    <div class="portfolio__wrapper">
      <PortfolioSlider />
    </div>
    <ElementsLearnMore 
    :text="'Explore all our works'"
    :link="'https://google.com'"
    :link_title="'View portfolio'"
  />
  </section>
  
</template>

<style lang="sass">
.portfolio
  margin: 80px 0
.portfolio__wrapper
    margin-bottom: 80px
    margin-top: 60px
</style>
