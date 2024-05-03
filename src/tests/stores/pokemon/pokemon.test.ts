import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'
import type { Mock } from 'vitest'
import { onBeforeMount } from 'vue'
import { usePokemon } from '@/stores/pokemon/pokemon'
import { storeToRefs } from 'pinia'
import { pokemonsMock } from '@/tests/mocks/pokemon/pokemons-mock'

vi.mock('axios')

describe('Pokemon store', () => {
    it('should return pokemons when call fetchPokemon', () => {
        // (fetchPokemon as Mock).mockResolvedValue(pokemonsMock)
axios.get.mockResolvedValue({ data: pokemonsMock })

        expect(pokemonApi).toStrictEqual('tot')
    })
})
