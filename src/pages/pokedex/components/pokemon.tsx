import { useContext } from "react";
import { InterfacePokemon } from "../../../interfaces/interfaces";
import Abilities from "./abilities";
import { PokemonContext } from "../../../context/PokemonContext";

const Pokemon = (props: { pokemon: InterfacePokemon, deletePokemon: (id: number) => void }) => {
    return (
        <div className="bg-pink-200 w-60 p-3 m-3 rounded-xl border border-pink-900">
            <h2 className="text-center text-3xl">
                {props.pokemon.name[0].toUpperCase() +
                    props.pokemon.name.substring(1)}
            </h2>
            <p className="text-center">{props.pokemon.weight / 10} Kg </p>
            <img
                className="mx-auto"
                src={props.pokemon.sprites.front_default}
                style={{ width: 150, height: 150 }}
            />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "baseline",
                    borderTop: "1px solid white",
                }}
            >
                <Abilities pokemon={props.pokemon} />
            </div>
            <div className="w-100 flex justify-center pt-3">
                <button
                    className="text-xl border border-pink-900 p-1 px-3 rounded-md text-white bg-pink-400 hover:bg-pink-500 active:bg-pink-600 transition-all"
                    onClick={()=>{props.deletePokemon(props.pokemon.id)}}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Pokemon;
