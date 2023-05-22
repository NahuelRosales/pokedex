import { useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { createContext } from "react";
import { InterfaceAbility, InterfacePokemon } from "../interfaces/interfaces";

export interface InterfaceContextProps {
    pokemons: InterfacePokemon[];
    setPokemons: (poke: InterfacePokemon[]) => void;
    filterPokemons: InterfacePokemon[];
    setFilterPokemons: (poke: InterfacePokemon[]) => void;
    allAbilities: InterfaceAbility[];
    setAllAbilities: (sAA: InterfaceAbility[]) => void;
}

export const PokemonContext = createContext<InterfaceContextProps>({
    pokemons: [],
    setPokemons: () => {},
    filterPokemons: [],
    setFilterPokemons: () => {},
    allAbilities: [],
    setAllAbilities: () => {},
});

const PokemonProvider = (props: { children: ReactNode }) => {
    const [pokemons, setPokemons] = useState<InterfacePokemon[]>([]);
    const [filterPokemons, setFilterPokemons] = useState<InterfacePokemon[]>([]);
    const [allAbilities, setAllAbilities] = useState<InterfaceAbility[]>([]);

    const dataPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=30").then((res) => {
            for (let i = 0; i < res.data.results.length; i++) {
                axios.get(res.data.results[i].url).then((result) => {
                    setPokemons((prevArray) => [...prevArray, result.data]);
                    setFilterPokemons((prevArray) => [...prevArray, result.data]);
                });
            }
        });
    };
    const abilitiesPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/ability?limit=30").then((res) => {
            for (let i = 0; i < res.data.results.length; i++) {
                setAllAbilities((prevArray) => [
                    ...prevArray,
                    res.data.results[i].name,
                ]);
            }
        });
    };
    console.log("hola", allAbilities);

    useEffect(dataPokemons, []);
    useEffect(abilitiesPokemon, []);
    return (
        <PokemonContext.Provider
            value={{
                pokemons,
                setPokemons,
                allAbilities,
                setAllAbilities,
                filterPokemons,
                setFilterPokemons
            }}
        >
            {props.children}
        </PokemonContext.Provider>
    );
};

export default PokemonProvider;
