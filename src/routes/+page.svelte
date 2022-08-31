<script lang="ts">
	import Fa from 'svelte-fa';
	import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
	import { browser } from '$app/environment';

	import type { CardData, MoveData } from '../models/cardData';

	import Card from '../components/card.svelte';
	import Input from '../components/input.svelte';
	import HorInput from '../components/horInput.svelte';

	import ImgButton from '../components/imgButton.svelte';
	import Move from '../components/move.svelte';

	let defaultMove: MoveData = {
		name: '',
		type: '',
		power: 0,
		effect: '',
		accuracy: 0,
		pp: 0
	};

	let card: CardData = {
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
	};

	function setLocalStorage() {
		if (!browser) return;

		localStorage.setItem('card', JSON.stringify(card));
	}

	function readLocalStorage() {
		if (!browser) return;

		const readCard = localStorage.getItem('card');
		if (readCard) {
			card = JSON.parse(readCard);
		}
	}

	readLocalStorage();

	$: setLocalStorage;
</script>

<Card>
	<h1 class="text-5xl p-6 font-semibold w-full text-center bg-gray-400/20">Card Creator</h1>
	<main class="creator w-full overflow-y-auto p-4">
		<form class="flex flex-col" on:submit|preventDefault>
			<div class="flex justify-between items-center">
				<Input label="Name" defaultText="Ruud Verwaal" bind:value={card.name} />
				<div class="flex justify-between w-3/5">
					<Input label="Primary Type" defaultText="Docent" bind:value={card.primaryType} />
					<Input label="Secondary Type" defaultText="Frans" bind:value={card.secondaryType} />
				</div>
			</div>
			<ImgButton bind:imgUrl={card.imageUrl} />
			<div class="infogrid grid grid-cols-2 my-2">
				<div class="flex flex-col mr-auto">
					<Input label="Ability" defaultText="2x Critical Hit chance" bind:value={card.ability} />
					<Input
						label="Description"
						defaultText="Clapt je instant wanneer je je huiswerk niet maakt"
						inputType="textarea"
						bind:value={card.description}
					/>
					<div class="grid grid-cols-2 w-fit gap-4">
						<Move index={1} />
						<Move index={2} />
						<Move index={3} />
						<Move index={4} />
					</div>
				</div>

				<div class="flex flex-col">
					<HorInput label="Health" inputType="number" bind:value={card.health} />
					<HorInput label="Attack" inputType="number" bind:value={card.attack} />
					<HorInput label="Sp. Attack" inputType="number" bind:value={card.spAttack} />
					<HorInput label="Defense" inputType="number" bind:value={card.defense} />
					<HorInput label="Sp. Defense" inputType="number" bind:value={card.spDefense} />
					<HorInput label="Speed" inputType="number" bind:value={card.speed} />
					<HorInput label="Intelligence" inputType="number" bind:value={card.intelligence} />

					<button
						class="flex justify-center items-center p-4 text-xl rounded-md bg-yellow-400 hover:bg-yellow-500 transition my-2 mt-auto"
						type="submit"><Fa class="text-2xl mr-2" icon={faArrowDown} />Download PNG</button
					>
				</div>
			</div>
		</form>
	</main>
</Card>

<style lang="scss">
	.creator {
		max-height: 70vh;

		.infogrid {
			grid-template-columns: 2fr 1fr;
		}

		/* width */
		&::-webkit-scrollbar {
			width: 0.4rem;
		}

		/* Track */
		&::-webkit-scrollbar-track {
			background: #f1f1f1;
		}

		/* Handle */
		&::-webkit-scrollbar-thumb {
			background: #999;
		}

		/* Handle on hover */
		&::-webkit-scrollbar-thumb:hover {
			background: #888;
		}
	}
</style>
