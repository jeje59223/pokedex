import { describe, it, expect, vi, beforeAll } from 'vitest'

import { usePokemon } from '@/stores/pokemon/pokemon'
import axios from 'axios'
import { createPinia, setActivePinia, storeToRefs } from 'pinia'
import { pokemonsMock } from '@/tests/mocks/pokemon/pokemons-mock'
import { pokemonMock } from '@/tests/mocks/pokemon/pokemon-mock'

vi.mock('axios')

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

    it('should return a pokemon with call getPokemonByName', async () => {
        const { getPokemonByName } = usePokemon()
        const { pokemon } = storeToRefs(usePokemon())

        axios.get = vi.fn().mockResolvedValueOnce({ status: 200, data: pokemonMock })

        await getPokemonByName('Grillepattes')

        expect(pokemon.value).toEqual(pokemonMock)
    })
})
