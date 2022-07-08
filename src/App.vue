<script setup lang="ts">
  import {RouterLink, RouterView} from 'vue-router'
  import AppHeader from './components/AppHeader.vue'
  import AppFooter from './components/AppFooter.vue'
  import {useTodoStore} from '@/stores/todo'

  const todoStore = useTodoStore()
  todoStore.loadTodos()
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>
