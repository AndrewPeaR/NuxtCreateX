<script setup>

</script>

<template>
  <div class="accordion">
    <div class="accordion__item">
        <input
          type="radio"
          name="accordion__item"
          id="accordion__item-1"
          class="accordion__checkbox"
          checked
        />
        <button class="accordion__button">
            <div  class="line-wrapper">
                <div class="horizontal"></div>
                <div class="vertical"></div>
            </div>
        </button>
      <label for="accordion__item-1" class="accordion__title"
        >Interior design of apartments</label
      >
      <div class="accordion__content">
        Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet
        elementum faucibus dignissim purus. Fusce parturient diam magna
        ullamcorper morbi semper massa ac facilisis.
      </div>
    </div>

    <div class="accordion__item">
      <input
        type="radio"
        name="accordion__item"
        id="accordion__item-2"
        class="accordion__checkbox"
      />
      <button class="accordion__button">
            <div  class="line-wrapper">
                <div class="horizontal"></div>
                <div class="vertical"></div>
            </div>
        </button>
      <label for="accordion__item-2" class="accordion__title"
        >Interior design of private houses</label
      >
      <div class="accordion__content">
        Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet
        elementum faucibus dignissim purus. Fusce parturient diam magna
        ullamcorper morbi semper massa ac facilisis.
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.accordion__item
    position: relative
    max-width: 420px
    margin-bottom: 24px
    padding-left: 43px

.accordion__title
    display: block
    @include font-styles(28px, 700, 150%, 0, $dark)
    margin-bottom: 12px

.accordion__checkbox
    position: absolute
    z-index: -5
    opacity: 0
    top: 30px
    left: 0

.accordion__checkbox:checked ~ .accordion__content
    max-height: 110px
    @include transition

.accordion__content
    max-height: 0
    overflow: hidden
    @include transition
    @include font-styles(16px, 400, 160%, 0, $accent)


.accordion__button
    position: absolute
    top: 30px
    left: 0

    height: 24px
    width: 24px

.line-wrapper
    position: relative

.horizontal, .vertical 
  width: 100%
  height: 2px
  background-color: $orange
  border-radius: 100%
  pointer-events: none
  @include transition

.vertical 
  position: relative
  bottom: 2px
  transform: rotate(90deg)

.accordion__checkbox:checked ~ .accordion__button .vertical
  transform: rotate(180deg)
</style>
