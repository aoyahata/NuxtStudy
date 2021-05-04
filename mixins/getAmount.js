import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
  data() {
    let Amount = 0
    let selected = '1d'
    return { Amount, selected }
  },
  methods: {
    amountUpdate: async function() {
      const stateTasks = this.$store.state.tasks
      this.Amount = await axios.get(`/api/v7/finance/chart/${stateTasks.brand}.T?range=${stateTasks.bar}&interval=${stateTasks.bar}`, {
        headers: { "Access-Control-Allow-Origin": "*"},
        data: {}
      })
        .then((res) => res.data['chart']['result'][0]['indicators']['quote'][0]['close'][0] )
        .catch((error) => {
          console.log('axiosエラーだよ')
          error
        })
      await console.log(this.Amount)
      this.$store.commit('tasks/updateAmount', this.Amount)
    }
  }
})
