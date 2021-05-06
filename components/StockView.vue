<template>
  <div class='box'>
    <h1>StockView</h1>
    <input placeholder="銘柄番号を入力してください" v-model="inputBrand" @change="updateBrand">
    <p>brand</p>
    <select v-model="selected" @change="updateBar">
      <option>1m</option>
      <option>1h</option>
      <option>1d</option>
      <option>1mo</option>
      <option>1y</option>
    </select>
    <p>bar</p>
    <button @click="amountUpdate()">更新</button>
    <p>株価：{{ Amount }}</p>
    <p>銘柄：{{ this.inputBrand }}</p>
    <p>期間：{{ this.selected }}</p>
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
    updateBrand() {
      this.$store.commit('tasks/updateBrand', this.inputBrand)
    },
    updateBar() {
      this.$store.commit('tasks/updateBar', this.selected)
    }
  },
  props: {
    amount: {
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

