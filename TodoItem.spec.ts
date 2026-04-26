import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoItem from './src/components/TodoItem.vue'

describe('TodoItem.vue', () => {
  it('renders todo text correctly', () => {
    const todo = { id: 1, text: 'Refactor Components', completed: false }
    const wrapper = mount(TodoItem, {
      props: { todo }
    })
    
    expect(wrapper.find('li').text()).toContain('Refactor Components')
  })

  it('emits a "delete" event with todo id when delete button is clicked', async () => {
    const todo = { id: 2, text: 'Delete me', completed: false }
    const wrapper = mount(TodoItem, {
      props: { todo }
    })

    await wrapper.find('button.delete-btn').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('delete')
    expect(wrapper.emitted('delete')?.[0]).toEqual([2])
  })
})