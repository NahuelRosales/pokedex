import React, { useState, useContext } from "react";
import Pokemon from "./components/pokemon";

import { PokemonContext } from "../../context/PokemonContext";
import { InterfaceSearch } from "../../interfaces/interfaces";

const Pokedex = () => {
    const dataPokemons = useContext(PokemonContext);

    const [filterByPokemon, setFilterByPokemon] = useState("");
    const [filterByAbilities, setFilterByAbilities] = useState("");
    const [valueSearch, setValueSearch] = useState("");
    const [valuesSearch, setValuesSearch] = useState<InterfaceSearch[]>([]);
    const [buttonCleanSearch, setButtonCleanSearch] = useState(false);


    const handleSearchByPokemon = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterByPokemon(e.target.value);
    };

    const handleSearchByAbilities = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        e.preventDefault;
        setFilterByAbilities(e.target.value);
    };

    const handleSubmit = (
        e: React.BaseSyntheticEvent<
            Event,
            EventTarget & HTMLFormElement,
            EventTarget
        >
    ) => {
        e.preventDefault();
        setButtonCleanSearch(true);
        setValueSearch(filterByAbilities)
        setValuesSearch([...valuesSearch, { name: valueSearch }]);
    };
/*     console.log(valuesSearch.map((item) => item.name)); */

    const deleteSearchByAbility = () => (
        dataPokemons.setFilterPokemons(dataPokemons.pokemons),
        setValuesSearch([]),
        setValueSearch(""),
        setButtonCleanSearch(false)
    );

    const resultByPokemon = filterByPokemon
        ? dataPokemons.filterPokemons.filter((item) =>
              item.name.toLowerCase().includes(filterByPokemon.toLowerCase())
          )
        : dataPokemons.pokemons;

    const pokemonFilterByAbilities = valueSearch
        ? resultByPokemon.filter((item) =>
              item.abilities.some((item) =>
                  item.ability.name
                      .toLowerCase()
                      .includes(valueSearch.toLowerCase())
              )
          )
        : resultByPokemon;

    return (
        <>
            <div>
                <h2>Busca a tu pokemon favorito por nombre</h2>
                <input
                    onChange={handleSearchByPokemon}
                    type="text"
                    placeholder="Buscar por Pokemon"
                />
                <h2>Filtra los pokemons por Habilidades</h2>
                <form onSubmit={handleSubmit} action="">
                    <input
                        onChange={handleSearchByAbilities}
                        type="text"
                        placeholder="Buscar por Habilidades"
                    />
                    <button onClick={()=>setValueSearch(filterByAbilities)} type="submit">Buscar</button>
                </form>
                <div>
                    {valuesSearch.map((item, i) => (
                        <div key={i}>{item.name}</div>
                    ))}
                    {buttonCleanSearch ? (
                        <button onClick={deleteSearchByAbility}>
                            Limpiar Búsqueda
                        </button>
                    ) : (
                        <h3>puedes buscar por habilidades</h3>
                    )}
                </div>
            </div>

            <div
                className="cards"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                {pokemonFilterByAbilities.map((pokemon, index) => (
                    <Pokemon key={index} pokemon={pokemon} />
                ))}
            </div>
        </>
    );
};

export default Pokedex;
