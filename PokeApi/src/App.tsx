import { useEffect, useState } from 'react'
import './App.css'
import useGetPokeData from './hooks/useGetPokeData'
import PokeToPage from './components/PokeToPage'
import { reorderPokemon } from './utility/reorderPokemon'


function App() {
  const {pokeData, getPokeData} = useGetPokeData()
  const [pagnationCount, setPagnationCount] = useState(0)
  const [orderByPageID, setOrderByPageID] = useState(true);

  useEffect(() => {
    console.log(pagnationCount)
    getPokeData(pagnationCount)
  }, [pagnationCount, orderByPageID])

  const orderPokemonOnPage = () => {
    let pokeDataToPage;
    if(orderByPageID) {
      pokeDataToPage = pokeData
    } else {
      pokeDataToPage = reorderPokemon(pokeData)
    }
    
    const pokemonToPage = pokeDataToPage?.results.map((d) => {
      return <PokeToPage name={d.name} img={d.img} key={d.name}></PokeToPage>
    })
    return pokemonToPage;
  }


  return (
    <>
    <div className='header'>
      <h1> All The Pokemon!</h1>
      <div className='radio-inputs'>
        <label>
          <input type='radio' id='OrderByName' name='poke-radio' onChange={() => {(setOrderByPageID(false))}}></input>
          Sort Name:
        </label>
        <label>
          <input type='radio' id='OrderByID' name='poke-radio'onChange={() => {(setOrderByPageID(true))}}></input>
          Sort ID:
        </label>
      </div>
    </div>
    <div className='card-container'>
      {orderPokemonOnPage()}
    </div>
    <div className='footer'>
      <button onClick={() => {setPagnationCount(pagnationCount - 12)}}>Previous 12</button>
      <button onClick={() => {setPagnationCount(pagnationCount + 12)}}>Next 12</button>
    </div>
    </>
  )
}

export default App
