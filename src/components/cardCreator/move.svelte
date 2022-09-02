<script lang="ts">
	import Input from './input.svelte';
	import HorInput from './horInput.svelte';

	import { cardData } from '../../stores/cardData';

	export let index: number;
</script>

<div class="flex flex-col my-2 w-56">
	<Input
		label={`Move ${index}`}
		defaultText="De Beurt"
		id={`move${index}`}
		bind:value={$cardData.moves[index - 1].name}
	/>
	<HorInput
		label="Type"
		inputType="select"
		id={`move${index}type`}
		bind:value={$cardData.moves[index - 1].type.name}
	/>
	<HorInput
		label="Power"
		inputType="number"
		id={`move${index}power`}
		bind:value={$cardData.moves[index - 1].power}
	/>
	<HorInput
		label="Special"
		inputType="number"
		id={`move${index}special`}
		bind:value={$cardData.moves[index - 1].special}
	/>
	<HorInput
		label="Effect"
		defaultText="None"
		id={`move${index}effect`}
		bind:value={$cardData.moves[index - 1].effect}
	/>
	<HorInput
		label="Accuracy (%)"
		inputType="number"
		id={`move${index}accuracy`}
		bind:value={$cardData.moves[index - 1].accuracy}
	/>
</div>
