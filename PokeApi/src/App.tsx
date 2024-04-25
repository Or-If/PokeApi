import { useEffect, useState } from 'react'
import './App.css'
import useGetPokeData from './hooks/useGetPokeData'
import PokeToPage from './components/PokeToPage' // I renamed this to be capital and its having a little fit



function App() {
  const {pokeData, getPokeData} = useGetPokeData()
  const [pokeImg, setPokeImg] = useState<string[] | undefined>(undefined);
  let [pagnationCount, setPagnationCount] = useState(0)

  useEffect(() => {
    getPokeData(pagnationCount)
  }, [pagnationCount])

  const pokemonToPage = pokeData?.results.map((d) => {
    return <PokeToPage name={d.name} img={d.img.sprites.front_default}></PokeToPage>
  })


  return (
    <>
    <div className='card-container'>
      {pokemonToPage}
    </div>
    <div className='footer'>
      <button onChange={() => {setPagnationCount(pagnationCount++)}}>Next</button>
      
      <button onChange={() => {} }
      >Back</button>
    </div>
    </>
  )
}

export default App
