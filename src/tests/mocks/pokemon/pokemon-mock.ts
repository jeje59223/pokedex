import type { Pokemon } from '@/models/pokemon'

export const pokemonMock: Pokemon = {
    id: 850,
    pokedexId: 850,
    name: 'Grillepattes',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/850.png',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png',
    slug: 'Grillepattes',
    stats: {
        HP: 50,
        attack: 65,
        defense: 45,
        special_attack: 50,
        special_defense: 50,
        speed: 45
    },
    apiTypes: [
        {
            name: 'Insecte',
            image: 'https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png'
        },
        {
            name: 'Feu',
            image: 'https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png'
        }
    ],
    apiGeneration: 8,
    apiResistances: [
        {
            name: 'Normal',
            damage_multiplier: 1,
            damage_relation: 'neutral'
        },
        {
            name: 'Combat',
            damage_multiplier: 0.5,
            damage_relation: 'resistant'
        },
        {
            name: 'Vol',
            damage_multiplier: 2,
            damage_relation: 'vulnerable'
        },
    ],
    resistanceModifyingAbilitiesForApi: {
        name: 'Torche',
        slug: 'Torche'
    },
    apiEvolutions: [
        {
            name: 'Scolocendre',
            pokedexId: 851
        }
    ],
    apiPreEvolution: 'none',
    apiResistancesWithAbilities: [
        {
            name: 'Normal',
            damage_multiplier: 1,
            damage_relation: 'neutral'
        },
        {
            name: 'Combat',
            damage_multiplier: 0.5,
            damage_relation: 'resistant'
        },
    ]
}
