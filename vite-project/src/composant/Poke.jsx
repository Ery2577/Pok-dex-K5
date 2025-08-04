import { useEffect } from "react";
import { useState } from "react";

function Poke(){
    const [pokemons , setPokemons] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        async function fetchPokemons() {
            const response = await
            fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
            const data = await response.json();

            const details = await Promise.all(
                data.results.map(async (pokemon) =>{
                    const res = await fetch(pokemon.url);
                    return await res.json();
                })
            );
            setPokemons(details);
            setLoading(false);
        }
            fetchPokemons();
    },[])

    if (loading) return <p>Chargement..</p>;
    return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">

    {pokemons.map((pokemon)=>(
<       div key={pokemon.id} className="bg-white rounded shadow text-center p-4">
            <img src="{pokemon.sprites,other['official-artwork].front_default}" 
                alt="{pokemon.name}"
                className="w-20 mx-5" />
            <h2>{pokemon.name}</h2>
        </div>
 ))}
    </div>
    );
}
export default  Poke;

