<script setup lang="ts">
  import {useTodoStore} from '@/stores/todo'
  import {computed} from '@vue/reactivity'
  import {onMounted} from 'vue'
  import {useRoute} from 'vue-router'

  const todoStore = useTodoStore()
  const route = useRoute()
  // const todos = computed(() => todoStore.getTodos)

  const id = route.params.id
  console.log('id', id)
  onMounted(() => {})
</script>

<template>
  <main class="container-layout-auto todo-app">
    <h1>Todo Edit</h1>
  </main>
</template>
