<script setup>
function alerting() {
  alert(`i'm button!`);
}
</script>

<template>
  <div style="padding-bottom: 60px">
    <div class="wrapper">
      <Header />
    </div>
    <MainBlock />
    <div class="wrapper">
      <CoreValuesBlock style="margin: 180px 0 120px 0;"/>
      <RequestformBlock :method="'Any method'" :action="'Any action'"/>
    </div>
    <ServicesBlock style="margin-bottom: 120px;"/>
    <div class="wrapper">
      <PortfolioBlock style="margin: 80px 0" />
      <Partners style="margin-bottom: 80px;"/>     
      <RecentNewsBlock />
    </div>
  </div>
</template>

<style lang="sass">
form[class=request-form]
  position: relative
  z-index: 3
  margin-bottom: -92px

.pretty-wrapper
  background-color: rgba(90, 109, 123, 0.6)
  padding-top: 10px
  padding-bottom: 10px
  padding-left: 40px
  display: flex
  justify-content: space-evenly
  align-items: center
</style>
