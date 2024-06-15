import { describe, it, expect, vi, beforeAll } from 'vitest'

import { usePokemon } from '@/stores/pokemon/pokemon'
import axios from 'axios'
import { createPinia, setActivePinia, storeToRefs } from 'pinia'
import { pokemonsMock } from '@/tests/mocks/pokemon/pokemons-mock'

vi.mock('axios')
vi.mock('vue-router')

describe('Pokemon store', () => {

    beforeAll(() => {
        setActivePinia(createPinia())
    })

    it('should return pokemons when call fetchPokemon', async () => {
        const { fetchPokemon } = usePokemon()
        const { pokemonApi } = storeToRefs(usePokemon())
        axios.get = vi.fn().mockResolvedValueOnce({ status: 200, data: pokemonsMock })

        await fetchPokemon()

        expect(pokemonApi.value).toStrictEqual(pokemonsMock)
    })
})
