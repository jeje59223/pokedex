import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Stats from '@/components/atoms/stats/Stats.vue'
import { pokemonMock } from '@/tests/mocks/pokemon/pokemon-mock'

describe('Stats', () => {
    const wrapper = mount(Stats, {
        props: {
            pokemon: pokemonMock
        }
    })

    it('should be display stats component', () => {
        const sectionStats = wrapper.find('.contain-content-stats')
        expect(sectionStats.exists()).toBeTruthy()
    })

    it('should render attack stats of pokemon', () => {
        const sectionAttack = wrapper.find('.contain-content-stats-attack')
        expect(sectionAttack.text()).toBe('65Attaque')
    })

    it('should render defense stats of pokemon', () => {
        const sectionAttack = wrapper.find('.contain-content-stats-defense')
        expect(sectionAttack.text()).toBe('45Défense')
    })

    it('should render speed stats of pokemon', () => {
        const sectionAttack = wrapper.find('.contain-content-stats-speed')
        expect(sectionAttack.text()).toBe('45Vitesse')
    })
})
