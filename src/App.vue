<script setup lang="ts">
import { ref } from 'vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const todos = ref<Todo[]>([])

const handleAddTodo = (text: string) => {
  if (!text.trim()) return // ป้องกันการเพิ่มข้อความว่าง
  todos.value.push({
    id: Date.now(),
    text,
    completed: false
  })
}
</script>

<template>
  <main>
    <h1>Todo App</h1>
    <TodoInput @add="handleAddTodo" />
    <TodoList :todos="todos" />
  </main>
</template>
