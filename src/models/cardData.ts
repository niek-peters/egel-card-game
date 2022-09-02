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
	secondaryType: TypeData;
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

export const defaultType: TypeData = {
	name: 'None',
	hexColor: '#e5e5e5'
};

export const defaultMove: MoveData = {
	name: '',
	type: defaultType,
	power: 0,
	special: 0,
	effect: '',
	accuracy: 0
};

export const defaultCard: CardData = {
	name: '',
	primaryType: defaultType,
	secondaryType: defaultType,
	imageUrl: '',
	ability: '',
	description: '',
	moves: [defaultMove, defaultMove, defaultMove, defaultMove],
	health: 0,
	attack: 0,
	spAttack: 0,
	defense: 0,
	spDefense: 0,
	speed: 0,
	intelligence: 0
};

export const types: TypeData[] = [
	defaultType,
	{ name: 'Docent', hexColor: '#cc2f21' },
	{ name: 'Leerling', hexColor: '#8a4acf' },
	{ name: 'Frans', hexColor: '#3262c2' },
	{ name: 'Duits', hexColor: '#ffce00' },
	{ name: 'Engels', hexColor: '#102eb3' },
	{ name: 'Codeer', hexColor: '#00a81f' },
	{ name: 'Rein', hexColor: '#e39827' },
	{ name: 'Politicus', hexColor: '#fc6f03' },
	{ name: 'Nederland', hexColor: '#037ffc' },
	{ name: 'Sjiggel', hexColor: '#bf08a4' }
];

export function getType(typeName: string) {
	return types.find((type) => type.name === typeName);
}
