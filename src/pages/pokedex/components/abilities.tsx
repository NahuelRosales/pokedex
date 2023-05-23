import { InterfacePokemon } from "../../../interfaces/interfaces";

const Abilities = (props: { pokemon: InterfacePokemon }) => {
    return (
        <div>
            <h3 className="text-center text-2xl">Habilidades:</h3>
            <ul>
                {props.pokemon.abilities.map((item, indexAbility) => (
                    <li key={indexAbility} className="text-center">{item.ability.name[0].toUpperCase() + item.ability.name.substring(1)}</li>
                ))}
            </ul>
        </div>
    );
};

export default Abilities;
