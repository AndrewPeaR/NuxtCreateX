<script setup>

function alerting() {
  alert(`i'm button!`);
}

</script>

<template>
  <Header />
  
  <div
    style="
      background-color: rgba(90, 109, 123, 0.6);
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 40px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    "
  >
    <ElementsAroundButton :type="'play'"/>
    <ElementsAroundButton :type="'mute'"/>
    <ElementsMyButton @click="alerting" :btn_title="'Outline button'" />
    <ElementsMyButton @click="alerting" :btn_title="'hello, world!'" :isOrange="true" />
    <ServicesBlock />
  </div>

  <CoreValuesBlock />
</template>

<style lang="sass"></style>
