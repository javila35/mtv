<script>
	export let genre;
</script>

<button>{genre}</button>

<style>
	button {
		background-color: #fdb014;
		border: 1px solid #c01b21;
		border-radius: 16px;
		width: 22.5em;
		max-width: 360px;
		height: 5.625em;
		max-height: 75px;
		font-size: 2.25em;
		margin-top: 30px;
		margin-bottom: 30px;
	}

	/** Mobile style */
	@media only screen and (max-width: 600px) {
		button {
			width: 25vw;
			height: 10vh;
			font-size: 1em;
			margin-top: 1em;
			margin-bottom: 1em;
		}
	}
</style>
