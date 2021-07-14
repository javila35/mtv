import watchMedia from "svelte-media";

const mediaQueries = {
	noAnimations: "(prefers-reduced-motion: reduce)"
};

export const media = watchMedia(mediaQueries);