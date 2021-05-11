<template>
  <div class='box'>
    <h1>SubmitedBox</h1>
    <ul>
      <li v-for="(task, key) in list" :key="key">
        <button @click="unSubmit(task)">unSubmit</button>
        <span>{{ task.text }}</span>
      </li>
    </ul>
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
      //   if (task.isSubmited) list.push(task)
      // }
      // return list
      return this.$store.getters['tasks/getSubmited']
    }
  },
  methods: {
    ...mapMutations({
      unSubmit: 'tasks/reverseStatus'
    })
  }
})
</script>

<style>
</style>

