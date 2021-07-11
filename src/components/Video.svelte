<script>
	let isMotionAllowed = true;

	const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

	if (!mediaQuery || mediaQuery.matches) {
		isMotionAllowed = false;
	}
</script>

<svelte:window />
<video
	autoplay={isMotionAllowed}
	muted
	loop
	poster="https://res.cloudinary.com/deijyaaid/image/upload/v1626032240/Screen_Shot_2021-07-11_at_12.36.48_PM_kvddiy.png"
>
	<source
		src="https://res.cloudinary.com/deijyaaid/video/upload/v1626031093/MTV_Animation_Compilation_v7clmh.mp4"
		type="video/mp4"
	/>
	<track kind="captions" />
</video>

<style>
	video {
		grid-area: 1 / 1 / -1 / -1;
		opacity: 0.4;
		z-index: -1;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
