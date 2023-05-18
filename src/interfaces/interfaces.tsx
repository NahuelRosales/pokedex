export interface InterfaceAbility {
    name: string;
    id: number;
}

export interface InterfaceImg {
    front_default: string;
}

export interface InterfacePokemon {
    id: number;
    name: string;
    sprites: InterfaceImg;
    weight: number;
    abilities: InterfaceAbility[];
}