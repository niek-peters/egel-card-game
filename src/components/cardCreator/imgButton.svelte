<script lang="ts">
	import { browser } from '$app/environment';
	import Fa from 'svelte-fa';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';
	import Jimp from 'jimp/browser/lib/jimp';
	import { cardData } from '../../stores/cardData';

	async function updateImgPreview() {
		if (!imgInput.files) return;

		const acceptedImageTypes = ['image/jpg', 'image/jpeg', 'image/png'];
		if (!acceptedImageTypes.includes(imgInput.files[0].type)) {
			imgUrl = 'https://static.thenounproject.com/png/586340-200.png';
			return;
		}

		// Resize image
		Jimp.read(await blobToBuffer(imgInput.files[0])).then((image) => {
			image.cover(216, 384);
			image.getBase64(Jimp.MIME_PNG, (err, src) => {
				imgBase64 = src;
			});

			imgUrl = URL.createObjectURL(image);

			// getImageBase64();
		});
	}

	// function blobToBase64(blob: Blob) {
	// 	console.log(typeof blob);

	// 	return new Promise((resolve, _) => {
	// 		const reader = new FileReader();
	// 		reader.onloadend = () => resolve(reader.result);
	// 		reader.readAsDataURL(blob);
	// 	});
	// }

	function blobToBuffer(blob: Blob): Promise<string> {
		console.log(typeof blob);

		return new Promise((resolve, _) => {
			const reader = new FileReader();
			reader.onload = () => {
				let arrayBuffer = reader.result;

				if (!arrayBuffer || typeof arrayBuffer === 'string') return;

				let array = new Uint8Array(arrayBuffer);
				let binaryString = toBinString(array);

				resolve(binaryString);
			};
			reader.readAsArrayBuffer(blob);
		});
	}

	// async function getImageBase64() {
	// 	if (!browser) return;

	// 	if (!$cardData.imageBase64) return;

	// 	imgBase64 = (await blobToBase64($cardData.imageBlob)) as string;
	// }

	function toBinString(bytes: Uint8Array): string {
		return bytes.reduce((str, byte) => str + byte.toString(2).padStart(8, '0'), '');
	}

	export let imgUrl: string = '';
	// export let imgBlob: Blob | undefined;
	export let imgBase64: string | undefined;
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
