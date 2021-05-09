import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
  data() {
    const stateTasks = this.$store.state.tasks
    let Amount = stateTasks.Amount ? stateTasks.Amount : this.amount
    let brand = stateTasks.brand ?  stateTasks.brand : this.firstBrand
    let selected = {bar: stateTasks.bar ? stateTasks.bar : this.firstBar}
    return { Amount, brand, selected }
  },
  methods: {
    amountUpdate: async function() {
      this.Amount = await axios.get(`/api/v7/finance/chart/${this.brand}.T?range=${this.selected.bar}&interval=${this.selected.bar}`, {
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
