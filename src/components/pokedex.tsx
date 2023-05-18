import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "./pokemon";

import { InterfacePokemon} from "../interfaces/interfaces";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState<InterfacePokemon[]>([]);

    const loadData = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=10").then((res) => {
            for (let i = 0; i < res.data.results.length; i++) {
                axios.get(res.data.results[i].url).then((result) => {
                    setPokemons((prevArray) => [...prevArray, result.data]);
                });
            }
        });
    };
    useEffect(loadData, []);

    return (
        <div>
            <div className="cards" style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                {pokemons.map((pokemon, index) => (
                    <div className="card-pokemon" key={index} style={{width: 200, padding: 5, margin: 10, border: '1px solid white', borderRadius: 15, boxShadow: '1px 2px 9px #F4AAB9'}}>
                        <h2>{pokemon.name}</h2>
                        <img
                            src={pokemon.sprites.front_default}
                            style={{ width: 150, height: 150 }}
                        />
                        <p>Weigth: {pokemon.weight}</p>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pokedex;

/* import React, { useState } from "react";

export interface ModeloAbility {
    name: string;
    id: number;
}
export interface ModeloPokemon1 {
    id: number;
    name: string;
    abilities: Array<ModeloAbility>;
}
export interface ModeloPokemon2 {
    id: number;
    name: string;
    abilities: ModeloAbility[];
}

const Index = (props: { name: string; id: number }) => {
    const [pokemones, setPokemones] = useState<string[]>([]); */

/* let misCosas: { name?: string, id: number }
let misCosas: { name:  'pepe', id: number }
let misCosas: { name: string, id: number | string  } */
/* return (
        <div>
            {props.id}
            {props.name}
            <button onClick={() => setPokemones(["pepito"])}></button>
        </div>
    );
};

export default Index; */
