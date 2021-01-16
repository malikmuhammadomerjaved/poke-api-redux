import { combineReducers } from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";
import PokemonSearchReducer from "./PokemonSearchReducer";

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultipleReducer,
  PokemonSearch: PokemonSearchReducer,
});

export default RootReducer;
