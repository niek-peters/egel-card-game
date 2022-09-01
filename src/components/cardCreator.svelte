<script lang="ts">
	import Fa from 'svelte-fa';
	import { faArrowDown, faTrash } from '@fortawesome/free-solid-svg-icons';
	import { browser } from '$app/environment';

	import type { CardData } from '../models/cardData';
	import { cardData, setCardData, resetCardData } from '../stores/cardData';

	import Card from '../components/card.svelte';
	import Input from '../components/cardCreator/input.svelte';
	import HorInput from '../components/cardCreator/horInput.svelte';

	import ImgButton from '../components/cardCreator/imgButton.svelte';
	import Move from '../components/cardCreator/move.svelte';

	let cardElement: HTMLElement;

	function setLocalStorage() {
		if (!browser) return;

		localStorage.setItem('card', JSON.stringify($cardData));
	}

	function readLocalStorage() {
		if (!browser) return;

		const readCard = localStorage.getItem('card');
		if (readCard) {
			const card: CardData = JSON.parse(readCard);
			if (card) {
				setCardData(card);
			}
		}
	}

	function resetCard() {
		if (!browser) return;

		localStorage.removeItem('card');

		resetCardData();

		cardElement.scrollTop = 0;
	}

	readLocalStorage();

	$: $cardData, setLocalStorage();
</script>

<Card>
	<h1 class="text-5xl p-6 font-semibold w-full text-center bg-gray-400/20">Card Creator</h1>
	<main class="creator w-full overflow-y-auto p-4" bind:this={cardElement}>
		<form class="flex flex-col" on:submit|preventDefault>
			<div class="flex justify-between items-center">
				<Input label="Name" defaultText="Ruud Verwaal" bind:value={$cardData.name} />
				<div class="flex justify-between w-3/5">
					<Input label="Primary Type" inputType="select" bind:value={$cardData.primaryType} />
					<Input label="Secondary Type" inputType="select" bind:value={$cardData.secondaryType} />
				</div>
			</div>
			<ImgButton bind:imgUrl={$cardData.imageUrl} />
			<div class="infogrid grid grid-cols-2 my-2">
				<div class="flex flex-col mr-auto">
					<Input label="Ability Name" defaultText="Overspannen" bind:value={$cardData.ability} />
					<Input
						label="Ability Description"
						defaultText="2x critical hit chance from leerling type moves"
						inputType="textarea"
						bind:value={$cardData.description}
					/>
					<div class="grid grid-cols-2 w-fit gap-4">
						<Move index={1} />
						<Move index={2} />
						<Move index={3} />
						<Move index={4} />
					</div>
				</div>

				<div class="flex flex-col">
					<HorInput label="Health" inputType="number" bind:value={$cardData.health} />
					<HorInput label="Attack" inputType="number" bind:value={$cardData.attack} />
					<HorInput label="Sp. Attack" inputType="number" bind:value={$cardData.spAttack} />
					<HorInput label="Defense" inputType="number" bind:value={$cardData.defense} />
					<HorInput label="Sp. Defense" inputType="number" bind:value={$cardData.spDefense} />
					<HorInput label="Speed" inputType="number" bind:value={$cardData.speed} />
					<HorInput label="Intelligence" inputType="number" bind:value={$cardData.intelligence} />

					<div class="mt-auto">
						<button
							class="relative flex justify-center items-center p-4 text-xl rounded-md bg-red-400 hover:bg-red-500 transition my-2 w-full"
							type="submit"
							on:click={() =>
								confirm('Are you sure you want to delete your card?') ? resetCard() : null}
							><Fa class="absolute text-2xl mr-2 left-4" icon={faTrash} />Reset Card</button
						>
						<button
							class="relative flex justify-center items-center p-4 text-xl rounded-md bg-yellow-400 hover:bg-yellow-500 transition my-2 w-full"
							type="submit"
							><Fa class="absolute text-2xl left-4" icon={faArrowDown} />Download PNG</button
						>
					</div>
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
