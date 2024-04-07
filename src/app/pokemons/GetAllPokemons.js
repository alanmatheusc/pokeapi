import Card from "./Card";

export default  async function Pokemons() {
  const maxPokemons = 20;
  const api = 'https://pokeapi.co/api/v2/pokemon/';
  
  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  // Correção: atribuindo IDs corretamente
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });
  const pokemons = data.results
  return (
    <>
      {pokemons?.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon}></Card>
      ))}
    </>

  );
}

