import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, Play, ExternalLink } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto">
        {/* Top bar */}
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
            {/* Logo */}
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

            {/* Navigation desktop */}
            <nav className="hidden lg:flex space-x-8">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2">
                  <span>Pokédex</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2">
                  <span>Jeux vidéo</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2">
                  <span>JCC</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2">
                  <span>Anime</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2">
                  <span>Apps</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </nav>

            {/* Menu mobile */}
            <button 
              className="lg:hidden bg-blue-600 text-white p-2 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Menu mobile ouvert */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-50 border-t">
            <div className="py-4 px-4 space-y-3">
              <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Pokédex</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Jeux vidéo</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">JCC</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Anime</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Apps</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const PokemonCard = ({ pokemon, onClick }) => {
  const typeColors = {
    normal: '#A8A8A8',
    fire: '#FF6B6B',
    water: '#4ECDC4',
    electric: '#FFE66D',
    grass: '#95E1A3',
    ice: '#A8E6CF',
    fighting: '#FF8E8E',
    poison: '#DA70D6',
    ground: '#DEB887',
    flying: '#B19CD9',
    psychic: '#FFB3BA',
    bug: '#BFEF45',
    rock: '#D2B48C',
    ghost: '#9370DB',
    dragon: '#7B68EE',
    dark: '#696969',
    steel: '#B0C4DE',
    fairy: '#FFB6C1'
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 overflow-hidden group"
      onClick={() => onClick(pokemon)}
    >
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 text-center">
        <div className="mb-4">
          <span className="text-sm text-gray-500 font-medium">
            N° {pokemon.id.toString().padStart(4, '0')}
          </span>
        </div>
        <img 
          src={pokemon.sprites.other['official-artwork']?.front_default || pokemon.sprites.front_default} 
          alt={pokemon.name}
          className="w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
        />
        <h3 className="text-lg font-bold capitalize text-gray-800 mb-3">
          {pokemon.name}
        </h3>
        <div className="flex justify-center gap-2">
          {pokemon.types.map((type, index) => (
            <span 
              key={index}
              className="px-3 py-1 rounded-full text-white text-sm font-medium shadow-sm"
              style={{ backgroundColor: typeColors[type.type.name] || '#A8A8A8' }}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const PokemonDetail = ({ pokemon, onClose }) => {
  const typeColors = {
    normal: '#A8A8A8',
    fire: '#FF6B6B',
    water: '#4ECDC4',
    electric: '#FFE66D',
    grass: '#95E1A3',
    ice: '#A8E6CF',
    fighting: '#FF8E8E',
    poison: '#DA70D6',
    ground: '#DEB887',
    flying: '#B19CD9',
    psychic: '#FFB3BA',
    bug: '#BFEF45',
    rock: '#D2B48C',
    ghost: '#9370DB',
    dragon: '#7B68EE',
    dark: '#696969',
    steel: '#B0C4DE',
    fairy: '#FFB6C1'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto shadow-2xl">
        {/* Header avec image de fond */}
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-8">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 bg-white/20 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-white/80 mb-2">N° {pokemon.id.toString().padStart(4, '0')}</p>
              <h1 className="text-4xl md:text-5xl font-bold capitalize mb-4">
                {pokemon.name}
              </h1>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {pokemon.types.map((type, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-full text-white font-semibold bg-white/20 backdrop-blur-sm"
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={pokemon.sprites.other['official-artwork']?.front_default || pokemon.sprites.front_default} 
                alt={pokemon.name}
                className="w-48 h-48 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="p-8 space-y-8">
          {/* Informations générales */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Profil</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-600 text-sm">Taille</span>
                  <p className="font-semibold text-lg">{(pokemon.height / 10).toFixed(1)} m</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Poids</span>
                  <p className="font-semibold text-lg">{(pokemon.weight / 10).toFixed(1)} kg</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Capacités</h3>
              <div className="space-y-2">
                {pokemon.abilities.map((ability, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="capitalize font-medium text-gray-700">
                      {ability.ability.name.replace('-', ' ')}
                    </span>
                    {ability.is_hidden && (
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                        Cachée
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Types</h3>
              <div className="space-y-2">
                {pokemon.types.map((type, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3"
                  >
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: typeColors[type.type.name] }}
                    ></div>
                    <span className="capitalize font-medium text-gray-700">
                      {type.type.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Statistiques de base</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {pokemon.stats.map((stat, index) => {
                const statNames = {
                  'hp': 'Points de Vie',
                  'attack': 'Attaque',
                  'defense': 'Défense',
                  'special-attack': 'Attaque Spéciale',
                  'special-defense': 'Défense Spéciale',
                  'speed': 'Vitesse'
                };

                const statColors = {
                  'hp': '#FF6B6B',
                  'attack': '#FF8E8E',
                  'defense': '#4ECDC4',
                  'special-attack': '#FFE66D',
                  'special-defense': '#95E1A3',
                  'speed': '#B19CD9'
                };
                
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">
                        {statNames[stat.stat.name] || stat.stat.name}
                      </span>
                      <span className="font-bold text-lg text-gray-800">
                        {stat.base_stat}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="h-3 rounded-full transition-all duration-700 ease-out shadow-sm" 
                        style={{ 
                          width: ${Math.min((stat.base_stat / 200) * 100, 100)}%,
                          backgroundColor: statColors[stat.stat.name] || '#A8A8A8'
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sprites supplémentaires */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Autres vues</h3>
            <div className="flex justify-center gap-8">
              {pokemon.sprites.front_default && (
                <div className="text-center">
                  <img 
                    src={pokemon.sprites.front_default} 
                    alt="Vue de face"
                    className="w-24 h-24 mx-auto bg-white rounded-lg p-2 shadow-sm"
                  />
                  <p className="text-sm text-gray-600 mt-2">Face</p>
                </div>
              )}
              {pokemon.sprites.back_default && (
                <div className="text-center">
                  <img 
                    src={pokemon.sprites.back_default} 
                    alt="Vue de dos"
                    className="w-24 h-24 mx-auto bg-white rounded-lg p-2 shadow-sm"
                  />
                  <p className="text-sm text-gray-600 mt-2">Dos</p>
                </div>
              )}
              {pokemon.sprites.front_shiny && (
                <div className="text-center">
                  <img 
                    src={pokemon.sprites.front_shiny} 
                    alt="Chromatique"
                    className="w-24 h-24 mx-auto bg-white rounded-lg p-2 shadow-sm"
                  />
                  <p className="text-sm text-gray-600 mt-2">✨ Chromatique</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
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
      const pokemonList = [];
      
      for (let i = 1; i <= 151; i++) {
        const response = await fetch(https://pokeapi.co/v2/pokemon/${i});
        const data = await response.json();
        pokemonList.push(data);
      }
      
      setPokemon(pokemonList);
      setFilteredPokemon(pokemonList);
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
      
      {/* Hero Section avec style officiel */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Pokédex National
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Découvrez tous les Pokémon de la région de Kanto
            </p>
            
            {/* Statistiques */}
            <div className="flex justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold">151</div>
                <div className="text-white/80">Pokémon</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">18</div>
                <div className="text-white/80">Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">1</div>
                <div className="text-white/80">Génération</div>
              </div>
            </div>
            
            {/* Barre de recherche améliorée */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Rechercher un Pokémon par nom ou numéro..."
                  className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur-sm text-gray-800 rounded-xl text-lg focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filtres */}
        <div className="mb-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Filtrer par type</h2>
          <div className="flex flex-wrap gap-3">
            <button
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedType === '' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedType('')}
            >
              Tous les types
            </button>
            {pokemonTypes.map(type => (
              <button
                key={type}
                className={`px-4 py-2 rounded-full font-medium capitalize transition-all ${
                  selectedType === type 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Résultats */}
        <div className="mb-6">
          <p className="text-gray-600 text-lg">
            <span className="font-semibold text-gray-800">{filteredPokemon.length}</span> Pokémon trouvé{filteredPokemon.length > 1 ? 's' : ''}
            {selectedType && (
              <span className="ml-2 text-blue-600">
                • Type: <span className="capitalize font-medium">{selectedType}</span>
              </span>
            )}
          </p>
        </div>

        {/* Grille des Pokémon */}
        {filteredPokemon.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {currentPokemon.map(p => (
                <PokemonCard 
                  key={p.id} 
                  pokemon={p} 
                  onClick={setSelectedPokemon}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <button
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Précédent
                </button>
                
                <div className="flex space-x-1">
                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    const pageNum = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
                    if (pageNum > totalPages) return null;
                    
                    return (
                      <button
                        key={pageNum}
                        className={`px-3 py-2 rounded-lg transition-colors ${
                          currentPage === pageNum
                            ? 'bg-blue-600 text-white'
                            : 'bg-white border border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => setCurrentPage(pageNum)}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Suivant
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="mb-4">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun Pokémon trouvé</h3>
            <p className="text-gray-500 mb-4">Essayez de modifier vos critères de recherche</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedType('');
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Modal de détail */}
        {selectedPokemon && (
          <PokemonDetail 
            pokemon={selectedPokemon} 
            onClose={() => setSelectedPokemon(null)}
          />
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 The Pokémon Company International. Pokémon et les noms des personnages Pokémon sont des marques de The Pokémon Company.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Pokedex;