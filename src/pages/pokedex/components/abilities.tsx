import { InterfacePokemon } from "../../../interfaces/interfaces";

const Abilities = (props: { pokemon: InterfacePokemon }) => {
    return (
        <div>
            <h3>Habilidades: </h3>
            <ul>
                {props.pokemon.abilities.map((item, indexAbility) => (
                    <li key={indexAbility}>{item.ability.name[0].toUpperCase() + item.ability.name.substring(1)}</li>
                ))}
            </ul>
        </div>
    );
};

export default Abilities;
