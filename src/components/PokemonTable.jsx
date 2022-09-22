import { useContext } from "react";
import PokemonRow from "./PokemonRow";
import PokemonContext from "../context/PokemonContext";

const PokemonTable = () => {
  const { pokemons, filter, onSelect } = useContext(PokemonContext);
  return (
    <section>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemons
            .filter((pokemon) =>
              pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
            )
            .map((pokemon) => (
              <PokemonRow
                pokemon={pokemon}
                key={pokemon.id}
                onSelect={onSelect}
              />
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default PokemonTable;
