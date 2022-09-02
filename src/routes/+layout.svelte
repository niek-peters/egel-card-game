<script>
	import '../tailwind.css';

	import Header from '../components/header.svelte';
</script>

<div class="bg absolute w-full bg-no-repeat bg-center bg-cover -z-10" />
<Header />
<div class="flex w-full justify-center -mt-16">
	<slot />
</div>

<style lang="scss">
	.bg {
		background-image: url('/bg-1.svg');
		height: 58.59rem;
	}
</style>
