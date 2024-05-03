import { type Stat } from './stat'

export interface ApiType {
    'name': string;
    'image': string
}

interface ApiResistance {
    'name': string,
    'damage_multiplier': number,
    'damage_relation': string
}

interface ResistanceModifyingAbilitiesForApi {
    'name': string,
    'slug': string
}

interface ApiEvolutions {
    'name': string,
    'pokedexId': number
}

interface ApiResistancesWithAbilities {
    'name': string,
    'damage_multiplier': number,
    'damage_relation': string
}

interface ApiPreEvolution {
    'name': string,
    'pokedexIdd': number
}

export interface Pokemon {
    'id': number,
    'pokedexId': number,
    'name': string,
    'image': string,
    'sprite': string,
    'slug': string,
    'stats': Stat,
    'apiTypes': ApiType[],
    'apiGeneration': number,
    'apiResistances': ApiResistance[],
    'resistanceModifyingAbilitiesForApi': [] | ResistanceModifyingAbilitiesForApi,
    'apiEvolutions': ApiEvolutions[],
    'apiPreEvolution': string | ApiPreEvolution,
    'apiResistancesWithAbilities': [] | ApiResistancesWithAbilities[]
}
