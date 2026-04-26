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

  it('allows user to delete a todo from the list', async () => {
    const wrapper = mount(App)
    
    // 1. จำลองการเพิ่ม Todo
    const input = wrapper.find('input[type="text"]')
    await input.setValue('To be deleted')
    await wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.findAll('li')).toHaveLength(1)
    
    // 2. ค้นหาปุ่ม Delete และกดคลิกเพื่อลบ
    await wrapper.find('button.delete-btn').trigger('click')
    expect(wrapper.findAll('li')).toHaveLength(0)
  })

  it('filters todos based on selected filter', async () => {
    const wrapper = mount(App)
    
    const input = wrapper.find('input[type="text"]')
    await input.setValue('Active Task')
    await wrapper.find('form').trigger('submit.prevent')
    
    await wrapper.find('button.filter-completed').trigger('click')
    expect(wrapper.findAll('li')).toHaveLength(0) // ไม่มีรายการที่เสร็จแล้ว
    
    await wrapper.find('button.filter-active').trigger('click')
    expect(wrapper.findAll('li')).toHaveLength(1) // มี 1 รายการที่กำลังทำ
    
    await wrapper.find('button.filter-all').trigger('click')
    expect(wrapper.findAll('li')).toHaveLength(1) // รายการทั้งหมดมี 1 รายการ
  })
})