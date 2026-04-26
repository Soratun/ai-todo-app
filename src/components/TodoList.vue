<script setup lang="ts">
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

defineProps<{
  todos: Todo[]
}>()
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
  </ul>
</template>