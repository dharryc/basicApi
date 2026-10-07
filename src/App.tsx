import { useEffect, useState } from 'react'
import './App.css'
import type { PokemonApiResponse } from './types/PokemonApiResponse'
import { PokemonCard } from './components/PokemonCard'

function App() {
  // seems like you have to allow null here, maybe because it's a promise?
  const [pokemon, setPokemon] = useState<PokemonApiResponse | null>(null)
  const [currentHealth, setCurrentHealth] = useState(100)

  async function getPokemon() {
    const id = Math.floor(Math.random() * 1008) + 1
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    const data: PokemonApiResponse = await response.json()
    setPokemon(data)
    setCurrentHealth(100)
  }

  function takeDamage() {
    setCurrentHealth(Math.max(0, currentHealth - 10))
  }

  useEffect(() => {
    getPokemon()
  }, [])

  useEffect(() => {
    if (currentHealth === 0) {
      getPokemon()
    }
  }, [currentHealth])

  return (
    <section id="center">
      {pokemon === null ? (
        <p>Loading...</p>
      ) : (
        <PokemonCard
          pokemon={pokemon}
          currentHealth={currentHealth}
          onDamageEventHandler={takeDamage}
        />
      )}
    </section>
  )
}

export default App
