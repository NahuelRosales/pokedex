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
        setValueSearch(filterByAbilities);
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
        const deletePokemon = (id: number) => {
            dataPokemons.setPokemons(
                dataPokemons.filterPokemons.filter(
                    (item) => item.id !== id
                )
            );
        };

    return (
        <>
            <div className="flex flex-wrap justify-center">
                <h2 className="w-full m-2 text-center">
                    Busca a tu pokemon favorito por nombre
                </h2>

                <input
                    className="mb-9 text-gray-600 font-semibold outline outline-1 outline-gray-400 rounded-xl p-1 text-center"
                    onChange={handleSearchByPokemon}
                    type="text"
                    placeholder="Buscar por Pokemon"
                />
                <h2 className="w-full m-2 text-center">
                    Filtra los pokemons por Habilidades
                </h2>
                <form
                    className="flex flex-wrap px-4 align-center justify-center"
                    onSubmit={handleSubmit}
                    action=""
                >
                    <div className="flex w-full justify-center">
                        <input
                            className="w-full max-w-[30rem] mx-auto text-gray-600 font-semibold outline outline-1 outline-gray-400 rounded-xl p-1 text-center"
                            onChange={handleSearchByAbilities}
                            type="text"
                            placeholder="Buscar por Habilidades"
                        />
                    </div>
                    <button
                        className="m-2 max-w-[15rem] text-xl border border-pink-900 p-1 px-3 rounded-md text-white bg-pink-400 hover:bg-pink-500 active:bg-pink-600 transition-all"
                        onClick={() => setValueSearch(filterByAbilities)}
                        type="submit"
                    >
                        Buscar
                    </button>
                </form>
                <div className="w-full justify-center flex flex-wrap">
                    {valuesSearch.map((item, i) => (
                        <div
                            className="w-full justify-center flex"
                            key={i}
                        >
                            <div className="border text-center bg-green-400 rounded-xl min-w-[5rem] max-w-fit px-2 py-1"
                            >{item.name}</div>
                        </div>
                    ))}
                    {buttonCleanSearch ? (
                        <div className="w-full flex justify-center pt-2">
                            <button
                                className="text-xl border border-pink-900 p-1 px-3 rounded-md text-white bg-pink-400 hover:bg-pink-500 active:bg-pink-600 transition-all"
                                onClick={deleteSearchByAbility}
                            >
                                Limpiar Búsqueda
                            </button>
                        </div>
                    ) : null}
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
                    <Pokemon key={index} pokemon={pokemon} deletePokemon={deletePokemon} />
                ))}
            </div>
        </>
    );
};

export default Pokedex;
