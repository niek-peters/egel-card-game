<script>
	import '../tailwind.css';

	import Header from '../components/header.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
</svelte:head>

<div class="bg absolute w-full h-full bg-no-repeat bg-center bg-cover -z-10" />
<Header />
<div class="flex w-full justify-center -mt-16">
	<slot />
</div>

<style lang="scss">
	.bg {
		background-image: url('/bg-1.svg');
	}
</style>
