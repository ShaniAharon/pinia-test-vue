<script setup lang="ts">
  import {useTodoStore} from '@/stores/todo'
  import {computed} from '@vue/reactivity'
  import {onMounted} from 'vue'
  import {useRoute} from 'vue-router'
  import {todoService} from '@/services/todo.service.js'
  import {ref} from 'vue'

  const todoStore = useTodoStore()
  const route = useRoute()
  // const todos = computed(() => todoStore.getTodos)
  let todo = ref(null)
  const id = route.params.id
  if (id) {
    todoStore.getTodoById(id)
    todo.value = computed(() => todoStore.getCurrTodo)
    console.log('todo', todo)
  } else todo.value = computed(() => todoService.getEmptyTodo())
  console.log('todo', todo)

  // const todo = computed(() => )
  onMounted(() => {})
</script>

<template>
  <main class="container-layout-auto todo-app">
    <h1>Todo Edit</h1>
    <pre>{{ todo }}</pre>
  </main>
</template>
