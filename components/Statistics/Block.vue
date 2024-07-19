<script setup></script>

<template>
  <div class="statistics">
    <div class="wrapper">
      <h2 class="section-title">Some facts and figures</h2>
      <div class="statistics__wrapper">
        <ElementsPieChart
          :color="'#F89828'"
          :maxValue="150"
          :currentValue="50"
          :percent="true"
          :title="'Totally satisfied clients'"
        />
        <ElementsPieChart
          :color="'#F52F6E'"
          :maxValue="28"
          :currentValue="20"
          :percent="false"
          :title="'Years of experience'"
        />
        <ElementsPieChart
          :color="'#5A87FC'"
          :maxValue="13000"
          :currentValue="9452"
          :percent="false"
          :title="'Working hours spent'"
        />
        <ElementsPieChart
          :color="'#03CEA4'"
          :maxValue="100"
          :currentValue="100"
          :percent="true"
          :title="'Succeeded projects'"
        />
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.statistics__wrapper
    display: flex
    justify-content: center
    gap: 48px
</style>
