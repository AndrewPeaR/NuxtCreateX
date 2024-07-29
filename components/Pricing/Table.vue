<script setup></script>

<template>
  <table class="table-pricing">
    <thead>
      <tr>
        <th>Items</th>
        <th>
          <div class="table-pricing__spacer">Basic <span>$20 per m2</span></div>
        </th>
        <th>
          <div class="table-pricing__spacer">
            Standart <span>$30 per m2</span>
          </div>
        </th>
        <th>
          <div class="table-pricing__spacer">
            Business <span>$40 per m2</span>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Installation plan</td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
      </tr>
      <tr>
        <td>Planning solutions (2-3 options)</td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
      </tr>
      <tr>
        <td>Lighting plan</td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
      </tr>
      <tr>
        <td>Flooring plan</td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
      </tr>
      <tr>
        <td>Heating floor laying scheme</td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
      </tr>
      <tr>
        <td>Air conditioner zones layout</td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
      </tr>
      <tr>
        <td>3D visualization of all rooms</td>
        <td>simplified</td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
      </tr>
      <tr>
        <td>Visualization of each room (3-4 angles)</td>
        <td></td>
        <td></td>
        <td>
          <IconTableCheckmark
            alt="TableCheckmark"
            :fontControlled="false"
            filled
          />
        </td>
      </tr>
      <tr>
        <td>Terms</td>
        <td>10 days</td>
        <td>20 days</td>
        <td>30 days</td>
      </tr>
      <tr>
        <td></td>
        <td>
          <ElementsButton
            :btn_title="'Send request'"
            :isOutline="true"
            :isOrange="true"
            :isLarge="false"
            :isSmall="true"
          />
        </td>
        <td>
          <ElementsButton
            :btn_title="'Send request'"
            :isOutline="true"
            :isOrange="true"
            :isLarge="false"
            :isSmall="true"
          />
        </td>
        <td>
          <ElementsButton
            :btn_title="'Send request'"
            :isOutline="true"
            :isOrange="true"
            :isLarge="false"
            :isSmall="true"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="sass">
.table-pricing
  border-spacing: 0
  width: 100%
  padding: 32px 0 32px
  background-color: $white
  border-radius: 4px
  border: 1px solid $form_stroke
  @include shadow
.table-pricing__spacer
  display: flex
  flex-direction: column
  align-items: center
  margin: 0 auto
  width: 105px
  padding-bottom: 24px
.table-pricing thead tr th
  text-transform: uppercase
  @include font-styles(24px, 700, 150%, 0, $dark)
.table-pricing thead tr th span
  text-transform: none
  @include font-styles(18px, 700, 150%, 0, $accent)
.table-pricing tr > th, .table-pricing tr > td
  text-align: center
.table-pricing tbody tr > td
  padding: 16px 0 16px 0
.table-pricing tbody tr > td:first-child
  padding-left: 24px
.table-pricing tbody tr:last-child > td
  padding: 32px 0 0 0
.table-pricing tr > th:first-child
  padding-left: 24px
  text-transform: none
  font-size: 18px
.table-pricing tr > th:first-child, .table-pricing tr > td:first-child
  text-align: left
.table-pricing tbody tr:nth-child(odd)
  background-color: $input_bg
</style>
