import React from "react"


export const getPokeImg = async (pokeUrl: string) => {
  try {
    const response = await fetch(pokeUrl)
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.log('error in getPokeImg')
    console.log(error)
  }
  
}