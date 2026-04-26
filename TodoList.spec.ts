import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoList from '../TodoList.vue'
import TodoItem from '../TodoItem.vue'

describe('TodoList.vue', () => {
  it('renders a list of todos correctly', () => {
    const mockTodos = [
      { id: 1, text: 'Learn Vue', completed: false },
      { id: 2, text: 'Learn TDD', completed: true }
    ]
    
    const wrapper = mount(TodoList, {
      props: {
        todos: mockTodos
      }
    })
    
    const listItems = wrapper.findAll('li')
    expect(listItems).toHaveLength(2)
    expect(listItems[0].text()).toContain('Learn Vue')
    expect(listItems[1].text()).toContain('Learn TDD')
  })

  it('emits a "delete" event with todo id when a TodoItem emits delete', () => {
    const mockTodos = [{ id: 1, text: 'Learn Vue', completed: false }]
    const wrapper = mount(TodoList, {
      props: { todos: mockTodos }
    })

    const todoItem = wrapper.findComponent(TodoItem)
    todoItem.vm.$emit('delete', 1)

    expect(wrapper.emitted()).toHaveProperty('delete')
    expect(wrapper.emitted('delete')?.[0]).toEqual([1])
  })
})