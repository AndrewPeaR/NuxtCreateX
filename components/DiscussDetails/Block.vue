<script setup>
const props = defineProps(["action", "method"]);
</script>

<template>
  <section class="discuss">
    <div class="wrapper">
      <DiscussDetailsFormCard :action="action" :method="method" />
    </div>
  </section>
</template>

<style lang="sass"></style>
