<script setup>
function alerting() {
  alert(`i'm button!`);
}
</script>

<template>
  <div>
    <div class="wrapper">
      <Header />
    </div>
    <MainBlock />
    <div class="wrapper">
      <VideoBlock style="margin: 460px 0 120px 0" />
      <CoreValuesBlock style="margin-bottom: 120px" />
      <RequestFormBlock :method="'Any method'" :action="'Any action'" />
    </div>
    <ServicesBlock style="margin-bottom: 120px" />
    <div class="wrapper">
      <PortfolioBlock style="margin: 80px 0" />
    </div>
    <div class="wrapper_gray">
      <div class="wrapper">
        <Partners style="margin-bottom: 170px" />
        <ClientsSayingBlock />
      </div>
    </div>
    <div class="background-statistics">
      <img class="background-statistics__image" src="/assets/image/statistics-bg.png" alt="statistics-bg">
      <StatisticsBlock style="margin: 180px 0" />
    </div>
    <div class="wrapper">
      <RecentNewsBlock style="margin-bottom: 80px" />
    </div>
    <DiscussDetailsBlock :action="'#'" :method="'#'" />
    <FooterBlock />
  </div>
</template>

<style lang="sass">
form[class=request-form]
  position: relative
  z-index: 3
  margin-bottom: -92px

.wrapper_gray
  background-color: $input_bg
  padding-top: 80px
  padding-bottom: 120px

.background-statistics
  position: relative

.background-statistics__image
  position: absolute
  z-index: -1
  top: -600px
  left: -750px
.pretty-wrapper
  background-color: rgba(90, 109, 123, 0.6)
  padding-top: 10px
  padding-bottom: 10px
  padding-left: 40px
  display: flex
  justify-content: space-evenly
  align-items: center
</style>
