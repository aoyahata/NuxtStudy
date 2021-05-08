import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
  data() {
    const stateTasks = this.$store.state.tasks
    let Amount = stateTasks.Amount ? stateTasks.Amount : this.amount
    let selected = {bar: stateTasks.bar ? stateTasks.bar : this.firstBar}
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
      this.$store.commit('tasks/updateAmount', this.Amount)
    }
  }
})
