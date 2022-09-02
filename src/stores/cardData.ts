import { writable } from 'svelte/store';
import type { CardData, MoveData, TypeData } from '../models/cardData';

const defaultType: TypeData = {
	name: '',
	hexColor: '#fe0000'
};

const defaultMove: MoveData = {
	name: '',
	type: defaultType,
	power: 0,
	special: 0,
	effect: '',
	accuracy: 0
};

const defaultCard: CardData = {
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

export const cardData = writable<CardData>(defaultCard);

export function setCardData(data: CardData) {
	cardData.set(data);
}

export function resetCardData() {
	cardData.set(defaultCard);
}
