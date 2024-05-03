<script setup lang="ts">
import type { Pokemon } from '@/models/pokemon'
import PokeImage from '@/components/molecules/pokeImage/PokeImage.vue'
import TypeTag from '@/components/atoms/type-tag/TypeTag.vue'
import Stats from '@/components/atoms/stats/Stats.vue'

defineProps<{
  pokemon: Pokemon
}>()

const emit = defineEmits<{
  (event: 'getPokemon'): void
}>()

const getPokemonName = () => {
  emit('getPokemon')
}
</script>

<template>
  <div class="contain-card" @click="getPokemonName">
    <v-tooltip :text="`Génération ${pokemon.apiGeneration}`">
      <template v-slot:activator="{ props }">
        <div v-bind="props" class="contain-card-generation">{{ pokemon.apiGeneration }}</div>
      </template>
    </v-tooltip>
    <div class="contain-card-block-image">
      <PokeImage :pokemon="pokemon"/>
    </div>
    <h2 class="contain-card-title">{{pokemon.name}}</h2>
    <div class="types">
      <div class="type" v-for="type in pokemon.apiTypes" :key="type.name" >
        <TypeTag :type="type" size="default" />
      </div>
    </div>
    <Stats :pokemon="pokemon" />
  </div>
</template>

<style lang="scss" scoped>
.contain-card {
  min-height: 400px;
  min-width: 275px;
  border-radius: 30px;
  background-color: #7f8c8d;
  color: rgb(250, 204, 8);
  cursor: pointer;

  &:hover {
    background-color: #636e72;

    .contain-card-generation {
      background-color: #7f8c8d;
    }
  }

  &-generation {
    margin-top: 10px;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    background-color: #636e72;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3px;
    padding-left: 3px;
  }

  &-title {
    margin: 15px 0;
    text-align: center;
  }

  &-block-image {
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  .types {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
}
</style>
