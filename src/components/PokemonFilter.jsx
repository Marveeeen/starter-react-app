import { useContext } from "react";
import PokemonContext from "../context/PokemonContext";
import { Input } from "../assets/styles";

const PokemonFilter = () => {
  const { filter, onChange } = useContext(PokemonContext)
  return (
    <form>
      <Input 
        type="text" 
        value={filter} 
        onChange={onChange} 
      />
    </form>
  );
};

export default PokemonFilter;
