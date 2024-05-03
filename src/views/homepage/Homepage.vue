<script setup lang="ts">
import HomepageTemplate from '@/components/templates/homepage-template/HomepageTemplate.vue'
import { computed, onBeforeMount, ref } from 'vue'
import { usePokemon } from '@/stores/pokemon/pokemon'
import { usePokemonType } from '@/stores/pokemonType/pokemon-type'
import type { Pokemon } from '@/models/pokemon'

const { fetchPokemon, getPokemon } = usePokemon()
const { fetchPokemonType, getPokemonType } = usePokemonType()

const pokemonNames = ref<string[]>([])
const pokemonTypes = ref<string[]>([])
const pokemons = ref()
const pokemonNameRef = ref()
const isLoading = ref<boolean>(false)

const name = computed(() => pokemonNameRef.value?.pokemonNameInput)
const pokemonType = computed(() => pokemonNameRef.value?.pokemonType)
const pokemonGeneration = computed(() => pokemonNameRef.value?.pokemonGeneration)

onBeforeMount(async () => {
  try {
    isLoading.value = true
    await fetchPokemon()
    pokemonNames.value = getPokemon.value?.map(pokemon => pokemon.name)
    if (name.value === '') {
      pokemons.value = getPokemon.value
    }
    await fetchPokemonType()
    pokemonTypes.value = getPokemonType.value?.map(type => type.name)
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false
  }

})

const pokemonFiltered = computed(() => {
  let pokemonToReturn: Pokemon[] = getPokemon.value

  if (name.value) pokemonToReturn = getPokemon.value.filter(p => p.name === name.value)

  if (pokemonType.value) pokemonToReturn = getPokemon.value.filter(p => p.apiTypes.some(t => t.name === pokemonType.value))

  if (pokemonGeneration.value) pokemonToReturn = getPokemon.value.filter(p => p.apiGeneration === pokemonGeneration.value)

  if (pokemonType.value && pokemonGeneration.value) pokemonToReturn = getPokemon.value.filter(p => p.apiGeneration === pokemonGeneration.value && p.apiTypes.some(t => t.name === pokemonType.value))

  return pokemonToReturn
})
</script>

<template>
  <HomepageTemplate
      :pokemons="pokemonFiltered"
      :pokemon-names="pokemonNames"
      :pokemon-types="pokemonTypes"
      ref="pokemonNameRef"
      :filtered-by-name="!!name"
      :is-loading="isLoading"
  />
</template>
