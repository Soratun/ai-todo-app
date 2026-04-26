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
  <li class="todo-item">
    <span class="todo-text">{{ todo.text }}</span>
    <button class="delete-btn" @click="$emit('delete', todo.id)" aria-label="Delete todo">
      &times;
    </button>
  </li>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.todo-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.todo-text {
  font-size: 1.1rem;
  color: #334155;
}

.delete-btn {
  background: #ef4444;
  color: white;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.delete-btn:hover {
  background: #dc2626;
}
</style>