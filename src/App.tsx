import { useState, useEffect } from 'react'

import './App.css'

const API_URL = 'https://rickandmortyapi.com/api/character?page=1';

function App(): JSX.Element {
  interface Character {
    id: number;
    name: string;
    image: string;
 }

  const [character, setCharacter] = useState<Character[]>([]);



  useEffect(() => {
    async function fetchResponse() {
      try {
  
      
      const response = await fetch(API_URL);
      const { results } = await response.json();
  
      setCharacter(results)
    } catch (error) {return error}
  }
    fetchResponse()
      }, [])



  return (
    <>
      <h1>Rick and Morty</h1>
      <div>{
            character.map(character => {
                return (
                    <div key={character.id}>
                        <p>Name: {character.name}</p>
                        <img src={character.image} alt="" />
                    </div>
                )
            })
        }</div>
    </>
  )
}

export default App
