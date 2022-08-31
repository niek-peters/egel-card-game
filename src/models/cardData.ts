export type MoveData = {
	name: string;
	type: string;
	power: number;
	effect: string;
	accuracy: number;
	pp: number;
};

export type CardData = {
	name: string;
	primaryType: string;
	secondaryType?: string;
	imageUrl: string;
	ability: string;
	description: string;

	move1: MoveData;
	move2?: MoveData;
	move3?: MoveData;
	move4?: MoveData;

	health: number;
	attack: number;
	spAttack: number;
	defense: number;
	spDefense: number;
	speed: number;
	intelligence: number;
};