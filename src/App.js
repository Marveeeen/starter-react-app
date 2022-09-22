import { useState, useEffect } from "react";

import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { CssBaseline, Button } from "@mui/material";

import pokemonType from "./utils/pokemonType";
import PokemonRow from "./components/PokemonRow";

const PokemonInfo = ({ name: { english }, base }) => {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>{english}</th>
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
};

PokemonInfo.propTypes = pokemonType;

const PokemonFilter = ({ filter, onChange }) => (
  <form>
    <Input type="text" value={filter} onChange={onChange} />
  </form>
);

const PokemonTable = ({ pokemons, filter, onSelect }) => (
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

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/starter-react-app/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => setPokemons(data));
  }, [filter]);

  const handleSelect = (pokemon) => {
    setSelectedItem(pokemon);
  };

  const handleChange = (e) => {
    setSelectedItem(null);
    setFilter(e.target.value);
  };

  return (
    <PageContainer>
      <CssBaseline />
      <header>
        <Title>Pokemon Search</Title>
      </header>

      <TwoColumnLayout>
        <section>
          <PokemonFilter filter={filter} onChange={handleChange} />
          <PokemonTable
            pokemons={pokemons}
            filter={filter}
            onSelect={handleSelect}
          />
        </section>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </TwoColumnLayout>
    </PageContainer>
  );
}

export default App;
