import PropTypes from 'prop-types';
import Image from 'next/image'
import '../../styles/Pokemon.style.css'
// Aqui estou coletando o id do Pokemon para fazer a requisição do pokemon por ID.
const props = {
    params:{
        pokemonId:PropTypes.string
    }
}
async function PokemonById({params}){
    const api = `https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`;
    const res = await fetch(`${api}`);
    const data = await res.json();
    return(

        <div className='pokemon-data-container'>
            <p className='pokemon-name'>{data.name}</p>
 <Image src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${params.pokemonId}.svg`}
            width="200"
            height="200"
            alt="Pokemon"
            />
           <div className='pokemon-types-container'>
            <h3>Tipo:</h3>
                {data?.types.map((data,index)=>(
                <span className='pokemon-type'key={index}>{data.type.name}</span>
            ))}
           </div>
        </div>

)
}




  export default PokemonById