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
    <label class="label__textarea" for="discussMessage">Message*</label>
    <textarea
        class="discuss__textarea discuss__input"
        type="text"
        placeholder="Your working email"
        name="discussMessage"
    />
    <input class="discuss__input " type="checkbox" name="discussAgree"/>
    <label for="discussAgree" class="label__checkbox">I agree to receive communications from Createx<br />Construction Bureau.</label>
  </form>
</template>

<style lang="sass">
.discuss
    background-image: url(assets/image/discuss-bg.png)
    padding: 80px 0
.discuss__card
    padding: 48px 40px
    max-width: 495px
    background-color: $white
    border-radius: 4px
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
.label__textarea
    display: block
    margin-bottom: 8px
    @include font-styles(14px, 400, 150%, 0, $header_gray)
</style>
