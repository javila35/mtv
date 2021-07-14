<script>
	import { media } from '../stores/media';
	import Button from '../components/Button.svelte';
	import BackgroundImage from '../components/BackgroundImage.svelte';
	import SearchBar from '../components/SearchBar.svelte';
	import Video from '../components/Video.svelte';
</script>

<div>
	{#if !$media.noAnimations}
		<Video />
	{:else}
		<BackgroundImage />
	{/if}
	<div class="button-area">
		<Button genre="Country" />
		<Button genre="Rap" />
		<Button genre="Electronic" />
		<Button genre="Rock" />
		<SearchBar />
	</div>
</div>

<style>
	div {
		display: grid;
		max-height: 100vh;
		grid-template: 1fr 3fr 1fr / 1fr;
		grid-template-areas:
			'header'
			'button'
			'footer';
	}

	div.button-area {
		grid-area: button;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
