<script lang="ts">
	import '@fontsource/instrument-serif/400.css';
	import '@fontsource/instrument-serif/400-italic.css';
	import '@fontsource-variable/hanken-grotesk';
	import '@fontsource/ibm-plex-mono/400.css';
	import '@fontsource/ibm-plex-mono/500.css';
	import serifUrl from '@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2?url';
	import sansUrl from '@fontsource-variable/hanken-grotesk/files/hanken-grotesk-latin-wght-normal.woff2?url';
	import '../app.css';
	import SiteFooter from '#lib/components/SiteFooter.svelte';
	import SiteHeader from '#lib/components/SiteHeader.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<!-- Preload the hero faces so the above-the-fold headline doesn't swap in late. -->
<svelte:head>
	<link rel="preload" href={serifUrl} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={sansUrl} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded focus:bg-signal focus:px-4 focus:py-2 focus:text-ink"
>
	Skip to content
</a>
<div class="flex min-h-dvh flex-col">
	<SiteHeader />
	<main id="main" class="flex-1">
		{@render children()}
	</main>
	<SiteFooter />
</div>
