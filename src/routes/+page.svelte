<script lang="ts">
	import Card from '../components/card.svelte';
	import Input from '../components/input.svelte';
	import HorInput from '../components/horInput.svelte';

	import ImgButton from '../components/imgButton.svelte';
	import Move from '../components/move.svelte';
</script>

<Card>
	<h1 class="text-5xl p-6 font-semibold w-full text-center bg-gray-400/20">Creator</h1>
	<div class="creator w-full overflow-y-auto p-4">
		<form class="flex flex-col">
			<div class="flex justify-between items-center">
				<Input label="Name" defaultText="Ruud Verwaal" />
				<div class="flex justify-between w-3/5">
					<Input label="Type 1" defaultText="Docent" />
					<Input label="Type 2" defaultText="Frans" />
				</div>
			</div>
			<ImgButton />
			<div class="flex justify-between my-2">
				<div class="flex flex-col w-1/3">
					<HorInput label="Health" inputType="number" />
					<HorInput label="Attack" inputType="number" />
					<HorInput label="Sp. Attack" inputType="number" />
					<HorInput label="Defence" inputType="number" />
					<HorInput label="Sp. Defence" inputType="number" />
					<HorInput label="Speed" inputType="number" />
					<HorInput label="Intelligence" inputType="number" />
				</div>

				<div class="flex flex-col ml-2 w-fit">
					<Input label="Ability" defaultText="2x Critical Hit chance" />
					<div class="grid grid-cols-2 w-fit gap-4">
						<Move index={1} />
						<Move index={2} />
						<Move index={3} />
						<Move index={4} />
					</div>
				</div>
			</div>
		</form>
	</div>
</Card>

<style lang="scss">
	.creator {
		max-height: 70vh;

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
