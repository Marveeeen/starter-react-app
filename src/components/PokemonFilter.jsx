import { Input } from "../utils/styles";

const PokemonFilter = ({ filter, onChange }) => (
  <form>
    <Input type="text" value={filter} onChange={onChange} />
  </form>
);

export default PokemonFilter;
