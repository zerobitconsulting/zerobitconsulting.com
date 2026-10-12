<script lang="ts">
	import type { Snippet } from 'svelte';

	let { eyebrow, title, children }: { eyebrow: string; title: Snippet; children?: Snippet } =
		$props();
</script>

<section class="relative overflow-hidden border-b border-line">
	<div
		class="absolute inset-0 -z-10 dot-grid [mask-image:linear-gradient(to_bottom,#000,transparent)] opacity-50"
	></div>
	<div class="mx-auto max-w-6xl px-5 pt-20 pb-16 sm:px-8 md:pt-28 md:pb-24">
		<p class="animate-rise eyebrow">
			<span class="text-signal">//</span>
			{eyebrow}
		</p>
		<h1
			class="mt-6 max-w-4xl animate-rise font-display text-5xl leading-[0.95] tracking-tight [animation-delay:80ms] sm:text-7xl md:text-8xl"
		>
			{@render title()}
		</h1>
		{#if children}
			<div
				class="mt-8 max-w-2xl animate-rise text-lg leading-relaxed text-paper/75 [animation-delay:160ms]"
			>
				{@render children()}
			</div>
		{/if}
	</div>
</section>
