import React, { useState } from 'react'
import { PokeType } from '../types/PokeTypes';
import { getPokeImg } from '../utility/getPokeImg';


function useGetPokeData() {
  const [pokeData, setPokeData] = useState<PokeType>();


  const getPokeData = async (pagePagnation: number) => {
    try {
      const pokemonPerPage = 24;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${pokemonPerPage}&offset=` + pagePagnation);
      const data = await response.json() as PokeType;

      for (let i = 0; i < pokemonPerPage; i++) {
        const result = await getPokeImg(data.results[i].url);
        if (result == undefined) {
          throw new Error("unable to make api request")
        }
        data.results[i].img = result;
      }
      setPokeData(data);
      }

    catch (error) {
      console.log("error in getPokeData")
      console.log(error)
    }
  }
  return {pokeData, getPokeData};
}

export default useGetPokeData