export type TypeData = {
	name: string;
	hexColor: string;
};

export type MoveData = {
	name: string;
	type: TypeData;
	power: number;
	special: number;
	effect: string;
	accuracy: number;
};

export type CardData = {
	name: string;
	primaryType: TypeData;
	secondaryType?: TypeData;
	imageUrl: string;
	ability: string;
	description: string;
	moves: MoveData[];

	health: number;
	attack: number;
	spAttack: number;
	defense: number;
	spDefense: number;
	speed: number;
	intelligence: number;
};
