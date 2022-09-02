import { writable } from 'svelte/store';
import type { CardData } from '../models/cardData';
import { defaultCard } from '../models/cardData';

export const cardData = writable<CardData>(defaultCard);

export function setCardData(data: CardData) {
	cardData.set(data);
}

export function resetCardData() {
	cardData.set(defaultCard);
}
