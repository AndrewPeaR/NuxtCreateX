<script setup>
const props = defineProps([
  "color",
  "currentValue",
  "maxValue",
  "percent",
  "title",
]);
const circleText = props.percent
  ? `${props.currentValue}%`
  : `${props.currentValue}`;
const circleCurrentValue = props.percent
  ? convertToCirclePercent(props.currentValue)
  : convertToCirclePercent(findPercent(props.currentValue, props.maxValue))
  
function findPercent(currentValue, maxValue) {
      return (100 * currentValue) / maxValue;
    };
function convertToCirclePercent(currentValue) {
  return (445 * currentValue) / 100;
}
// if (props.percent) {
//     const circleCurrentValue = props.currentValue
// } else {
//     const circleCurrentValue = props.currentValue
// }
// stroke-dasharray="111.25, 445"
</script>

<template>
  <div class="pie-chart">
    <svg
      class="circle-chart"
      viewbox="0 0 148 148"
      width="148"
      height="148"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="circle-chart__background"
        fill="none"
        opacity="0.3"
        :stroke="color"
        stroke-width="6"
        cx="74"
        cy="74"
        r="71"
      />
      <circle
        class="circle-chart__circle"
        :stroke="color"
        stroke-width="6"
        :stroke-dasharray="`${circleCurrentValue}, 445`"
        stroke-linecap="round"
        fill="none"
        cx="74"
        cy="74"
        r="71"
      />
      <g class="circle-chart__info">
        <text
          class="circle-chart__percent"
          x="74"
          y="74"
          alignment-baseline="central"
          text-anchor="middle"
          font-size="32"
        >
          {{ circleText }}
        </text>
      </g>
    </svg>
    <p class="pie-chart__title">{{ title }}</p>
  </div>
</template>

<style lang="sass">
.pie-chart
    text-align: center

.pie-chart__title
    @include font-styles(14px, 400, 150%, 0, $dark)
.circle-chart
    margin-bottom: 20px
.circle-chart__circle
    -webkit-animation: circle-chart-fill 2s reverse
    animation: circle-chart-fill 2s reverse
    -webkit-transform: rotate(-90deg)
    transform: rotate(-90deg)
    -webkit-transform-origin: center
    transform-origin: center


.circle-chart__info
    -webkit-animation: circle-chart-appear 2s forwards
    animation: circle-chart-appear 2s forwards
    -webkit-transform: translateY(0.3em)
    transform: translateY(0.3em)
    opacity: 0

.circle-chart__percent
    @include font-styles(32px, 700, 150%, 0, $dark)
@-webkit-keyframes circle-chart-fill
    to
        stroke-dasharray: 0 100

@keyframes circle-chart-fill
    to
        stroke-dasharray: 0 100

@-webkit-keyframes circle-chart-appear
    to
        opacity: 1
        -webkit-transform: translateY(0)
        transform: translateY(0)

@keyframes circle-chart-appear
  to
    opacity: 1
    -webkit-transform: translateY(0)
    transform: translateY(0)
</style>
