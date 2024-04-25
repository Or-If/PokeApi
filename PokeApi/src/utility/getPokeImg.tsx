import React from "react"
import { PokemonResponseType } from "../types/PokemonResponseType";


export const getPokeImg = async (pokeUrl: string) => {
  try {
    const response = await fetch(pokeUrl)
    const data = await response.json() as PokemonResponseType;
    return data.sprites.front_default!;
  }
  catch (error) {
    console.log('error in getPokeImg')
    console.log(error)
  }
  
}