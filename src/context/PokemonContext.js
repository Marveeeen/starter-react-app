import { createContext, useState, useEffect, useReducer } from "react";

const PokemonContext = createContext({});

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_POKEMON":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      throw new Error("No action");
  }
};

export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, {
    pokemons: [],
    filter: "",
    selectedPokemon: null,
  });

  const { filter, pokemons, selectedPokemon } = state

  useEffect(() => {
    fetch("http://localhost:3000/starter-react-app/pokemon.json")
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({
          type: "SET_POKEMON",
          payload: data,
        })
      );
  }, [filter]);

  const handleSelect = (pokemon) => {
    dispatch({
      type: 'SET_SELECTED_POKEMON',
      payload: pokemon
    });
  };

  const handleChange = (e) => {
    dispatch({
      type: 'SET_SELECTED_POKEMON',
      action: null
    });
    dispatch({
      type: 'SET_FILTER',
      action: e.target.value
    });
  };

  return (
    <PokemonContext.Provider
      value={{
        filter,
        pokemons,
        selectedPokemon,
        onChange: handleChange,
        onSelect: handleSelect,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
