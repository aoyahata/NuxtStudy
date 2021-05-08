<template>
  <div class='stockContainer'>
    <StockView :amount="Amount" :firstBrand="firstBrand" :firstBar="firstBar"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  async asyncData () {
    let Amount = 0
    let firstBrand = '7203'
    let firstBar = '1mo'
    Amount = await axios
      .get(`https://query1.finance.yahoo.com/v7/finance/chart/${firstBrand}.T?range=${firstBar}&interval=${firstBar}`)
      .then((res) => res.data['chart']['result'][0]['indicators']['quote'][0]['close'][0] )
      .catch((error) => error)
    return { Amount, firstBrand, firstBar }
  }
})
</script>

<style>
.boxContainer {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
