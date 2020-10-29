import * as React from 'react';
import { useMode, useModeToggle } from '../../hooks/characters';

const Header: React.FunctionComponent = () => {
  const mode = useMode();
  const toggle = useModeToggle();

  const displayMode = (mode === 'dark') ? 'light' : 'dark'

  return (
    <header className={mode}>
      <h1>Rick and Morty</h1>
      <button onClick={toggle}>{displayMode} mode</button>
    </header>
  )
}

export default Header;
