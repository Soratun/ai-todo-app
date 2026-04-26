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
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="inputValue" />
    <button type="submit">Add Todo</button>
  </form>
</template>