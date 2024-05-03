<script setup lang="ts">
import { type Pokemon } from '@/models/pokemon'

defineProps<{
  pokemon: Pokemon
}>()
</script>

<template>
  <div class="container">
      <img class="container-image" :src="pokemon.sprite" :alt="pokemon.slug"/>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  background-image: url("src/assets/pokeball.png");
  background-size: 100%;
  background-repeat: no-repeat;
  width: 160px;
  height: 180px;
  justify-content: center;
  align-items: center;

  &-image {
    width: 125px;
    height: 125px;
  }
}
</style>
