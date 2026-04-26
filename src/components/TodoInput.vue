<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'add', value: string): void
}>()

const inputValue = ref('')

const handleSubmit = () => {
  emit('add', inputValue.value)
  inputValue.value = '' // Clear input after submit
}
</script>

<template>
  <form class="todo-form" @submit.prevent="handleSubmit">
    <input type="text" v-model="inputValue" placeholder="What needs to be done?" />
    <button type="submit" :disabled="!inputValue.trim()">Add</button>
  </form>
</template>

<style scoped>
.todo-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

input:focus {
  border-color: #42b883;
}

button {
  padding: 0 1.5rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover:not(:disabled) {
  background: #33a06f;
}

button:disabled {
  background: #94a3b8;
  cursor: not-allowed;
}
</style>