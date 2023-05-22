import { useContext } from "react";
import { InterfacePokemon } from "../../../interfaces/interfaces";
import Abilities from "./abilities";
import { PokemonContext } from "../../../context/PokemonContext";

const Pokemon = (props: { pokemon: InterfacePokemon }) => {
    const dataPokemons = useContext(PokemonContext);
    const deletePokemon = () => {
        dataPokemons.setPokemons(
            dataPokemons.filterPokemons.filter(
                (item) => item.id !== props.pokemon.id
            )
        );
    };
    return (
        <div
            className="card-pokemon"
            style={{
                width: 250,
                padding: 10,
                margin: 10,
                border: "1px solid white",
                borderRadius: 15,
                boxShadow: "1px 2px 9px #F4AAB9",
            }}
        >
            <h2>
                {props.pokemon.name[0].toUpperCase() +
                    props.pokemon.name.substring(1)}
            </h2>
            <img
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
                <div style={{ margin: 10 }}>
                    <h3>Weigth:</h3>
                    <p>{props.pokemon.weight}</p>
                    <button onClick={deletePokemon}>Eliminar</button>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
