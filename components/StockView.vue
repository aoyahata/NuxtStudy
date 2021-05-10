<template>
  <div class='stockView'>
    <h1>StockView</h1>
    <input placeholder="銘柄番号を入力してください" :value="defaultBrand" @input="updateBrand">
    <select v-model="selected" @change="updateBar">
      <option v-for="(bars, key) in barsList" :key="key" :value="bars">
        {{ bars.bar }}
      </option>
    </select>
    <button @click="amountUpdate()">更新</button>
    <!-- <p v-if="toggleAmount">{{ amount.toLocaleString() }}円</p>
    <p v-if="!toggleAmount">{{ Amount.toLocaleString() }}円</p> -->
    <p>{{ Amount.toLocaleString() }}円</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Mixins from '../mixins/getAmount'

export default Vue.extend({
  name: "stockView",
  props: {
    amount: {
      type: Number,
      default: 0,
      required: true
    },
    firstBrand: {
      type: String,
      default: 0,
      required: true
    },
    firstBar: {
      type: String,
      default: 0,
      required: true
    }
  },
  data: function(){
    return {
      show: this.$store.state.tasks.Amount === 0,
      barsList: [
        {bar: '1m'},
        {bar: '2m'},
        {bar: '5m'},
        {bar: '15m'},
        {bar: '30m'},
        {bar: '90m'},
        {bar: '1h'},
        {bar: '1d'},
        {bar: '5d'},
        {bar: '1wk'},
        {bar: '1mo'},
        {bar: '3mo'},
      ]
    }
  },
  methods: {
    stateAmount(): Number {
      return this.$store.getters['tasks/getAmount']
    },
    updateBrand(e:any) {
      this.$store.commit('tasks/updateBrand', e.target.value)
      // @ts-ignore
      this.brand = e.target.value
    },
    updateBar() {
      // @ts-ignore
      this.$store.commit('tasks/updateBar', this.selected.bar)
    }
  },
  computed: {
    defaultBrand() {
      let stateBrand = this.$store.state.tasks.brand
      return stateBrand ? stateBrand : this.firstBrand
    },
    toggleAmount() {
      return this.$store.state.tasks.Amount === 0
    },

  },
  watch: {
    Amount: function() {
      // @ts-ignore
      this.stateAmount()
    }
  },
  mixins: [Mixins]
})
</script>

<style>
</style>

