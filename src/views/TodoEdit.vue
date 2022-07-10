<script setup lang="ts">
  import {useTodoStore} from '@/stores/todo'
  import {computed} from '@vue/reactivity'
  import {onMounted} from 'vue'
  import {useRoute, useRouter} from 'vue-router'
  import {todoService} from '@/services/todo.service.js'
  import {ref, reactive} from 'vue'

  const todoStore = useTodoStore()
  const route = useRoute()
  const router = useRouter()
  const state = reactive({
    todo: null,
  })
  const id = route.params.id
  if (id) {
    todoStore.getTodoById(id)
    state.todo = computed(() => todoStore.getCurrTodo)
  } else state.todo = computed(() => todoService.getEmptyTodo())
  function saveTodo() {
    todoStore.addTodo(state.todo)
    router.push('/todo')
  }

  onMounted(() => {})
</script>

<template>
  <main class="container-layout-auto todo-app">
    <h1>Todo Edit</h1>
    <pre>{{ state.todo }}</pre>
    <input type="text" v-model="state.todo.txt" />
    <button @click="saveTodo"></button>
  </main>
</template>
