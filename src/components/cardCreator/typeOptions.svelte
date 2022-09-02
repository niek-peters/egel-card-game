<script>
	import { types } from '../../models/cardData';
</script>

{#each types as type}
	<option value={type.name}>{type.name}</option>
{/each}
