<script lang="ts">
	import { resolve } from '$app/paths';
	import PageIntro from '#lib/components/PageIntro.svelte';
	import Seo from '#lib/components/Seo.svelte';

	const principles = [
		{
			title: 'Start small',
			body: 'The fastest wins come from the smallest, most-repeated tasks. We automate those first and build momentum from there.'
		},
		{
			title: 'Leave it better',
			body: "Everything we build is documented and readable. Your team should be able to change it long after we're gone."
		},
		{
			title: 'People first',
			body: 'Automation exists to give people time back, for customers, for craft, for the work only humans can do.'
		},
		{
			title: 'Secure by habit',
			body: 'Least privilege, managed secrets, and reviewed code are defaults, not upsells.'
		}
	];
</script>

<Seo title="About" description="Who ZeroBit Consulting is and how we think about automation." />

<PageIntro eyebrow="About us">
	{#snippet title()}
		Zero wasted <em class="text-signal">bits</em>.
	{/snippet}
	ZeroBit Consulting is built on a simple idea: every repetitive task your team does by hand is a bit
	of time that could be spent on your customers. We find those bits and set them to zero.
</PageIntro>

<section class="mx-auto grid max-w-6xl gap-16 px-5 py-24 sm:px-8 md:grid-cols-[1fr_1.6fr] md:py-32">
	<div class="md:sticky md:top-28 md:self-start">
		<p class="eyebrow"><span class="text-signal">//</span> Principles</p>
		<h2 class="mt-5 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
			How we approach the work.
		</h2>
	</div>

	<ol class="space-y-px">
		{#each principles as p, i (p.title)}
			<li class="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-10">
				<span class="font-mono text-sm text-signal">{String(i).padStart(2, '0')}</span>
				<div>
					<h3 class="font-display text-3xl">{p.title}</h3>
					<p class="mt-3 max-w-xl leading-relaxed text-paper/70">{p.body}</p>
				</div>
			</li>
		{/each}
	</ol>
</section>

<section class="border-t border-line">
	<div
		class="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-20 sm:px-8 md:flex-row md:items-center"
	>
		<p class="max-w-xl font-display text-3xl leading-snug sm:text-4xl">
			Curious whether something can be automated? It probably can.
		</p>
		<a
			href={resolve('/contact')}
			class="group inline-flex shrink-0 items-center gap-3 rounded-full bg-signal px-7 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-0.5"
		>
			Ask us <span class="transition-transform group-hover:translate-x-1">→</span>
		</a>
	</div>
</section>
