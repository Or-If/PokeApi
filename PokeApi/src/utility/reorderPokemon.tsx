import { PokeType } from "../types/PokeTypes";

export const reorderPokemon = (pokeDataResults: PokeType | undefined) => {
  pokeDataResults?.results.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  })
  return pokeDataResults;
}