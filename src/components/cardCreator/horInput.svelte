<script lang="ts">
	import TypeOptions from './typeOptions.svelte';
	import type { TypeData } from '../../models/cardData';
	import { defaultType, getType } from '../../models/cardData';

	function setType() {
		const foundType: TypeData | undefined = getType(value.toString());
		if (!foundType) return;

		type = foundType;
	}

	export let label: string;
	export let inputType: string = 'text';
	export let defaultText: string = 'text';
	export let id: string | undefined = undefined;

	export let value: string | number = inputType == 'number' ? 0 : '';
	export let type: TypeData = defaultType;
</script>

<div class="flex justify-between items-center">
	<label for={id || label} class="font-semibold mx-1">{label}</label>
	{#if inputType === 'text'}
		<input
			id={id || label}
			type="text"
			class="px-0.5 text-lg rounded-md my-1 outline-none border-transparent focus:border-gray-400 border-2 transition w-24"
			placeholder={defaultText}
			bind:value
		/>
	{:else if inputType === 'select'}
		<select
			id={id || label}
			class="px-0.5 text-lg rounded-md my-1 outline-none border-transparent focus:border-gray-400 border-2 transition w-24"
			bind:value
			on:change={setType}
		>
			<TypeOptions />
		</select>
	{:else}
		<input
			id={id || label}
			type="number"
			class="px-0.5 text-lg rounded-md my-1 outline-none border-transparent focus:border-gray-400 border-2 transition w-24"
			bind:value
		/>
	{/if}
</div>
