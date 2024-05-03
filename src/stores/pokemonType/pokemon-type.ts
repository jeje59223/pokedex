import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'
import type { ApiType } from '@/models/pokemon'

export const usePokemonType = defineStore('pokemonTypeApi', () => {
    const pokemonTypeApi = ref<ApiType[]>([])

    const fetchPokemonType = async () => {
        // eslint-disable-next-line no-useless-catch
        try {
            const data = await axios.get('https://pokebuildapi.fr/api/v1/types')
            pokemonTypeApi.value = data.data
        } catch (err) {
            throw err
        }
    }

    const getPokemonType = computed(() => pokemonTypeApi)

    return {
        fetchPokemonType,
        getPokemonType
    }
})



