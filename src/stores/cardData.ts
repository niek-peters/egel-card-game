import { writable } from 'svelte/store';
import type { CardData, MoveData } from '../models/cardData';

const defaultMove: MoveData = {
	name: '',
	type: '',
	power: 0,
	effect: '',
	accuracy: 0,
	pp: 0
};

export const cardData = writable<CardData>({
	name: '',
	primaryType: '',
	secondaryType: '',
	imageUrl: '',
	ability: '',
	description: '',
	move1: defaultMove,
	move2: defaultMove,
	move3: defaultMove,
	move4: defaultMove,
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
		ability: '',
		description: '',
		move1: defaultMove,
		move2: defaultMove,
		move3: defaultMove,
		move4: defaultMove,
		health: 0,
		attack: 0,
		spAttack: 0,
		defense: 0,
		spDefense: 0,
		speed: 0,
		intelligence: 0
	});
}
