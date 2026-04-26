<script setup lang="ts">
import TodoItem from './TodoItem.vue'

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

defineProps<{
  todos: Todo[]
}>()

defineEmits<{
  (e: 'delete', id: number): void
}>()
</script>

<template>
  <ul class="todo-list">
    <TodoItem 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo" 
      @delete="$emit('delete', $event)"
    />
  </ul>
</template>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>