import { InterfacePokemon } from "../interfaces/interfaces";

const Pokemon = (pokemon: InterfacePokemon) => {
    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} style={{width: 100, height: 100}} />
        </div>
    );
};

export default Pokemon;
