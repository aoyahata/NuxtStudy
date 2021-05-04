<template>
  <div class='stockView'>
    <h1>StockView</h1>
    <input placeholder="銘柄番号を入力してください" :value="defaultBrand" @input="updateBrand">
    <select v-model="selected" @change="updateBar">
      <option>1m</option>
      <option>2m</option>
      <option>5m</option>
      <option>15m</option>
      <option>30m</option>
      <option>60m</option>
      <option>90m</option>
      <option>1h</option>
      <option>1d</option>
      <option>5d</option>
      <option>1wk</option>
      <option>1mo</option>
      <option>3mo</option>
    </select>
    <button @click="amountUpdate()">更新</button>
    <p v-if="toggleAmount">{{ amount.toLocaleString() }}円</p>
    <p v-if="!toggleAmount">{{ Amount.toLocaleString() }}円</p>
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
    }
  },
  data: function(){
    return {
      show: this.$store.state.tasks.Amount === 0
    }
  },
  methods: {
    stateAmount(): Number {
      return this.$store.getters['tasks/getAmount']
    },
    updateBrand(e:any) {
      this.$store.commit('tasks/updateBrand', e.target.value)
    },
    updateBar() {
      // @ts-ignore
      this.$store.commit('tasks/updateBar', this.selected)
    }
  },
  computed: {
    defaultBrand() {
      return this.$store.state.tasks.brand
    },
    toggleAmount() {
      return this.$store.state.tasks.Amount === 0
    }
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

