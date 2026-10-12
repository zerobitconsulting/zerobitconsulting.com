<script lang="ts">
	import { resolve } from '$app/paths';
	import PageIntro from '#lib/components/PageIntro.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { services } from '#lib';
</script>

<Seo
	title="Services"
	description="Process automation, integrations, cloud & DevOps, and security-minded engineering."
/>

<PageIntro eyebrow="Services">
	{#snippet title()}
		Less busywork. <br />
		<em class="text-signal">More</em> business.
	{/snippet}
	Whether it’s a single script or an end-to-end pipeline, every engagement aims at the same target: fewer
	manual steps between your team and your customers.
</PageIntro>

<section class="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
	<div class="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
		{#each services as s (s.code)}
			<article
				class="group relative flex flex-col bg-ink p-8 transition-colors hover:bg-ink-raised sm:p-12"
			>
				<span
					aria-hidden="true"
					class="absolute top-6 right-8 font-display text-8xl leading-none text-line transition-colors group-hover:text-signal/30"
				>
					{s.code}
				</span>
				<h2 class="mt-16 font-display text-4xl tracking-tight">{s.title}</h2>
				<p class="mt-4 leading-relaxed text-paper/70">{s.summary}</p>
				<ul class="mt-8 space-y-2 border-t border-line pt-6 font-mono text-sm text-paper/80">
					{#each s.points as pt (pt)}
						<li class="flex gap-3">
							<span class="text-signal">→</span>
							{pt}
						</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>

	<div
		class="mt-20 flex flex-col items-start gap-6 rounded-lg border border-dashed border-line p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10"
	>
		<div>
			<p class="font-display text-3xl">Not sure where you fit?</p>
			<p class="mt-2 text-paper/70">
				Describe the task that eats your week. We’ll tell you honestly if we can help.
			</p>
		</div>
		<a
			href={resolve('/contact')}
			class="group inline-flex shrink-0 items-center gap-3 rounded-full bg-paper px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-signal"
		>
			Get in touch <span class="transition-transform group-hover:translate-x-1">→</span>
		</a>
	</div>
</section>
