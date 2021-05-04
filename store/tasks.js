import axios from 'axios'
export const state = () => ({
  list: [],
  Amount: 0,
  bar: '1d',
  brand: '7203',
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text: text,
      isSubmited: false
    })
  },
  reverseStatus(state, task) {
    task.isSubmited = !task.isSubmited
  },
  updateAmount(state, amount) {
    state.Amount = amount
  },
  getAmount(state) {
    return state.Amount
  },
  updateBrand(state, text) {
    state.brand = text
  },
  updateBar(state, selected) {
    state.bar = selected
  }
}

export const getters = {
  getUnSubmited: (state) => {
    const list = []
    for (const task of state.list) {
      if (!task.isSubmited) list.push(task)
    }
    return list
  },
  getSubmited: (state) => {
    const list = []
    for (const task of state.list) {
      if (task.isSubmited) list.push(task)
    }
    return list
  }
}
