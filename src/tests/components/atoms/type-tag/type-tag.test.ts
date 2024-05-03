import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TypeTag from '@/components/atoms/type-tag/TypeTag.vue'
import { apiType } from '@/components/data/apiType'

describe('TypeTag', () => {
    const wrapper = mount(TypeTag, {
        props: {
            type: apiType,
            size: 'x-small'
        }
    })

    it('should render TypeTag component', () => {
        const tag = wrapper.find('.pokemon-tag')
        expect(tag.text()).toBe('Poison')
        expect(tag.exists()).toBeTruthy()
    })
})
