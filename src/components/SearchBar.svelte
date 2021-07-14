<script>
	import SearchIcon from './SearchIcon.svelte';
</script>

<div>
	<SearchIcon />
	<input type="text" placeholder="Search" />
</div>

<style>
	div {
		box-sizing: border-box;
		border-radius: 16px;
		background-color: #018bd4;
		border: 1px solid #fdb014;
		width: 33em;
		max-width: 528px;
		height: 5.625em;
		max-height: 100px;
		padding-left: 1em;
	}

	input {
		background-color: inherit;
		border: none;
		font-size: 2.25em;
	}

	input::placeholder {
		color: black;
	}

	@media only screen and (max-width: 600px) {
		input {
			width: 60vw;
			height: 12vh;
			font-size: 1em;
		}
	}
</style>
