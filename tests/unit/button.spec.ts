import { shallowMount } from '@vue/test-utils'
import Button from '@/Button/src/main.vue'

describe('Button.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Button, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
