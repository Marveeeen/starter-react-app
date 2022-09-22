import { useState, useEffect } from "react";

import PropTypes from "prop-types";

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <button onClick={() => onSelect(pokemon)}>Select</button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }),
    type: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  onSelect: PropTypes.func.isRequired,
};

const PokemonInfo = ({ name, base }) => (
  <section>
    <table>
      <thead>
        <tr>
          <th>{name.english}</th>
        </tr>
      </thead>
      <tbody>
      {Object.keys(base).map((key) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{base[key]}</td>
        </tr>
      ))}
      </tbody>
    </table>
  </section>
);

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
};

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/starter-react-app/pokemon.json')
      .then(resp => resp.json())
      .then(data => setPokemons(data));
  }, [filter])

  return (
    <div className="App">
      <header>
        <h1 className="title">Pokemon Search</h1>
      </header>
      <form>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </form>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70% 30%",
          gridColumnGap: "1rem",
        }}
      >
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
                  pokemon.name.english
                    .toLowerCase()
                    .includes(filter.toLowerCase())
                )
                .map((pokemon) => (
                  <PokemonRow
                    pokemon={pokemon}
                    key={pokemon.id}
                    onSelect={(pokemon) => setSelectedItem(pokemon)}
                  />
                ))}
            </tbody>
          </table>
        </section>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </div>
    </div>
  );
}

export default App;
