<script setup lang="ts">
  import {Todo} from '@/types/todo'
  import {onMounted} from 'vue'

  defineProps<{
    todos: Todo[]
  }>()
  onMounted(() => {
    console.log('hi')
  })
</script>

<template>
  <section>
    <h1>List</h1>
    <pre>{{ todos }}</pre>
  </section>
</template>
