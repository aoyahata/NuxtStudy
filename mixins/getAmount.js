import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
  data() {
    let Amount = 0
    return { Amount }
  },
  methods: {
    amountUpdate: async function() {
      this.Amount = await axios.get(`https://query1.finance.yahoo.com/v7/finance/chart/7203.T?range=1h&interval=1h`, {
        headers: { "Access-Control-Allow-Origin": "*"},
        data: {}
      })
        .then((res) => res.data['chart']['result'][0]['indicators']['quote'][0]['close'][0] )
        .catch((error) => {
          console.log('エラーだよ')
          error
        })
      await console.log(this.Amount)
      this.$store.commit('tasks/updateAmount', this.Amount)
    }
  }
})
