# AI Prompts for Todo List App

**Focus:** Engineering Practices & Code Smell Refactoring

## 1. Architecture & Component Smells
- **Prompt:** "Review the current Vue component structure for my Todo App. Are there any potential 'Large Class' or 'God Object' code smells? Suggest a proper component breakdown (e.g., TodoList, TodoItem, TodoInput)."
  - **ผลลัพธ์**: [ผลลัพธ์ที่ได้]
  - **หมายเหตุ**: [บันทึกเพิ่มเติม]

## 2. State Management & Data Smells
- **Prompt:** "Review the way Todo items are stored and managed. Is there 'Primitive Obsession' or 'Data Clumps'? Should we extract a specific `Todo` interface/class to encapsulate its logic?"
  - **ผลลัพธ์**: [ผลลัพธ์ที่ได้]
  - **หมายเหตุ**: [บันทึกเพิ่มเติม]

## 3. Duplication (DRY Principle)
- **Prompt:** "Check the logic for adding, editing, and deleting Todo items. Do you see any 'Duplicated Code' smells? Suggest how to extract reusable functions or Vue 3 Composables."
  - **ผลลัพธ์**: [ผลลัพธ์ที่ได้]
  - **หมายเหตุ**: [บันทึกเพิ่มเติม]

## 4. Method Complexity
- **Prompt:** "Review the filtering (All, Active, Completed) and sorting functions of the Todo List. Are there any 'Long Method' or 'Complex Conditional' smells? Suggest how to refactor them to be clean and readable."
  - **ผลลัพธ์**: [ผลลัพธ์ที่ได้]
  - **หมายเหตุ**: [บันทึกเพิ่มเติม]

## 5. UI/Template Smells
- **Prompt:** "Look at the Vue template for the Todo list. Is there too much logic directly inside the HTML structure? Suggest how to move this into `computed` properties or separate methods to avoid template logic smells."
  - **ผลลัพธ์**: [ผลลัพธ์ที่ได้]
  - **หมายเหตุ**: [บันทึกเพิ่มเติม]

## 6. Naming Conventions
- **Prompt:** "Check the naming of variables and functions in this component. Are there any 'Mysterious Name' smells? Suggest more descriptive and clear names following Vue/TypeScript best practices."
  - **ผลลัพธ์**: [ผลลัพธ์ที่ได้]
  - **หมายเหตุ**: [บันทึกเพิ่มเติม]

## 7. Engineering Practices: TDD (Test-Driven Development)
- **Prompt:** "I want to implement the 'Add Todo' feature using TDD. Help me write a failing unit test (using Vitest/Vue Test Utils) for the TodoInput component before we write the implementation."
  - **ผลลัพธ์**: [ผลลัพธ์ที่ได้]
  - **หมายเหตุ**: [บันทึกเพิ่มเติม]
- **Prompt:** "Let's apply TDD for the 'Toggle Todo Status' feature. What test cases should we write to ensure the TodoItem correctly emits an event when the checkbox is clicked?"
  - **ผลลัพธ์**: [ผลลัพธ์ที่ได้]
  - **หมายเหตุ**: [บันทึกเพิ่มเติม]
- **Prompt:** "We need to filter todos (All, Active, Completed). Write the unit tests for the filtering logic in our Vue composable/store, following the Red-Green-Refactor cycle."
  - **ผลลัพธ์**: [ผลลัพธ์ที่ได้]
  - **หมายเหตุ**: [บันทึกเพิ่มเติม]
- **Prompt:** "Initialize the Vue 3 Todo List project setup with TDD environment (Vitest, Vue Test Utils) and outline the first test cases."
  - **ผลลัพธ์**: ได้โครงสร้างไฟล์ `PROMPTS.md` และพร้อมเริ่มทำ TDD อย่างเป็นระบบ
  - **หมายเหตุ**: -
- **Prompt:** "Write a failing test for TodoInput component to verify it emits an 'add' event when the user submits a new todo."
  - **ผลลัพธ์**: สร้างไฟล์ `TodoInput.spec.ts` เป็น Failing Test (สถานะ Red)
  - **หมายเหตุ**: -
- **Prompt:** "เขียนโค้ดใน TodoInput.vue ให้ทำงานและผ่าน Test นี้เลย (Green Phase)"
  - **ผลลัพธ์**: รับค่าด้วย `v-model` และส่ง `emit('add')` ได้สำเร็จ (สถานะ Green)
  - **หมายเหตุ**: -
- **Prompt:** "เริ่มทำฟีเจอร์แสดงรายการ TodoList ช่วยเขียน failing test สำหรับแสดงรายการ Todo ให้หน่อย"
  - **ผลลัพธ์**: สร้างไฟล์ `TodoList.spec.ts` เช็คการ render จำนวน items (สถานะ Red)
  - **หมายเหตุ**: -
- **Prompt:** "ช่วยเขียนโค้ดใน TodoList.vue เพื่อให้ Test นี้ผ่าน (Green Phase) ให้หน่อย"
  - **ผลลัพธ์**: รับ props และลูปแสดงผลด้วย `v-for` ได้อย่างถูกต้อง (สถานะ Green)
  - **หมายเหตุ**: -
- **Prompt:** "ช่วยประกอบ TodoInput และ TodoList เข้าด้วยกันใน App.vue พร้อมกับเขียน Test ครอบคลุมการทำงานโดยรวมให้ที"
  - **ผลลัพธ์**: สร้าง `App.spec.ts` ตรวจสอบ Integration และเชื่อม State ใน `App.vue` สำเร็จ
  - **หมายเหตุ**: การรวม Component ในระดับแม่
- **Prompt:** "เราสามารถ Refactor TodoList.vue ให้แยกเป็น TodoItem.vue ย่อยลงไปอีกได้ไหม ช่วยจัดการและเขียน Test ให้ด้วย"
  - **ผลลัพธ์**: แยกเป็น `TodoItem.vue` พร้อม Unit Test ใหม่ และ Test เดิมทุกอย่างยังผ่านปกติ (Refactor)
  - **หมายเหตุ**: โครงสร้าง Clean ขึ้น และป้องกัน Regression
- **Prompt:** "ช่วยเพิ่มฟีเจอร์ 'ลบ Todo' โดยเริ่มจากเขียน Test ส่ง Event delete ออกมาจาก TodoItem"
  - **ผลลัพธ์**: เพิ่มปุ่มลบใน `TodoItem.vue` พร้อม Test ตรวจสอบ `emit('delete')`
  - **หมายเหตุ**: เริ่มทำ Bottom-Up
- **Prompt:** "ช่วยเขียน Test และโค้ดรับ Event delete ใน TodoList เพื่อส่งต่อไปยัง App.vue ให้หน่อย"
  - **ผลลัพธ์**: `TodoList.vue` ทำ Event Forwarding เพื่อส่งต่อ `delete` ขึ้นไปข้างบนได้
  - **หมายเหตุ**: ส่ง Event ไปให้ App.vue จัดการลบ State

---
*Note: Add new prompts you use during development to this file to keep a record of your AI-assisted engineering practices.*