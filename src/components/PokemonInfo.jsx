import { useContext } from "react";
import PokemonContext from "../context/PokemonContext";
import pokemonType from "../utils/pokemonType";

const PokemonInfo = () => {
  const { selectedPokemon } = useContext(PokemonContext)
  return selectedPokemon ? (
    <section>
      <table>
        <thead>
          <tr>
            <th>{selectedPokemon.name.english}</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedPokemon.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  ) : null;
};

PokemonInfo.propTypes = pokemonType;

export default PokemonInfo;
