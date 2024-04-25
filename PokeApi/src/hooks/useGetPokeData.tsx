import React, { useState } from 'react'
import { PokeType } from '../types/PokeTypes';
import { getPokeImg } from '../utility/getPokeImg';


function useGetPokeData() {
  const [pokeData, setPokeData] = useState<PokeType | undefined>(undefined);


  const getPokeData = async (pagePagnation: number) => {
    const pokemonPerPage = 12;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${pokemonPerPage}&offset=` + pagePagnation);
    const data = await response.json();
    for(let i = 0; i < pokemonPerPage; i++) {
      data.results[i].img = await getPokeImg(data.results[i].url);
    }
    setPokeData(data);
  }

  return {pokeData, getPokeData};
}

export default useGetPokeData