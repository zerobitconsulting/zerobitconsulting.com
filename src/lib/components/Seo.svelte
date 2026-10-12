<script lang="ts">
	import { site } from '#lib';

	let { title, description = site.tagline }: { title?: string; description?: string } = $props();

	const fullTitle = $derived(
		title ? `${title} · ${site.name}` : `${site.name} · Automation & engineering`
	);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
</svelte:head>
