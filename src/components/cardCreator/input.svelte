<script lang="ts">
	import TypeOptions from './typeOptions.svelte';

	export let label: string;
	export let inputType: string = 'text';
	export let defaultText: string = '';
	export let id: string | undefined = undefined;

	export let value: string | number = inputType == 'number' ? 0 : '';
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
		/>
	{:else if inputType === 'textarea'}
		<textarea
			id={id || label}
			class="p-1 text-xl rounded-md mt-2 mb-4 outline-none border-transparent focus:border-gray-400 border-2 transition w-full"
			placeholder={defaultText}
			bind:value
		/>
	{:else if inputType === 'select'}
		<select
			id={id || label}
			class="p-1 text-xl rounded-md mt-2 mb-4 outline-none border-transparent focus:border-gray-400 border-2 transition w-56"
			bind:value
		>
			<TypeOptions />
		</select>
	{:else}
		<input
			id={id || label}
			type="number"
			class="p-1 text-xl rounded-md mt-2 mb-4 outline-none border-transparent focus:border-gray-400 border-2 transition w-56"
			bind:value
		/>
	{/if}
</div>
