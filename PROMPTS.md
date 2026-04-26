# AI Prompts for Todo List App

**Focus:** Engineering Practices & Code Smell Refactoring

## 1. Architecture & Component Smells
- **Prompt:** "Review the current Vue component structure for my Todo App. Are there any potential 'Large Class' or 'God Object' code smells? Suggest a proper component breakdown (e.g., TodoList, TodoItem, TodoInput)."

## 2. State Management & Data Smells
- **Prompt:** "Review the way Todo items are stored and managed. Is there 'Primitive Obsession' or 'Data Clumps'? Should we extract a specific `Todo` interface/class to encapsulate its logic?"

## 3. Duplication (DRY Principle)
- **Prompt:** "Check the logic for adding, editing, and deleting Todo items. Do you see any 'Duplicated Code' smells? Suggest how to extract reusable functions or Vue 3 Composables."

## 4. Method Complexity
- **Prompt:** "Review the filtering (All, Active, Completed) and sorting functions of the Todo List. Are there any 'Long Method' or 'Complex Conditional' smells? Suggest how to refactor them to be clean and readable."

## 5. UI/Template Smells
- **Prompt:** "Look at the Vue template for the Todo list. Is there too much logic directly inside the HTML structure? Suggest how to move this into `computed` properties or separate methods to avoid template logic smells."

## 6. Naming Conventions
- **Prompt:** "Check the naming of variables and functions in this component. Are there any 'Mysterious Name' smells? Suggest more descriptive and clear names following Vue/TypeScript best practices."

## 7. Engineering Practices: TDD (Test-Driven Development)
- **Prompt:** "I want to implement the 'Add Todo' feature using TDD. Help me write a failing unit test (using Vitest/Vue Test Utils) for the TodoInput component before we write the implementation."
- **Prompt:** "Let's apply TDD for the 'Toggle Todo Status' feature. What test cases should we write to ensure the TodoItem correctly emits an event when the checkbox is clicked?"
- **Prompt:** "We need to filter todos (All, Active, Completed). Write the unit tests for the filtering logic in our Vue composable/store, following the Red-Green-Refactor cycle."
- **Prompt:** "Initialize the Vue 3 Todo List project setup with TDD environment (Vitest, Vue Test Utils) and outline the first test cases."
- **Prompt:** "Write a failing test for TodoInput component to verify it emits an 'add' event when the user submits a new todo."
- **Prompt:** "เขียนโค้ดใน TodoInput.vue ให้ทำงานและผ่าน Test นี้เลย (Green Phase)"
- **Prompt:** "เริ่มทำฟีเจอร์แสดงรายการ TodoList ช่วยเขียน failing test สำหรับแสดงรายการ Todo ให้หน่อย"
- **Prompt:** "ช่วยเขียนโค้ดใน TodoList.vue เพื่อให้ Test นี้ผ่าน (Green Phase) ให้หน่อย"
- **Prompt:** "ช่วยประกอบ TodoInput และ TodoList เข้าด้วยกันใน App.vue พร้อมกับเขียน Test ครอบคลุมการทำงานโดยรวมให้ที"

---
*Note: Add new prompts you use during development to this file to keep a record of your AI-assisted engineering practices.*