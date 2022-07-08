<script setup lang="ts">
  defineProps<{
    msg: string
  }>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2>Hi</h2>
  </div>
</template>
