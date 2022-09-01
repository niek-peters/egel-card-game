import { writable } from 'svelte/store';
import type { CardData, MoveData } from '../models/cardData';

const defaultMove: MoveData = {
	name: '',
	type: '',
	power: 0,
	special: 0,
	effect: '',
	accuracy: 0
};

export const cardData = writable<CardData>({
	name: '',
	primaryType: '',
	secondaryType: '',
	imageUrl: '',
	imageBase64: undefined,
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
});

export function setCardData(data: CardData) {
	cardData.set(data);
}

export function resetCardData() {
	cardData.set({
		name: '',
		primaryType: '',
		secondaryType: '',
		imageUrl: '',
		imageBase64: undefined,
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
	});
}
