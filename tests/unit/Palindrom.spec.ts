/* eslint-disable @typescript-eslint/no-explicit-any */
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import Vuetify from 'vuetify'

import Component from '@/components/Palindrom.vue'

let wrapper: Wrapper<Component> & { vm: any }

beforeEach(() => {
  wrapper = mount(Component, {
    localVue: createLocalVue(),
    vuetify: new Vuetify(),
    propsData: {},
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('HelloWorld.vue', () => {
  it('renders `Template`', () => {
    expect(wrapper.element.innerHTML).toContain('Hello there ;)')
  })
})
