<script setup lang="ts">
  import {Todo} from '@/types/todo'
  import {onMounted} from 'vue'
  import TodoPreview from '@/components/TodoPreview.vue'

  defineProps<{
    todos: Todo[]
  }>()
  onMounted(() => {
    console.log('hi')
  })
</script>

<template>
  <section>
    <ul>
      <TodoPreview v-for="todo in todos" :todo="todo" />
    </ul>
  </section>
</template>
