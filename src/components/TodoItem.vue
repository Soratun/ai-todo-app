<script setup lang="ts">
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

defineProps<{
  todo: Todo
}>()

defineEmits<{
  (e: 'delete', id: number): void
}>()
</script>

<template>
  <li>
    {{ todo.text }}
    <button class="delete-btn" @click="$emit('delete', todo.id)">Delete</button>
  </li>
</template>