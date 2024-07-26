<script setup>
definePageMeta({
  layout: 'default'
})

function alerting() {
  alert(`i'm button!`);
}
</script>

<template>
  <div>
    <ElementsUpward />
    <MainBlock />
    <div class="wrapper">
      <VideoBlock />
      <CoreValuesBlock />
      <RequestFormBlock :method="'Any method'" :action="'Any action'" />
    </div>
    <ServicesBlock />
    <div class="wrapper">
      <PortfolioBlock />
    </div>
    <div class="gray-wrapper">
      <div class="wrapper">
        <Partners />
        <ClientsSayingBlock />
      </div>
    </div>
    <div class="background-statistics">
      <img class="background-statistics__image" src="/assets/image/statistics-bg.png" alt="statistics-bg">
      <StatisticsBlock />
    </div>
    <div class="wrapper">
      <RecentNewsBlock />
    </div>
    <DiscussDetailsBlock :action="'#'" :method="'#'" />
  </div>
</template>

<style lang="sass">
form[class=request-form]
  position: relative
  z-index: 3
  margin-bottom: -92px

.background-statistics
  position: relative

.background-statistics__image
  position: absolute
  z-index: -1
  top: -600px
  left: -750px
</style>
