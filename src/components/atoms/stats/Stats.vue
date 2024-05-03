<script setup lang="ts">
import type { Pokemon } from '@/models/pokemon'

defineProps<{
  pokemon: Pokemon
}>()
</script>

<template>
  <div class="contain-content-stats">
    <div class="contain-content-stats-attack">
      <p class="stat">{{pokemon?.stats?.attack}}</p>
      <p>Attaque</p>
    </div>
    <div class="contain-content-stats-defense">
      <p class="stat">{{pokemon?.stats?.defense}}</p>
      <p>Défense</p>
    </div>
    <div class="contain-content-stats-speed">
      <p class="stat">{{pokemon?.stats?.speed}}</p>
      <p>Vitesse</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contain {

  p {
    margin: 0;
  }

  &-content-stats {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 15px;
    text-align: center;
    font-size: 12px;
  }
}

.stat {
  font-weight: bold;
  font-size: 20px;
}
</style>
