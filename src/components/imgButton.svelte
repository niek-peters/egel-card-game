<script lang="ts">
	import Fa from 'svelte-fa';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';

	function updateImgPreview() {
		if (!imgInput.files) return;

		const acceptedImageTypes = ['image/jpg', 'image/jpeg', 'image/png'];
		if (!acceptedImageTypes.includes(imgInput.files[0].type)) {
			imgUrl = 'https://static.thenounproject.com/png/586340-200.png';
			return;
		}

		imgUrl = URL.createObjectURL(imgInput.files[0]);
	}

	let imgUrl: string;
	let imgInput: HTMLInputElement;
</script>

<button
	type="button"
	class={`img-button flex outline-none items-center justify-center relative rounded-md bg-blue-300 ${
		imgUrl ? '' : 'hover:bg-blue-400'
	} transition my-2`}
	on:click={() => imgInput.click()}
>
	<input
		class="hidden"
		type="file"
		accept=".jpg, .jpeg, .png"
		bind:this={imgInput}
		on:change={updateImgPreview}
	/>
	{#if imgUrl}
		<img src={imgUrl} alt="card img" class="rounded-md overflow-hidden object-cover" />
	{:else}
		<Fa icon={faPlus} class="text-7xl" />
	{/if}
</button>

<style lang="scss">
	button {
		width: 48rem;
		height: 24rem;

		img {
			width: inherit;
			height: inherit;
		}
	}
</style>
