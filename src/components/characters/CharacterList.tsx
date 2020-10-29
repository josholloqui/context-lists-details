import * as React from 'react';
import CharacterItem from './CharacterItem';
import { useCharacters, useMode } from '../../hooks/characters';
import './CharacterList.scss';

const CharacterList: React.FunctionComponent = () => {
  const characters = useCharacters();
  const mode = useMode();

  const displayMode = (mode === 'dark') ? 'dark' : 'light'

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    <ul className={displayMode} id='character-list'>
      {characterElements}
    </ul>
  );
};

export default CharacterList;
