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
    <section className='bg-amber-500'>
      <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1 className='text-4xl font-light text-gray-500 '>Pokémon</h1>
        {loading ? (
          <p>Chargement...</p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {pokemons.map((pokemon) => (
              <div key={pokemon.id} style={{ border: '1px solid #ccc', borderRadius: '12px', padding: '1rem', width: '180px', textAlign: 'center' }}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
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
