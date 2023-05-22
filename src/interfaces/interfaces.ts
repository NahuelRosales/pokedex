export interface InterfacePokemon {
    id: number;
    name: string;
    sprites: InterfaceImg;
    weight: number;
    abilities: InterfaceAbilities[];
}

export interface InterfaceImg {
    front_default: string;
}

export interface InterfaceAbilities {
    ability: InterfaceAbility;
    is_hidden: boolean;
    slot: number
}
export interface InterfaceAbility {
    name: string;
    url: string
}
export interface InterfaceSearch {
    name: string
}

