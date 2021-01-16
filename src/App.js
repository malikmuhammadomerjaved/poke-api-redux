import "./App.css";

import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";
import SearchPokemon from "./containers/SearchPokemon";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Search</NavLink>
      </nav>

      <SearchPokemon />

      <Switch>
        <Route path="/" exact component={PokemonList} />

        <Route path="/pokemon/:pokemon" exact component={Pokemon} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
