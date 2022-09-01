<script lang="ts">
	import { browser } from '$app/environment';
	import Fa from 'svelte-fa';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';

	import cropImage from '../../scripts/cropImage';

	async function updateImgPreview() {
		if (!browser) return;
		if (!imgInput.files || !imgInput.files[0]) return;

		const reader = new FileReader();

		reader.readAsDataURL(imgInput.files[0]);

		reader.onload = function (event) {
			const imgElement = document.createElement('img');
			if (!imgElement || !event.target || !event.target.result) return;

			imgElement.src = event.target.result as string;

			imgElement.onload = function (e) {
				const img = e.target as CanvasImageSource;
				if (
					!e.target ||
					!img.width ||
					!img.height ||
					typeof img.width !== 'number' ||
					typeof img.height !== 'number'
				)
					return;

				const canvas = document.createElement('canvas');
				canvas.width = 384;
				canvas.height = 216;

				const ctx = canvas.getContext('2d');
				if (!ctx) return;

				cropImage(ctx, img, 0, 0, canvas.width, canvas.height);

				imgUrl = ctx.canvas.toDataURL('image/jpg');
			};
		};
	}

	export let imgUrl: string = '';
	let imgInput: HTMLInputElement;
</script>

<button
	type="button"
	class={`img-button flex outline-none items-center justify-center relative rounded-md bg-blue-300 ${
		imgUrl ? '' : 'hover:bg-blue-400'
	} transition mb-2`}
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
