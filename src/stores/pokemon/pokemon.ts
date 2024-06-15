import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'
import type { Pokemon } from '@/models/pokemon'

export const usePokemon = defineStore('pokemonApi', () => {
    const pokemonApi = ref<Pokemon[]>([])
    const pokemon = ref<Pokemon>()

    const fetchPokemon = async () => {
        try {
            const data = await axios.get('https://pokebuildapi.fr/api/v1/pokemon')
            pokemonApi.value = data.data
        } catch (err) {
            console.error(err)
            throw err
        }
    }

    const getPokemonByName = async (name: string): Promise<Pokemon> => {
        try {
            const data = await axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${name}`)
            return pokemon.value = data.data
        } catch (err) {
            console.error(err)
            throw err
        }
    }
    const getPokemon = computed(() => pokemonApi)
    const pokemonByName = computed(() => pokemon.value)

    return {
        fetchPokemon,
        pokemonApi,
        getPokemon,
        getPokemonByName,
        pokemonByName
    }
})
