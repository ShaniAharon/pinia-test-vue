<script setup lang="ts">
  import {useTodoStore} from '@/stores/todo'
  import {computed} from '@vue/reactivity'
  import {onMounted} from 'vue'
  import TodoList from '@/components/TodoList.vue'

  const todoStore = useTodoStore()
  const todos = computed(() => todoStore.getTodos)
  onMounted(() => {
    console.log('todos', todos)
  })
</script>

<template>
  <main class="container-layout-auto todo-app">
    <h1>Todo app</h1>
    <TodoList :todos="todos" />
  </main>
</template>
