<script lang="ts">
	import TextInput from './input.svelte';
	import HorInput from './horInput.svelte';

	export let index: number;
</script>

<div class="flex flex-col my-2 w-56">
	<TextInput label={`Move ${index}`} defaultText="De Beurt" id={`move${index}`} />
	<HorInput label="Type" inputType="select" id={`move${index}type`} />
	<HorInput label="Power" inputType="number" id={`move${index}power`} />
	<HorInput label="Special" inputType="number" id={`move${index}special`} />
	<HorInput label="Effect" defaultText="None" id={`move${index}effect`} />
	<HorInput label="Accuracy (%)" inputType="number" id={`move${index}accuracy`} />
</div>
