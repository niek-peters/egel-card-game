export type MoveData = {
	name: string;
	type: string;
	power: number;
	special: number;
	effect: string;
	accuracy: number;
};

export type CardData = {
	name: string;
	primaryType: string;
	secondaryType?: string;
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
