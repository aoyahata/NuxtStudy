<template>
  <div class='box'>
    <h1>StockView</h1>
    <p>brand</p>
    <input value="7203" placeholder="銘柄番号を入力してください" @keyup.enter="updateBrand" @blur="amountUpdate()">
    <p>bar</p>
    <select v-model="selected" @change="updateBar" @blur="amountUpdate()">
      <option>1m</option>
      <option>1h</option>
      <option>1d</option>
      <option>1mo</option>
      <option>1y</option>
    </select>
    <p>state</p>
    <p>{{ Amount }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import Mixins from '../mixins/getAmount'

export default Vue.extend({
  name: "ViewTable",
  methods: {
    stateAmount(): Number {
      return this.$store.getters['tasks/getAmount']
    },
    updateBrand(e:any) {
      this.$store.commit('tasks/updateBrand', e.target.value)
    },
    updateBar() {
      this.$store.commit('tasks/updateBar', this.selected)
    }
  },
  props: {
    Amount: {
      type: Number,
      default: 0,
      required: true
    }
  },
  watch: {
    Amount: function() {
      this.stateAmount()
    },
    brand: function() {},
    bar: function() {}
  },
  mixins: [Mixins]
})
</script>

<style>
</style>

