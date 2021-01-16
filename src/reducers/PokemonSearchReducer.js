const DefaultState = {
  loading: false,
  data: [],
  errorMessage: "",
};

const PokemonSearchReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "POKEMON_SEARCH_LOADING":
      return { ...state, loading: true };

    case "POKEMON_SEARCH_FAIL":
      return { ...state, loading: false, errorMessage: "unable to get pokemon" };

    case "POKEMON_SEARCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMessage: "",
      };

    default:
      return state;
  }
};

export default PokemonSearchReducer;
