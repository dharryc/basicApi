import type { PokemonApiResponse } from '../types/PokemonApiResponse'


export function PokemonCard({ pokemon, currentHealth, onDamageEventHandler }: PokemonCardProps) {
    return (
        <div className="pokemonCard">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Current Health: {currentHealth}</p>
            <button onClick={onDamageEventHandler}>Take 10 Damage</button>
        </div>
    )
}

type PokemonCardProps = {
    pokemon: PokemonApiResponse
    currentHealth: number
    onDamageEventHandler: () => void
}