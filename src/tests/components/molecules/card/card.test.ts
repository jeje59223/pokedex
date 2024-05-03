import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '@/components/molecules/card/Card.vue'
import { pokemonMock } from '@/tests/mocks/pokemon/pokemon-mock'

describe('Card', () => {
    const wrapper = mount(Card, {
        props: {
            pokemon: pokemonMock
        }
    })

    it('should render Card component', () => {
        const card = wrapper.find('.contain-card')
        expect(card.exists()).toBeTruthy()
    })

    it('should have a name of pokemon', function () {
        const title = wrapper.find('.contain-card-title')
        expect(title.text()).toBe('Grillepattes')
    })
})
