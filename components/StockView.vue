<template>
  <div class='box'>
    <h1>StockView</h1>
    <input  placeholder="銘柄番号を入力してください" @keyup.enter="updateBrand">
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
    <p>props</p>
    <p>{{ amount }}</p>
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

