<template>
  <div class='boxContainer'>
    <StockView :amount="Amount"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { mapMutations } from 'vuex'

export default Vue.extend({
  async asyncData () {
    let Amount = 0
    Amount = await axios
      .get(`https://query1.finance.yahoo.com/v7/finance/chart/7203.T?range=1d&interval=1d`)
      .then((res) => res.data['chart']['result'][0]['indicators']['quote'][0]['close'][0] )
      .catch((error) => error)
    return { Amount }
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
