export const state = () => ({
  list: []
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
  }
}

export const getters = {
  getUnSubmited: (state, text) => {
    const list = []
    for (const task of state.list) {
      if (!task.isSubmited) list.push(task)
    }
    return list
  },
  getSubmited: (state, text) => {
    const list = []
    for (const task of state.list) {
      if (task.isSubmited) list.push(task)
    }
    return list
  }
}
