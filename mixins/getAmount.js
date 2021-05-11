import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
  data() {
    let Amount = 0
    let selected = '1mo'
    //TODO:ここにinputBrandを入れても初期値が変わらないのはなぜ
    return { Amount, selected }
  },
  methods: {
    amountUpdate: async function() {
      const stateTasks = this.$store.state.tasks
      await console.log("============stateTasks===============")
      await console.log(stateTasks)
      this.Amount = await axios.get(`/api/v7/finance/chart/${stateTasks.brand}.T?range=${stateTasks.bar}&interval=${stateTasks.bar}`, {
        headers: { "Access-Control-Allow-Origin": "*"},
        data: {}
      })
        .then((res) => res.data['chart']['result'][0]['indicators']['quote'][0]['close'][0] )
        .catch((error) => {
          console.log('axiosエラーだよ')
          error
        })
      await console.log("============Amount===============")
      await console.log(this.Amount)
      await console.log("============stateTasks.brand===============")
      await console.log(stateTasks.brand)
      await console.log(stateTasks.bar)
      this.$store.commit('tasks/updateAmount', this.Amount)
    },
    checkForm() {
      let canUpdate = false
      if (!this.inputBrand || isNaN(this.inputBrand)) {
        this.Validation.result="数値を入力してください"
      } else {
        canUpdate = true
      }

      if (canUpdate) {
        this.Validation.result="success"
        this.amountUpdate()
      }
    }
  }
})
