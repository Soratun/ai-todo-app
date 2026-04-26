import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoInput from '../TodoInput.vue'

describe('TodoInput.vue', () => {
  it('emits an "add" event with the input value when form is submitted', async () => {
    const wrapper = mount(TodoInput)
    
    const input = wrapper.find('input[type="text"]')
    await input.setValue('Learn TDD')
    await wrapper.find('form').trigger('submit.prevent')
    
    expect(wrapper.emitted()).toHaveProperty('add')
    expect(wrapper.emitted('add')?.[0]).toEqual(['Learn TDD'])
  })
})