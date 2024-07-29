<script setup>
// const checkmark = `<IconTableCheckmark alt="TableCheckmark" :fontControlled="false" filled/>`
</script>

<template>
  <section class="pricing-wrapper">
    <div class="wrapper">
      <div class="pricing">
        <h2 class="section-title">Pricing</h2>
        <p class="section-description">
          We offer you three categories of construction.
        </p>
        <div class="pricing__table">
          <PricingTable />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass">
.pricing-wrapper
  overflow: hidden
  position: relative
  z-index: 5
  background-color: $input-bg
  padding: 80px 0 140px 0
.pricing-wrapper::before
  content: url(assets/image/PricingBG.png)
  position: absolute
  z-index: -1
  bottom: 180px
  left: -700px
</style>
