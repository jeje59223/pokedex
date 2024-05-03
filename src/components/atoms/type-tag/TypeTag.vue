<script setup lang="ts">
import { type ApiType } from '@/models/pokemon'

defineProps<{
  type: ApiType
  size: 'x-small' | 'small' | 'default' | 'large' | 'x-large'
}>()

const getColorTag = (type: ApiType['name']) => {
  switch (type) {
    case 'Normal':
      return '#A4ACAE'
    case 'Combat':
      return '#D56722'
    case 'Vol':
      return '#3DC6EE'
    case 'Poison':
      return '#B97FC9'
    case 'Sol':
      return '#F6DE3F'
    case 'Roche':
      return '#444'
    case 'Insecte':
      return '#719E3F'
    case 'Spectre':
      return '#7B63A3'
    case 'Acier':
      return '#9EB6B8'
    case 'Feu':
      return '#B22222'
    case 'Eau':
      return '#4692C5'
    case 'Plante':
      return '#9BCC50'
    case 'Électrik':
      return '#ffe985'
    case 'Psy':
      return '#F467BA'
    case 'Glace':
      return '#51C4E7'
    case 'Dragon':
      return '#F16E57'
    case 'Ténèbres':
      return '#707070'
    case 'Fée':
      return '#FDB9E9'
    default: return ''
  }
}
</script>

<template>
  <div class="pokemon-tag">
    <v-chip
        :color="getColorTag(type.name)"
        :size="size"
        variant="elevated"

    >
      <img class="type-image" :src="type.image"  :alt="type.name"/>
      {{type.name}}
    </v-chip>
  </div>
</template>

<style lang="scss" scoped>
.pokemon-tag {
  text-shadow: none;
}
.type {
  &-image {
    margin-right: 5px;
    width: 20px;
  }
}

.normal {
  background-color: #A4ACAE;
}

.combat {
  background-color: #D56722;
}

.vol {
  background-color: #3DC6EE;
}

.poison {
  background-color: #B97FC9;
  justify-content: center;
}

.sol {
  background-color: #F6DE3F;
}

.roche {
  background-color: #444;
}

.insecte {
  background-color: #719E3F;
}

.spectre {
  background-color: #7B63A3;
}

.feu {
  background-color: #B22222;
}

.eau {
  background-color: #4692C5;
}

.plante {
  background-color: #9BCC50;
}

.electrik {
  background-color: #ffe985;
}

.psy {
  background-color: #F467BA;
}

.glace {
  background-color: #51C4E7;
}

.dragon {
  background-color: #F16E57;
}

.tenebres {
  background-color: #707070;
}

.fee {
  background-color: #FDB9E9;
}
</style>
