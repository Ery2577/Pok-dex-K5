import React, { useEffect, useState } from 'react';

function getTypeColor(type) {
  const colors = {
    grass: '#78C850',
    poison: '#A040A0',
    fire: '#F08030',
    water: '#6890F0',
    flying: '#A890F0',
    bug: '#A8B820',
    normal: '#A8A878',
  };
  return colors[type] || '#333';
}

const Poke = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

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
        console.error("Erreur :", error);
        setLoading(false);
      }
    };
    fetchPokemons();
  }, []);

  return (
    <section className='relative min-h-screen w-fullfont-[Arial] bg-img'>

      {selectedPokemon && (
        <div className="absolute z-50 top-10 left-1/3 transform -translate-x-1/2 w-[50vw] bg-white  rounded-xl shadow-2xl border border-gray-300 p-16">
          <button
            className="absolute top-2 right-4 text-gray-500 hover:text-red-500 font-bold"
            onClick={() => setSelectedPokemon(null)}
          >
            ✖
          </button>

          <div className="flex flex-col md:flex-row items-center gap-6 m10" >
            <img
              src={selectedPokemon.sprites.other['official-artwork'].front_default}
              alt={selectedPokemon.name}
              className="w-[200px]"
            />
            <div className="flex-1 text-center md:text-left m10">
              <h2 className="text-3xl font-bold capitalize text-gray-700">
                {selectedPokemon.name} <span className="text-gray-400">N° {String(selectedPokemon.id).padStart(4, '0')}</span>
              </h2>
              <p className="mt-2 text-sm text-gray-500 m10">
                Ce Pokémon est très spécial !
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm bg-blue-400 text-white rounded-lg p10">
                <div><span className="font-bold">Taille :</span> {selectedPokemon.height / 10} m</div>
                <div><span className="font-bold">Poids :</span> {selectedPokemon.weight / 10} kg</div>
                <div><span className="font-bold">Catégorie :</span> Inconnu</div>
                <div><span className="font-bold">Talent :</span> {selectedPokemon.abilities[0]?.ability.name}</div>
              </div>

              <div className="mt-4 flex gap-2 justify-center md:justify-start pt">
                {selectedPokemon.types.map((type) => (
                  <span
                    key={type.slot}
                    className='text-white text-sm flex justify-center items-center py-1 rounded w-13 h-6'
                    style={{ backgroundColor: getTypeColor(type.type.name) }}
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='flex justify-center items-center flex-col gap-2.5 pt'>
        <h1 className='text-4xl font-light text-gray-500'>Pokémon</h1>
        {loading ? (
          <p>Chargement...</p>
        ) : (
          <div className='flex justify-center flex-wrap gap-8 mt-8 h-[85vh] overflow-auto w-[80vw] bg-white py-4 ' style={{padding: '1rem 0.5rem'}}>
            {pokemons.map((pokemon) => (
              <div
                key={pokemon.id}
                onClick={() => setSelectedPokemon(pokemon)}
                className='border-gray-200 rounded-[12px] p-4 w-[250px] h-[250px] text-center bg-gray-100 flex justify-center items-center flex-col shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'
              >
                <img className='w-[150px]' src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h3 className='capitalize font-bold text-gray-600'>{pokemon.name}</h3>
                <p className='font-bold text-gray-500'>#{String(pokemon.id).padStart(4, '0')}</p>
                <div className='flex justify-center gap-2 mt-2'>
                  {pokemon.types.map((type) => (
                    <span
                      key={type.slot}
                      className='text-white text-sm px-2 py-1 rounded w-13 h-6'
                      style={{ background: getTypeColor(type.type.name) }}
                    >
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
};

export default Poke;
