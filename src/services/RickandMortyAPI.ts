interface CharactersShape {
  results: [{id: number, name: string, image: string}]
}

export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((res: Response) => res.json())
    .then((characters: CharactersShape) => characters.results.map(
      character => ({
        id: character.id,
        name: character.name,
        image: character.image
      })
    ))
}
