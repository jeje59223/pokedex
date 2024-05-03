<script lang="ts" setup>
import type { ApiType, Pokemon } from '@/models/pokemon'
import Card from '@/components/molecules/card/Card.vue'
import NavBar from '@/components/molecules/nav-bar/NavBar.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import Title from '@/components/atoms/title/Title.vue'

const router = useRouter()
const pokemonNameInput = ref()
const pokemonType = ref<ApiType['name']>('')
const pokemonGeneration = ref()

defineProps<{
  pokemons?: Pokemon[]
  pokemonNames?: Pokemon['name'][],
  pokemonTypes: ApiType['name'][],
  filteredByName: boolean
  isLoading: boolean
}>()

defineExpose({
  pokemonNameInput,
  pokemonType,
  pokemonGeneration
})

const generations = [1, 2, 3, 4, 5, 6, 7, 8]
</script>
<template>
  <NavBar />
  <Title title="POKEDEX" />
  <div class="Home-page--content">
    <div class="Home-page--filters">
      <h2>Filters</h2>
      <div class="Home-page--filters-form">
        <div class="Home-page--filters-form-names">
          <v-autocomplete v-model="pokemonNameInput" label="Search by name" :items="pokemonNames" :clearable="true" />
        </div>
        <div class="Home-page--filters-form-types">
          <v-select v-model="pokemonType" label="Select by type" :items="pokemonTypes" :clearable="true" :disabled="filteredByName" />
        </div>
        <div class="Home-page--filters-form-generations">
          <v-select v-model="pokemonGeneration" label="Select by generation" :items="generations" :clearable="true" :disabled="filteredByName" />
        </div>
      </div>
    </div>
    <div v-if="!isLoading" class="Home-page--pokedex">
      <Card v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" class="Home-page--pokedex-card" @get-pokemon="router.push({ name: 'pokemon-by-name', params: { pokemonName: pokemon.pokedexId } })" />
    </div>
    <div v-else class="Home-page--pokedex">
      <v-skeleton-loader
          :loading="isLoading"
          v-for="pokemon in pokemons" :key="pokemon.id"
          height="425"
          min-width="300"
          theme="primary"
          class="mx-auto border Home-page--pokedex-card"
          type="card-avatar, actions"
      ></v-skeleton-loader>
    </div>
  </div>

</template>
<style lang="scss">
.Home-page {
  display: flex;
  padding: 20px;

  &--content {
    display: flex;
    position: absolute;
    left: 0;
    width: 100%;
    margin: auto;
    padding: 0 2rem 2rem 2rem;
  }

  &--filters {
    position: sticky;
    top: 80px;
    text-align: center;
    min-width: 300px;
    max-height: 425px;
    background-color: #ecf0f1;
    margin-right: 20px;
    border-radius: 30px;
    padding: 20px;
    color: rgb(250, 204, 8);

    &-form {
      margin: 20px 0;
      color: black;
      text-shadow: none;
    }

    h2 {
      padding-bottom: 20px;
      border-bottom: 2px solid #444444;
    }
  }
  &--pokedex {
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    justify-items: stretch;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-gap: 2rem;
  }
}
</style>
