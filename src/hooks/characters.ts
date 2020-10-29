import { useEffect, useState } from 'react';
import { getCharacters } from '../services/RickandMortyAPI';

interface Characters { id: number, name: string, image: string }

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Characters[]>([]);
  
  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters))
  }, [])

  return characters;
}
