interface PokeToPageProps {
  name: string;
  img: string;
}

function PokeToPage({name, img}: PokeToPageProps) {
  
  return (
    <>
      <div className='card'>
        <img src={img} className="pokemon-image"></img>
        <h2>{name.slice(0, 1).toUpperCase() + name.slice(1)}</h2> 
      </div> 
    </>
  )
}

export default PokeToPage

// Probably a smoother way to uppercase first letter only.