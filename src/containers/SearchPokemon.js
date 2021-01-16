import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { PokemonSearch } from "../actions/pokemonActions";

import { useHistory } from "react-router-dom";

import useDebounce from "../hooks/useDebounce";

const SearchPokemon = () => {
  const history = useHistory();
  const [search, setSearch] = useState(" ");
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  let searchedPokemonList = [];

  let debouncedSearchTerm = useDebounce(search, 1000);

  const pokemonSearch = useSelector((state) => state.PokemonSearch);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    dispatch(PokemonSearch());
  };

  const ShowData = () => {
    if (!_.isEmpty(pokemonSearch.data)) {
      const newPokemonList = pokemonSearch.data.map((data) => data.name);
      searchedPokemonList = newPokemonList.filter((data) =>
        data.includes(debouncedSearchTerm)
      );
    }
  };

  return (
    <div className="search-wrapper">
      <p>Search: </p>

      {ShowData()}

      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        onBlur={() => {
          setTimeout(() => setShowDropdown(false), 300);
        }}
        onFocus={() => setShowDropdown(true)}
      />

      {showDropdown && (
        <div className="dropdown-wrapper">
          {searchedPokemonList.map((name) =>
            name ? (
              <p
                className="list-item"
                onClick={(e) => {
                  setTimeout(() => history.push(`/pokemon/${name}`), 1000);
                }}
              >
                {name}
              </p>
            ) : (
              <p>loading...</p>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPokemon;
