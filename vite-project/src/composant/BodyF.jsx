import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

// Import des composants nécessaires si divisés (Header, PokemonCard, PokemonDetail, etc.)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-600 text-white text-sm py-2 px-4">
          <div className="flex justify-between items-center">
            <span>🎮 Découvrez Pokémon Légendes Z-A - Sortie fin 2025</span>
            <button className="text-white hover:text-blue-200">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="bg-yellow-400 rounded-full p-2 mr-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-600">Pokémon</h1>
                <p className="text-xs text-gray-500">Site officiel</p>
              </div>
            </div>

            <nav className="hidden lg:flex space-x-8">
              {['Pokédex', 'Jeux vidéo', 'JCC', 'Anime', 'Apps'].map((item) => (
                <div className="relative group" key={item}>
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2">
                    <span>{item}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </nav>

            <button
              className="lg:hidden bg-blue-600 text-white p-2 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-gray-50 border-t">
            <div className="py-4 px-4 space-y-3">
              {['Pokédex', 'Jeux vidéo', 'JCC', 'Anime', 'Apps'].map((item) => (
                <a key={item} href="#" className="block text-gray-700 hover:text-blue-600 font-medium">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonPerPage = 20;

  const pokemonTypes = [
    'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting',
    'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost',
    'dragon', 'dark', 'steel', 'fairy'
  ];

  useEffect(() => {
    fetchPokemon();
  }, []);

  useEffect(() => {
    filterPokemon();
  }, [searchTerm, selectedType, pokemon]);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const responses = await Promise.all(
        Array.from({ length: 151 }, (_, i) => fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`).then(res => res.json()))
      );
      setPokemon(responses);
      setFilteredPokemon(responses);
    } catch (error) {
      console.error('Erreur lors du chargement des Pokémon:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPokemon = () => {
    let filtered = pokemon;

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.id.toString().includes(searchTerm)
      );
    }

    if (selectedType) {
      filtered = filtered.filter(p =>
        p.types.some(type => type.type.name === selectedType)
      );
    }

    setFilteredPokemon(filtered);
    setCurrentPage(1);
  };

  // Pagination
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = filteredPokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);
  const totalPages = Math.ceil(filteredPokemon.length / pokemonPerPage);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex flex-col items-center justify-center h-96">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-200 rounded-full"></div>
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin absolute top-0"></div>
          </div>
          <p className="text-xl font-semibold text-gray-700 mt-4">Chargement du Pokédex...</p>
          <p className="text-gray-500 mt-2">Récupération des données Pokémon</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un Pokémon par nom ou ID..."
              className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:border-blue-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:border-blue-300"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Tous les types</option>
            {pokemonTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {currentPokemon.map(p => (
            <div
              key={p.id}
              onClick={() => setSelectedPokemon(p)}
              className="bg-white border rounded-lg shadow hover:shadow-md cursor-pointer p-4 text-center"
            >
              <img src={p.sprites.front_default} alt={p.name} className="mx-auto mb-2 w-20 h-20" />
              <h2 className="text-sm font-bold capitalize text-gray-800">{p.name}</h2>
              <p className="text-xs text-gray-500">#{p.id}</p>
              <div className="flex justify-center space-x-2 mt-2">
                {p.types.map(t => (
                  <span
                    key={t.type.name}
                    className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800"
                  >
                    {t.type.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Précédent
          </button>
          <span className="px-3 py-1">Page {currentPage} / {totalPages}</span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Suivant
          </button>
        </div>
      </div>

      {/* Détail du Pokémon sélectionné */}
      {selectedPokemon && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button
              onClick={() => setSelectedPokemon(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPokemon.sprites.other["official-artwork"].front_default}
              alt={selectedPokemon.name}
              className="mx-auto mb-4 w-40 h-40"
            />
            <h2 className="text-xl font-bold capitalize text-center mb-2">{selectedPokemon.name}</h2>
            <p className="text-center text-gray-500 mb-2">ID: #{selectedPokemon.id}</p>
            <div className="flex justify-center space-x-2">
              {selectedPokemon.types.map(t => (
                <span
                  key={t.type.name}
                  className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-800"
                >
                  {t.type.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokedex;