import PokemonRow from "./PokemonRow";

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

export default PokemonTable;
