<template>
  <div class='box'>
    <h1>StockView</h1>
    <input />
    <select>
      <option>1d</option>
      <option>1mo</option>
      <option>1y</option>
    </select>
    <button @click="amountUpdate()">更新</button>
    <h>props</h>
    <h>{{ amount }}</h>
    <h>state</h>
    <h>{{ stateAmount }}</h>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import Mixins from '../mixins/getAmount'

export default Vue.extend({
  name: "ViewTable",
  computed: {
    stateAmount(): Number {
      return this.$store.getters['tasks/getAmount']
    }
  },
  props: {
    amount: {
      type: Number,
      default: 0,
      required: true
    }
  },
  mixins: [Mixins]
})
</script>

<style>
</style>

