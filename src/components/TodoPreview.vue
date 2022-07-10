<script setup lang="ts">
  import {Todo} from '@/types/todo'
  import {onMounted} from 'vue'

  defineProps<{
    todo: Todo
  }>()
  onMounted(() => {
    console.log('hi preview')
  })
</script>

<template>
  <li class="clean-list">
    <pre>{{ todo }}</pre>
    <RouterLink :to="'/edit/' + todo._id">Edit</RouterLink>
  </li>
</template>
