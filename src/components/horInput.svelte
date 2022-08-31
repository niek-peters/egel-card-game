<script lang="ts">
	export let label: string;
	export let inputType: string = 'text';
	export let defaultText: string = 'text';
	export let id: string | undefined = undefined;
</script>

<div class="flex justify-between items-center">
	<label for={id || label} class="font-semibold mx-1">{label}</label>
	{#if inputType === 'text'}
		<input
			id={id || label}
			type="text"
			class="px-0.5 text-lg rounded-md my-1 outline-none border-transparent focus:border-gray-400 border-2 transition w-24"
			placeholder={defaultText}
		/>
	{:else}
		<input
			id={id || label}
			type="number"
			class="px-0.5 text-lg rounded-md my-1 outline-none border-transparent focus:border-gray-400 border-2 transition w-24"
			value="0"
		/>
	{/if}
</div>
