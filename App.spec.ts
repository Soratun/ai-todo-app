import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from './src/App.vue'

describe('App.vue Integration', () => {
  it('allows user to add a new todo and displays it in the list', async () => {
    const wrapper = mount(App)
    
    // 1. ค้นหาช่อง Input, จำลองการพิมพ์ และกด Submit (Enter)
    const input = wrapper.find('input[type="text"]')
    await input.setValue('Learn Integration Testing')
    await wrapper.find('form').trigger('submit.prevent')
    
    // 2. ตรวจสอบว่ามีรายการ <li> เพิ่มขึ้นมา 1 รายการและมีข้อความที่พิมพ์ไป
    const listItems = wrapper.findAll('li')
    expect(listItems).toHaveLength(1)
    expect(listItems[0].text()).toContain('Learn Integration Testing')
  })
})