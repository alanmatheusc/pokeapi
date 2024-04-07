import Image from 'next/image'
import Link from 'next/link'

import '../styles/Card.style.css'
export default async function Card({pokemon}){
    return(
        <div className='style-card'>
            <Image src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width="120"
            height="120"
            alt="Pokemon"
            />
            <h3 className='style-card-id'>#{pokemon.id}</h3>
            <h3 className='style-card-pokemonName'>{pokemon.name}</h3>
            <Link className='style-card-button' href={`/pokemons/${pokemon.id}`}>Mais informações</Link>

        </div> 
    )
}