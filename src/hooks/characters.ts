import { useContext, useEffect, useState } from 'react';
import { getCharacters } from '../services/RickandMortyAPI';
import { ModeContext } from '../context/ThemeContext';

interface Characters { id: number, name: string, image: string };

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Characters[]>([]);
  
  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters));
  }, [])

  return characters;
}

export const useMode = () => {
  const { mode } = useContext(ModeContext);

  return mode;
};

export const useModeToggle = () => {
  const { toggle } = useContext(ModeContext);

  return toggle;
};
