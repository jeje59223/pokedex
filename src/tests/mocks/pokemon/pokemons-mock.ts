import type { Pokemon } from '@/models/pokemon'

export const pokemonsMock: Pokemon[] = [
    {
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
    },
    {
        id: 1,
        pokedexId: 1,
        name: 'Bulbizarre',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        slug: 'Bulbizarre',
        stats: {
            HP: 45,
            attack: 49,
            defense: 49,
            special_attack: 65,
            special_defense: 65,
            speed: 45
        },
        apiTypes: [
            {
                'name': 'Poison',
                'image': 'https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png'
            },
            {
                name: 'Plante',
                image: 'https: static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png'
            }
        ],
        apiGeneration: 1,
        apiResistances: [
            {
                name: 'F\u00e9e',
                damage_multiplier: 0.5,
                damage_relation: 'resistant'
            }
        ],
        resistanceModifyingAbilitiesForApi: [],
        apiEvolutions: [
            {
                name: 'Herbizarre',
                pokedexId: 2
            }
        ],
        apiPreEvolution: 'none',
        apiResistancesWithAbilities: []
    },
    {
        id: 2,
        pokedexId: 2,
        name: 'Herbizarre',
        image: 'https: raw.githubusercontent.com PokeAPI sprites master sprites pokemon other official-artwork 2.png',
        sprite: 'https: raw.githubusercontent.com PokeAPI sprites master sprites pokemon 2.png',
        slug: 'Herbizarre',
        stats: {
            HP: 60,
            attack: 62,
            defense: 63,
            special_attack: 80,
            special_defense: 80,
            speed: 60
        },
        apiTypes: [
            {
                name: 'Poison',
                image: 'https: static.wikia.nocookie.net pokemongo images 0 05 Poison.png'
            },
            {
                name: 'Plante',
                image: 'https: static.wikia.nocookie.net pokemongo images c c5 Grass.png'
            }
        ],
        apiGeneration: 1,
        apiResistances: [
            {
                name: 'F\u00e9e',
                damage_multiplier: 0.5,
                damage_relation: 'resistant'
            }
        ],
        resistanceModifyingAbilitiesForApi: [],
        apiEvolutions: [
            {
                name: 'Florizarre',
                pokedexId: 3
            }
        ],
        apiPreEvolution: {
            name: 'Bulbizarre',
            pokedexIdd: 1
        },
        apiResistancesWithAbilities: []
    },
    {
        id: 3,
        pokedexId: 3,
        name: 'Florizarre',
        image: 'https: raw.githubusercontent.com PokeAPI sprites master sprites pokemon other official-artwork 3.png',
        sprite: 'https: raw.githubusercontent.com PokeAPI sprites master sprites pokemon 3.png',
        slug: 'Florizarre',
        stats: {
            HP: 80,
            attack: 82,
            defense: 83,
            special_attack: 100,
            special_defense: 100,
            speed: 80
        },
        apiTypes: [
            {
                name: 'Poison',
                image: 'https: static.wikia.nocookie.net pokemongo images 005 Poison.png'
            },
            {
                name: 'Plante',
                image: 'https: static.wikia.nocookie.net pokemongo images c c5 Grass.png'
            }
        ],
        apiGeneration: 1,
        apiResistances: [
            {
                name: 'T\u00e9n\u00e8bres',
                damage_multiplier: 1,
                damage_relation: 'neutral'
            },
            {
                name: 'F\u00e9e',
                damage_multiplier: 0.5,
                damage_relation: 'resistant'
            }
        ],
        resistanceModifyingAbilitiesForApi: [],
        apiEvolutions: [],
        apiPreEvolution: {
            name: 'Herbizarre',
            pokedexIdd: 2
        },
        apiResistancesWithAbilities: []
    }
]
