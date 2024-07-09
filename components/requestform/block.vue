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
        required
      />
      <ElementsInputForm
        :label="'Phone'"
        :type="'phone'"
        :placeholder="'Your phone'"
        :nameInput="'phone'"
        pattern="^\+7[1-9]{10}$"
        required
      />
      <ElementsInputForm
        :label="'Message'"
        :type="'text'"
        :placeholder="'Your message'"
        :nameInput="'message'"
      />
      <ElementsMyButton :isLarge="false" :btn_title="'Send'" :isOrange="true" />
    </div>
  </form>
</template>

<style lang="sass">
.request-form
    border-radius: 4px
    text-align: center
    padding: 48px 60px
    box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03)

.request-form__title
    @include font-styles(28px, 700, 150%, 0, $dark)
    margin-bottom: 30px

.request-form__inputs
    display: flex
    justify-content: space-between
    align-items: flex-end
</style>
