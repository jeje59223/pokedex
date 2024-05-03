<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePokemon } from '@/stores/pokemon/pokemon'
import { onBeforeMount, ref, watch } from 'vue'
import type { Pokemon } from '@/models/pokemon'
import TypeTag from '@/components/atoms/type-tag/TypeTag.vue'
import router from '@/router'
import NavBar from '@/components/molecules/nav-bar/NavBar.vue'
import Title from '@/components/atoms/title/Title.vue'

const route = useRoute()
const pokemonName = route?.params?.pokemonName as string
const { getPokemonByName } = usePokemon()
const pokemon = ref<Pokemon>()


onBeforeMount(async () => {
  pokemon.value = await getPokemonByName(pokemonName)
})

watch(() => route?.params?.pokemonName, async (newVal) => {
  if (newVal) {
    pokemon.value = await getPokemonByName(newVal as string)
  }
})
</script>

<template>
  <NavBar />
  <Title :title="pokemon?.name" />
  <div class="PokemonCard">
    <div class="PokemonCard-image">
      <img :src="pokemon?.image"  :alt="pokemon?.name"/>
    </div>
    <div class="PokemonCard-content">
      <h1 class="PokemonCard-content--title"><img src="../../../assets/pokeball.png" width="80"  alt="poke-ball"/>{{pokemon?.name}} <img :src="pokemon?.sprite"  :alt="pokemon?.name"/></h1>
      <div class="PokemonCard-content--generation">
        <p>Generation : </p>
        <v-chip size="default" color="#444444" text-color="default" variant="elevated">{{pokemon?.apiGeneration}}</v-chip>
      </div>
      <div class="PokemonCard-content--evolution">
        <p>Evolutions : </p>
        <v-chip size="x-large" v-for="evolution in pokemon?.apiEvolutions" :key="evolution.pokedexId" color="#444444" text-color="default" variant="elevated" @click="router.push({ name: 'pokemon-by-name', params: { pokemonName: evolution.pokedexId } })">
          {{evolution.name}}
        </v-chip>
      </div>
      <div class="PokemonCard-content--stats">
        <p>Stats : </p>
        <div class="PokemonCard-content--stats-results">
          <v-chip size="default" color="#444444" text-color="default" variant="elevated"><img src="../../../assets/hp.png" width="20"  :alt="pokemon?.name"/>HP : <span class="PokemonCard-content--stats-result">{{pokemon?.stats.HP}}</span></v-chip>
          <v-chip size="default" color="#444444" text-color="default" variant="elevated"><img src="../../../assets/attack.png" width="20" :alt="pokemon?.name" /> Attack : <span class="PokemonCard-content--stats-result">{{pokemon?.stats.attack}}</span></v-chip>
          <v-chip size="default" color="#444444" text-color="default" variant="elevated"><img src="../../../assets/defense.png" width="20" :alt="pokemon?.name" />Defense : <span class="PokemonCard-content--stats-result">{{pokemon?.stats.defense}}</span></v-chip>
          <v-chip size="default" color="#444444" text-color="default" variant="elevated"><img src="../../../assets/special-defense.png" width="20" :alt="pokemon?.name" />Special defense : <span class="PokemonCard-content--stats-result">{{pokemon?.stats.special_defense}}</span></v-chip>
          <v-chip size="default" color="#444444" text-color="default" variant="elevated"><img src="../../../assets/special-attack.png" width="20" :alt="pokemon?.name" />Special Attack : <span class="PokemonCard-content--stats-result">{{pokemon?.stats.special_attack}}</span></v-chip>
          <v-chip size="default" color="#444444" text-color="default" variant="elevated"><img src="../../../assets/speed.png" width="20" :alt="pokemon?.name" />Speed : <span class="PokemonCard-content--stats-result">{{pokemon?.stats.speed}}</span></v-chip>
        </div>
      </div>
      <div class="PokemonCard-content--type">
        <p>Types : </p>
        <TypeTag size="default" v-for="type in pokemon?.apiTypes" :key="type.name" :type="type" />
      </div>
    </div>
  </div>

</template>
<style lang="scss">
.PokemonCard {
  border: 2px solid #444444;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  margin: 0 40px 40px 40px;
  box-shadow: 0 1px 5px 0 white;
  background-color: #7f8c8d;
  font-size: 15px;

  &-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    margin-top: 48px;
    margin-bottom: 50px;
    height: 200px;
    background-image: url("@/assets/pokemon-1577763_1280.jpg");
    background-size: cover;
    color: rgb(250, 204, 8);
    border-bottom: 2px solid white;
    font-size: 100px;
  }

  &-content {
    width: 100%;
    color: rgb(250, 204, 8);
    padding-left: 20px;
    font-size: 15px;

    &--title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;
      border-bottom: 1px solid #444444;
      padding-bottom: 20px;
      gap: 20px;
      font-size: 40px;
    }

    &--evolution {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 30px;
      font-size: 15px;

      span {
        text-shadow: none;
      }

      p {
        min-width: 120px;
      }
    }

    &--generation {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 30px;
      font-size: 15px;

      span {
        text-shadow: none;
      }

      p {
        min-width: 120px;
      }
    }

    &--stats {
      display: flex;
      margin-bottom: 30px;
      font-size: 15px;

      p {
        min-width: 120px;
      }

      &-results {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-left: 10px;
        gap: 10px;
        text-shadow: none;

        img {
          margin-right: 10px;
        }
      }

      &-result {
        margin-left: 10px;
      }
    }

    &--type {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 30px;

      p {
        min-width: 120px;
      }
    }
  }

  &-image {
    border-right: 1px solid #444444;
    padding-right: 20px;
  }
}

.go-home {
  text-align: center;
  font-size: 60px;
  margin-bottom: 50px;
  margin-top: 50px;
  color: rgb(250, 204, 8);
  padding: 20px;
  border-bottom: 2px solid white;
}
</style>
