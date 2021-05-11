<template>
  <div class='box'>
    <h1>StockView</h1>
    <p>{{ Validation.result }}</p>
    <form @submit.prevent>
      <label>brand</label>
      <input placeholder="銘柄番号を入力してください" :value="inputBrand" @input="inputBrand = $event.target.value" @change="updateBrand">
      <label>bar</label>
      <select v-model="selected" @change="updateBar">
        <option v-for="bar in barList" :value="bar.range" :key="bar.id">
            {{ bar.range }}
        </option>
      </select>
    </form>
    <button type='submit' @click='checkForm()'>更新</button>
    <p>state</p>
    <!-- this.stateAmount()をwatchしているため、amoutUpdateされたあとのAmountを参照している-->
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
  data() {
    return {
      barList: [
        { id: 1, range: '1m' },
        { id: 2, range: '1h' },
        { id: 3, range: '1d' },
        { id: 4, range: '1mo' },
        { id: 5, range: '1y' }
      ],
      //ここに初期値入れるとエラーもでなくなる
      inputBrand: 7203,
      selected: '1d',
      Validation: {
        result: "",
      }
    }
  },
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

