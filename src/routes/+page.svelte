<script lang="ts">
	import Fa from 'svelte-fa';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';

	import Card from '../components/card.svelte';

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

<Card>
	<h1 class="text-5xl p-6 font-semibold w-full text-center bg-gray-400/20">Creator</h1>
	<div class="creator w-full overflow-y-auto p-4">
		<form class="flex flex-col">
			<div class="flex justify-between items-center">
				<div class="flex flex-col">
					<label for="name" class="font-semibold mx-1">Name</label>
					<input
						id="name"
						type="text"
						placeholder="Ruud Verwaal"
						class="p-1 text-xl rounded-md m-2 ml-0 outline-none border-transparent focus:border-gray-400 border-2 transition w-48"
					/>
				</div>
				<div class="flex">
					<div class="flex flex-col">
						<label for="type1" class="font-semibold mx-1">Type 1</label>
						<input
							id="type1"
							type="text"
							placeholder="Docent"
							class="p-1 text-xl rounded-md m-2 ml-0 outline-none border-transparent focus:border-gray-400 border-2 transition w-48"
						/>
					</div>

					<div class="flex flex-col">
						<label for="type2" class="font-semibold mx-1">Type 2</label>
						<input
							id="type2"
							type="text"
							placeholder="Frans"
							class="p-1 text-xl rounded-md m-2 mx-0 outline-none border-transparent focus:border-gray-400 border-2 transition w-48"
						/>
					</div>
				</div>
			</div>
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
			<div class="flex">
				<div class="flex flex-col w-1/3">
					<div class="flex justify-between items-center">
						<label for="health" class="font-semibold mx-1">Health</label>
						<input
							id="health"
							type="number"
							class="px-0.5 text-lg rounded-md m-2 ml-0 outline-none border-transparent focus:border-gray-400 border-2 transition w-24"
							value="0"
						/>
					</div>

					<div class="flex justify-between items-center">
						<label for="attack" class="font-semibold mx-1">Attack</label>
						<input
							id="attack"
							type="number"
							class="px-0.5 text-lg rounded-md m-2 ml-0 outline-none border-transparent focus:border-gray-400 border-2 transition w-24"
							value="0"
						/>
					</div>

					<div class="flex justify-between items-center">
						<label for="spattack" class="font-semibold mx-1">Sp. Attack</label>
						<input
							id="spattack"
							type="number"
							class="px-0.5 text-lg rounded-md m-2 ml-0 outline-none border-transparent focus:border-gray-400 border-2 transition w-24"
							value="0"
						/>
					</div>

					<div class="flex justify-between items-center">
						<label for="defence" class="font-semibold mx-1">Defence</label>
						<input
							id="defence"
							type="number"
							class="px-0.5 text-lg rounded-md m-2 ml-0 outline-none border-transparent focus:border-gray-400 border-2 transition w-24"
							value="0"
						/>
					</div>

					<div class="flex justify-between items-center">
						<label for="spdefence" class="font-semibold mx-1">Sp. Defence</label>
						<input
							id="spdefence"
							type="number"
							class="px-0.5 text-lg rounded-md m-2 ml-0 outline-none border-transparent focus:border-gray-400 border-2 transition w-24"
							value="0"
						/>
					</div>

					<div class="flex justify-between items-center">
						<label for="speed" class="font-semibold mx-1">Speed</label>
						<input
							id="speed"
							type="number"
							class="px-0.5 text-lg rounded-md m-2 ml-0 outline-none border-transparent focus:border-gray-400 border-2 transition w-24"
							value="0"
						/>
					</div>

					<div class="flex justify-between items-center">
						<label for="intelligence" class="font-semibold mx-1">Intelligence</label>
						<input
							id="intelligence"
							type="number"
							class="px-0.5 text-lg rounded-md m-2 ml-0 outline-none border-transparent focus:border-gray-400 border-2 transition w-24"
							value="0"
						/>
					</div>
				</div>

				<div class="flex flex-col" />
			</div>
		</form>
	</div>
</Card>

<style lang="scss">
	.creator {
		max-height: 70vh;

		.img-button {
			width: 48rem;
			height: 24rem;

			img {
				width: inherit;
				height: inherit;
			}
		}

		/* width */
		&::-webkit-scrollbar {
			width: 0.4rem;
		}

		/* Track */
		&::-webkit-scrollbar-track {
			background: #f1f1f1;
		}

		/* Handle */
		&::-webkit-scrollbar-thumb {
			background: #999;
		}

		/* Handle on hover */
		&::-webkit-scrollbar-thumb:hover {
			background: #888;
		}
	}
</style>
