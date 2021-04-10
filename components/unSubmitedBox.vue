<template>
  <div class='box'>
    <h1>unSubmitedBox</h1>
    <ul>
      <li v-for="(task, key) in list" :key="key">
        <button @click="submit(task)">Submit</button>
        <span>{{ task.text }}</span>
      </li>
    </ul>
    <input placeholder="何か入力する" @keyup.enter="addTask">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  computed: {
    list(): any[] {
      // const list = []
      // for (let task of this.$store.state.tasks.list) {
      //   if (!task.isSubmited) list.push(task)
      // }
      // return list
      return this.$store.getters['tasks/getUnSubmited']
    }
  },
  methods: {
    addTask(e:any) {
      this.$store.commit('tasks/add', e.target.value)
    },
    ...mapMutations({
      submit: 'tasks/reverseStatus'
    })
  }
})
</script>

<style>
</style>

