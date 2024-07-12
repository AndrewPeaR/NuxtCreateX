<script setup>
function alerting() {
  alert(`i'm button!`);
}
</script>

<template>
  <div style="padding-bottom: 60px">
    <Header />

    <!-- Стили в диве только чтобы красивее было смотреть на элементы, потом он удалится -->
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
      <!-- 
    Обязательно ли всякие тэги кнопок, инпутов и прочего
    будуд называтьсяс 'Elements'? Или можно пофиксить?
    -->
      <ElementsAroundButton :type="'play'" />
      <ElementsAroundButton :type="'mute'" />
      <ElementsButton
        @click="alerting"
        :btn_title="'Outline button'"
        :isOrange="false"
        :isLarge="true"
      />
      <ElementsButton
        @click="alerting"
        :isLarge="false"
        :btn_title="'hello, world!'"
        :isOrange="true"
      />
      <ElementsButton
        @click="alerting"
        :isLarge="true"
        :btn_title="`I'm a large!`"
        :isOrange="true"
      />
    </div>
    <div class="pretty-wrapper">
      <PortfolioCard
        :image="'portfolio.png'"
        :title="'Red Finger Building'"
        :text="'Business Centers'"
        :link="'https://www.youtube.com/watch?v=dQw4w9WgXcQ'"
      />
    </div>
    <div class="wrapper">
      <CoreValuesBlock />
      <RequestformBlock :method="'Any method'" :action="'Any action'" />
      <PortfolioBlock style="margin: 80px 0" />
    </div>
    <div style="
      margin: 80px 0;
      background-color: rgba(90, 109, 123, 0.6);
      padding: 30px 100px;
    ">
      <ServicesBlock />
    </div>
    <div class="wrapper">
      <Partners style="margin-bottom: 80px;"/>     
      <RecentNewsBlock />
    </div>
  </div>
</template>

<style lang="sass">
.pretty-wrapper
  background-color: rgba(90, 109, 123, 0.6)
  padding-top: 10px
  padding-bottom: 10px
  padding-left: 40px
  display: flex
  justify-content: space-evenly
  align-items: center
</style>
