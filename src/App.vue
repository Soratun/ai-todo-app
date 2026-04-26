<script setup lang="ts">
import { ref, computed } from 'vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type FilterType = 'All' | 'Active' | 'Completed'

const todos = ref<Todo[]>([])
const currentFilter = ref<FilterType>('All')

const handleAddTodo = (text: string) => {
  if (!text.trim()) return // ป้องกันการเพิ่มข้อความว่าง
  todos.value.push({
    id: Date.now(),
    text,
    completed: false
  })
}

const handleDeleteTodo = (id: number) => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}

const filteredTodos = computed(() => {
  if (currentFilter.value === 'Active') {
    return todos.value.filter(todo => !todo.completed)
  }
  if (currentFilter.value === 'Completed') {
    return todos.value.filter(todo => todo.completed)
  }
  return todos.value
})
</script>

<template>
  <main class="todo-app">
    <h1 class="app-title">Vue Todo App</h1>
    <TodoInput @add="handleAddTodo" />
    
    <div class="filters">
      <button class="filter-all" :class="{ active: currentFilter === 'All' }" @click="currentFilter = 'All'">All</button>
      <button class="filter-active" :class="{ active: currentFilter === 'Active' }" @click="currentFilter = 'Active'">Active</button>
      <button class="filter-completed" :class="{ active: currentFilter === 'Completed' }" @click="currentFilter = 'Completed'">Completed</button>
    </div>
    
    <TodoList :todos="filteredTodos" @delete="handleDeleteTodo" />
  </main>
</template>

<style scoped>
.todo-app {
  max-width: 450px;
  margin: 3rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.app-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.filters button {
  padding: 0.4rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  background: #f8fafc;
  color: #64748b;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.filters button:hover {
  background: #e2e8f0;
}

.filters button.active {
  background: #42b883;
  color: #ffffff;
  border-color: #42b883;
}
</style>
