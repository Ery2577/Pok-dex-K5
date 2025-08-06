import React, { useEffect, useState } from 'react';
const Poke = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        const data = await res.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );

        setPokemons(pokemonDetails);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement :", error);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <section className='bg-img h-screen w-full'>
      <div  className='font-[Arial]'>
        <h1 className='text-4xl font-light text-gray-500'>Pokémon</h1>
        {loading ? (
          <p>Chargement...</p>
        ) : (
          <div className='flex justify-center items-center flex-wrap gap-8 mt-8 overflow-auto h-4/5 w-[1000px] '>
            {pokemons.map((pokemon) => (
              <div key={pokemon.id} className='border border-gray-300 rounded-[12px] p-4 w-[200px] text-center bg-gray-200 flex justify-center items-center '>
                <img className='w-[150px]' src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h3 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h3>
                <p>#{String(pokemon.id).padStart(4, '0')}</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                  {pokemon.types.map((type) => (
                    <span key={type.slot} style={{
                      padding: '0.2rem 0.5rem',
                      background: getTypeColor(type.type.name),
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: '0.8rem'
                    }}>
                      {type.type.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Fonction utilitaire pour colorer selon le type
function getTypeColor(type) {
  const colors = {
    grass: '#78C850',
    poison: '#A040A0',
    fire: '#F08030',
    water: '#6890F0',
    flying: '#A890F0',
    bug: '#A8B820',
    normal: '#A8A878',
    // ajoute d'autres types si nécessaire
  };
  return colors[type] || '#333';
}

export default Poke;
