import React from 'react'

interface PokeToPageProps {
  name: string;
  img: string;
}

function PokeToPage({name, img}: PokeToPageProps) {
  return (
    <>
      <div className='card' id=''>
        <img src={img}></img>
        <h2>{name}</h2>
      </div> 
    </>
  )
}

export default PokeToPage