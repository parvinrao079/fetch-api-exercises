document.addEventListener('DOMContentLoaded', () => 
{
    const pokemonContainer = document.getElementById('pokemon-container');
  
    // Function to fetch data for a single Pokémon
    const fetchPokemon = async (id) => 
    {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      return data;
    };
  
    // Function to create a card for a Pokémon
    const createPokemonCard = (pokemon) => 
    {
      const card = document.createElement('div');
      card.className = 'bg-white p-4 rounded-lg shadow-lg flex flex-col items-center';
  
      const img = document.createElement('img');
      img.src = pokemon.sprites.front_default;
      img.alt = pokemon.name;
      img.className = 'w-24 h-24 mb-2';
  
      const name = document.createElement('h2');
      name.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      name.className = 'text-lg font-bold mb-2';
  
      const type = document.createElement('p');
      type.textContent = `Type: ${pokemon.types.map(t => t.type.name).join(', ')}`;
      type.className = 'text-gray-700';
  
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(type);
      pokemonContainer.appendChild(card);
    };
  
    // Fetch and display the first 150 Pokémon
    const fetchAndDisplayPokemons = async () => {
      for (let i = 1; i <= 150; i++) {
        const pokemon = await fetchPokemon(i);
        createPokemonCard(pokemon);
      }
    };
  
    fetchAndDisplayPokemons();
});
  