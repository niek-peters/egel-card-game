<script lang="ts">
	export let label: string;
	export let inputType: string = 'text';
	export let defaultText: string;
	export let id: string | undefined = undefined;
</script>

<div class="flex flex-col">
	<label for={id || label} class="font-semibold mx-1">{label}</label>
	{#if inputType === 'text'}
		<input
			id={id || label}
			type="text"
			placeholder={defaultText}
			class="p-1 text-xl rounded-md m-2 mx-0 outline-none border-transparent focus:border-gray-400 border-2 transition w-56"
		/>
	{:else}
		<input
			id={id || label}
			type="number"
			class="p-1 text-xl rounded-md m-2 mx-0 outline-none border-transparent focus:border-gray-400 border-2 transition w-56"
			value="0"
		/>
	{/if}
</div>
