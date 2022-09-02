<script lang="ts">
	import Card from './card.svelte';
	import CardSvg from './cardPreview/cardSvg.svelte';
</script>

<Card>
	<h1 class="text-5xl p-6 font-semibold w-full text-center bg-gray-400/20">Preview</h1>
	<main class="creator w-full overflow-y-auto p-4">
		<CardSvg />
	</main>
</Card>

<style>
	main {
		height: 42.6rem;
	}
</style>
