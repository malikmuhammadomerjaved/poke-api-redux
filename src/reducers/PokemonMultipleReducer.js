const DefaultState = {
  loading: false,
  data: {},
  errorMessage: "",
};

const PokemonMultipleReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "POKEMON_MULTIPLE_LOADING":
      return { ...state, loading: true, errorMessage: "" };

    case "POKEMON_MULTIPLE_FAIL":
      return {
        ...state,
        loading: false,
        errorMessage: "unable to find pokemon",
      };

    case "POKEMON_MULTIPLE_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMessage: "",
        data: {
          ...state.data,
          [action.pokemonName]: action.payload,
        },
      };

    default:
      return state;
  }
};

export default PokemonMultipleReducer;
