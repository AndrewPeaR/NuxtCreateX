<script setup>
const props = defineProps(["action", "method"]);
</script>

<template>
  <section class="discuss">
    <div class="wrapper discuss__wrapper">
      <DiscussDetailsFormCard :action="action" :method="method" />
    </div>
  </section>
</template>

<style lang="sass">
.discuss__wrapper
  display: flex
  justify-content: flex-end
</style>
