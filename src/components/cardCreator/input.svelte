<script lang="ts">
	import TypeOptions from './typeOptions.svelte';
	import type { TypeData } from '../../models/cardData';
	import { defaultType, getType } from '../../models/cardData';

	let selectElement: HTMLSelectElement;

	function setType() {
		const foundType: TypeData | undefined = getType(selectElement.value);
		if (!foundType) return;

		type = foundType;
	}

	export let label: string;
	export let inputType: string = 'text';
	export let defaultText: string = '';
	export let id: string | undefined = undefined;
	export let max: number = 200;

	export let value: string | number = inputType == 'number' ? 0 : '';
	export let type: TypeData = defaultType;
</script>

<div class="flex flex-col">
	<label for={id || label} class="font-semibold mx-1">{label}</label>
	{#if inputType === 'text'}
		<input
			id={id || label}
			type="text"
			placeholder={defaultText}
			class="p-1 text-xl rounded-md mt-2 mb-4 outline-none border-transparent focus:border-gray-400 border-2 transition w-56"
			bind:value
			maxlength={max}
		/>
	{:else if inputType === 'textarea'}
		<textarea
			id={id || label}
			class="p-1 text-xl rounded-md mt-2 mb-4 outline-none border-transparent focus:border-gray-400 border-2 transition w-full"
			placeholder={defaultText}
			bind:value
			maxlength="255"
		/>
	{:else if inputType === 'select'}
		<select
			id={id || label}
			class="p-1 text-xl rounded-md mt-2 mb-4 outline-none border-transparent focus:border-gray-400 border-2 transition w-56"
			on:input={setType}
			bind:this={selectElement}
			bind:value={type.name}
		>
			<TypeOptions />
		</select>
	{:else}
		<input
			id={id || label}
			type="number"
			class="p-1 text-xl rounded-md mt-2 mb-4 outline-none border-transparent focus:border-gray-400 border-2 transition w-56"
			bind:value
			min={0}
			{max}
		/>
	{/if}
</div>
