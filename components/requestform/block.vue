<script setup>
const props = defineProps([
  'method', 'action'
])
</script>

<template>
  <form :action="action" :method="method" class="request-form">
    <h3 class="request-form__title">Want to know more? Ask us a question:</h3>
    <div class="request-form__inputs">
      <ElementsInputForm
        :label="'Name'"
        :type="'text'"
        :placeholder="'Your name'"
        :nameInput="'firstname'"
        :hardWidth="false"
        required
      />
      <ElementsInputForm
        :label="'Phone'"
        :type="'phone'"
        :placeholder="'Your phone'"
        :nameInput="'phone'"
        pattern="^\+7[1-9]{10}$"
        :hardWidth="false"
        required
      />
      <ElementsInputForm
        :label="'Message'"
        :type="'text'"
        :placeholder="'Your message'"
        :nameInput="'message'"
        :hardWidth="true"
      />
      <ElementsButton :isLarge="false" :isOutline="false" :btn_title="'Send'" :isOrange="true" />
    </div>
  </form>
</template>

<style lang="sass">
.request-form
    background-color: $white
    border-radius: 4px
    text-align: center
    padding: 48px 60px
    @include fast-transition
    @include shadow

.request-form__title
    @include font-styles(28px, 700, 150%, 0, $dark)
    margin-bottom: 30px

.request-form__inputs
    display: flex
    justify-content: space-between
    align-items: flex-end
</style>
