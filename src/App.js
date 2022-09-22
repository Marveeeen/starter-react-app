import pokemons from "./pokemon.json";
import PropTypes from 'prop-types'

const PokemonRow = ({ pokemon }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string
    }),
    type: PropTypes.arrayOf(PropTypes.string)
  })
}

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="title">Pokemon Search</h1>
      </header>
      <section>
        <table width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {pokemons?.map((pokemon) => (
              <PokemonRow pokemon={pokemon} key={pokemon.id} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
