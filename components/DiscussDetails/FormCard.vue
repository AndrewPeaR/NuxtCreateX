<script setup>
const props = defineProps(["action", "method"]);
</script>

<template>
  <form :action="action" :method="method" class="discuss__card">
    <h2 class="discuss__title">A quick way to discuss details</h2>
    <ElementsInputForm
      class="discuss__input"
      :label="'Name*'"
      :type="'text'"
      :placeholder="'Your name'"
      :nameInput="'discussName'"
      :hardWidth="true"
      required
    />
    <ElementsInputForm
      class="discuss__input"
      :label="'Phone*'"
      :type="'phone'"
      pattern="^\+7[1-9]{10}$"
      :placeholder="'Your phone number'"
      :nameInput="'discussPhone'"
      :hardWidth="true"
      required
    />
    <ElementsInputForm
      class="discuss__input"
      :label="'Email'"
      :type="'email'"
      :placeholder="'Your working email'"
      :nameInput="'discussEmail'"
      :hardWidth="true"
    />
    <label class="discuss__label-textarea" for="discussMessage">Message*</label>
    <textarea
        class="discuss__textarea discuss__input"
        type="text"
        placeholder="Your working email"
        name="discussMessage"
        id="discussMessage"
    />
    <div class="discuss__checkbox">
      <input id="discussAgree" class="discuss__input-checkbox" type="checkbox" name="discussAgree"/>
      <label for="discussAgree" class="discuss__label-checkbox">I agree to receive communications from Createx<br />Construction Bureau.</label>
    </div>
    <div class="discuss__button">
      <ElementsButton 
        :btn_title="'Send request'"
        :isOutline="false"
        :isOrange="true"
        :isLarge="false"
        type="submit"
    />
    </div>
  </form>
</template>

<style lang="sass">
.discuss
    background-image: url(assets/image/discuss-bg.png)
    background-size: cover
    padding: 80px 0
.discuss__card
    padding: 48px 40px
    max-width: 495px
    background-color: $white
    border-radius: 4px
    border: 1px solid $form_stroke
    @include shadow

.discuss__title
    margin-bottom: 24px
    @include font-styles(28px, 700, 150%, 0, $dark)
.discuss__input
    margin-bottom: 20px
.discuss__textarea
    @include font-styles(14px, 400, 150%, 0, $placeholder)
    background-color: $input_bg
    border: 1px solid $input_stroke
    border-radius: 4px
    padding: 12px 16px 12px 16px
    @include fast-transition
    width: 415px
    resize: none
.discuss__label-textarea
    display: block
    margin-bottom: 8px
    @include font-styles(14px, 400, 150%, 0, $header_gray)
.discuss__checkbox
  display: flex
  align-items: flex-start
.discuss__input-checkbox
  appearance: none
  position: relative
  border-radius: 3px
  margin-right: 12px
  height: 16px
  width: 16px
  cursor: pointer
  background-color: $input_bg
  border: 1px solid $input_stroke
  @include fast-transition
.discuss__input-checkbox:checked
  border: none
  background-color: $orange
.discuss__input-checkbox::before
  content: ''
  position: absolute
  top: 2px
  left: 6px
  width: 4px
  height: 10px
  border: 3px solid transparent
  border-left: none
  border-top: none
  transform: rotate(45deg)
.discuss__input-checkbox:checked::before
  border-color: $white
.discuss__button
    text-align: center
    margin-top: 20px
</style>
