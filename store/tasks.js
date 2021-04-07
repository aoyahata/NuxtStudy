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
  submit(state, task) {
    task.isSubmited = true
  },
  unSubmit(state, task) {
    task.isSubmited = false
  }
}

export const getters = {
  // getUnSubmited: (state, text) => {
  //   const list = []
  //   for (const task of state.list) {
  //     if (!task.isSubmited) list.push(task)
  //   }
  //   return list
  // }
  // getSumited: (state, text) => {
  //   return 'The' + '後藤' + text
  // }
  // getUnSubmited: state => state.list.filter(t => !t.isSubmited)
}
