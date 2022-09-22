import { CssBaseline } from "@mui/material";
import { Title, PageContainer, TwoColumnLayout } from "./utils/styles";

import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <PokemonProvider>
      <PageContainer>
        <CssBaseline />
        <header>
          <Title>Pokemon Search</Title>
        </header>
        <TwoColumnLayout>
          <section>
            <PokemonFilter />
            <PokemonTable />
          </section>
          <PokemonInfo />
        </TwoColumnLayout>
      </PageContainer>
    </PokemonProvider>
  );
}

export default App;
