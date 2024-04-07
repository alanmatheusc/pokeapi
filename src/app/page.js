import Link from 'next/link'


import Pokemons from './pokemons/GetAllPokemons';
import './styles/Home.style.css'
import Card from './pokemons/Card';

export default function Home() {
  return (
  <>
  <div className='title-container'>
    <h1 className='title'>Poke<span>Api</span></h1>
    </div>
    <div className='pokemon-container'>
      <Pokemons/>
    </div>
  </>
  
      );
}
