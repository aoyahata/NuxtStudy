<template>
  <div>
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
import { mapMutations } from 'vuex'
export default {
  computed: {
    list() {
      const list = []
      for (let task of this.$store.state.tasks.list) {
        if (task.isSubmited) list.push(task)
      }
      return list
    }
  },
  methods: {
    ...mapMutations({
      unSubmit: 'tasks/unSubmit'
    })
  }
}
</script>

<style>
</style>

