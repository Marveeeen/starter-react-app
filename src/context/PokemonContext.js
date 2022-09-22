import { createContext, useState, useEffect } from "react";

const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/starter-react-app/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => setPokemons(data));
  }, [filter]);

  const handleSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleChange = (e) => {
    setSelectedPokemon(null);
    setFilter(e.target.value);
  };

  return (
    <PokemonContext.Provider
      value={{
        filter,
        pokemons,
        selectedPokemon,
        onChange: handleChange,
        setPokemons,
        onSelect: handleSelect,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
