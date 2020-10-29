import * as React from 'react';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../../hooks/characters';

const CharacterList: React.FunctionComponent = () => {
  const characters = useCharacters();

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

export default CharacterList;
