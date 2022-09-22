import pokemonType from "../utils/pokemonType";

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

export default PokemonInfo;
