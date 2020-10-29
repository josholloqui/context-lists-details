import * as React from 'react';
import { render, cleanup } from '@testing-library/react'
import CharacterList from './CharacterList';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterList component', () => {
  afterEach(() => cleanup());

  it('render CharacterList', async() => {
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterList />
      </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
