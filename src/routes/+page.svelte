<script lang="ts">
	import { resolve } from '$app/paths';
	import BitField from '#lib/components/BitField.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { services } from '#lib';

	const steps = [
		{
			n: '01',
			title: 'Find the friction',
			body: 'We sit with your team and trace the copy-paste, the re-keying, the “I just run this every Monday” tasks.'
		},
		{
			n: '02',
			title: 'Automate the bit',
			body: 'Small, focused automations ship fast. Each one removes a manual step you can measure, not a vague promise.'
		},
		{
			n: '03',
			title: 'Hand it back',
			body: 'You get documented, maintainable systems your people understand and own. No black boxes, no lock-in.'
		}
	];

	const marquee = [
		'workflows',
		'integrations',
		'pipelines',
		'scheduled jobs',
		'infrastructure as code',
		'data sync',
		'reporting',
		'security reviews'
	];
</script>

<Seo />

<!-- Hero -->
<section class="relative overflow-hidden">
	<div
		class="mx-auto grid max-w-6xl items-center gap-14 px-5 pt-16 pb-24 sm:px-8 md:pt-24 lg:grid-cols-[1.25fr_1fr] lg:gap-20 lg:pb-32"
	>
		<div>
			<p class="animate-rise eyebrow">
				<span class="text-signal">//</span> Automation &amp; engineering consultancy
			</p>
			<h1
				class="mt-6 animate-rise font-display text-[3.4rem] leading-[0.92] tracking-tight [animation-delay:80ms] sm:text-7xl lg:text-[6.5rem]"
			>
				Automate the
				<br />
				smallest <em class="text-signal">bit</em>.
			</h1>
			<p
				class="mt-8 max-w-xl animate-rise text-lg leading-relaxed text-paper/75 [animation-delay:160ms] sm:text-xl"
			>
				ZeroBit takes the repetitive work off your plate (the manual steps, the glue between tools,
				the weekly chores) so your team can focus on your customers.
			</p>
			<div class="mt-10 flex animate-rise flex-wrap items-center gap-4 [animation-delay:240ms]">
				<a
					href={resolve('/contact')}
					class="group inline-flex items-center gap-3 rounded-full bg-signal px-7 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-0.5"
				>
					Start a conversation
					<span class="transition-transform group-hover:translate-x-1">→</span>
				</a>
				<a
					href={resolve('/services')}
					class="rounded-full border border-line px-7 py-3.5 font-medium text-paper/90 transition-colors hover:border-paper"
				>
					See what we do
				</a>
			</div>
		</div>

		<div class="animate-rise [animation-delay:320ms]">
			<BitField />
		</div>
	</div>
</section>

<!-- Marquee -->
<div class="overflow-hidden border-y border-line bg-ink-raised/60 py-4" aria-hidden="true">
	<div
		class="flex w-max animate-marquee gap-10 pr-10 font-mono text-sm tracking-[0.2em] whitespace-nowrap text-mute uppercase"
	>
		{#each [0, 1] as k (k)}
			{#each marquee as w (w)}
				<span class="flex items-center gap-10">
					{w}
					<span class="text-signal">0</span>
				</span>
			{/each}
		{/each}
	</div>
</div>

<!-- Process -->
<section class="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
	<div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
		<h2 class="max-w-xl font-display text-4xl leading-tight tracking-tight sm:text-6xl">
			Small changes, <em class="text-mute">compounding</em> returns.
		</h2>
		<p class="eyebrow">How we work</p>
	</div>

	<ol
		class="mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3"
	>
		{#each steps as s (s.n)}
			<li class="group bg-ink p-8 transition-colors hover:bg-ink-raised sm:p-10">
				<span class="font-mono text-sm text-signal">{s.n}</span>
				<h3 class="mt-10 font-display text-3xl">{s.title}</h3>
				<p class="mt-4 leading-relaxed text-paper/70">{s.body}</p>
			</li>
		{/each}
	</ol>
</section>

<!-- Services preview -->
<section class="border-t border-line">
	<div class="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
		<p class="eyebrow"><span class="text-signal">//</span> Services</p>
		<ul class="mt-10 divide-y divide-line border-y border-line">
			{#each services as s (s.code)}
				<li>
					<a
						href={resolve('/services')}
						class="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-7 sm:grid-cols-[5rem_1fr_auto]"
					>
						<span class="font-mono text-sm text-mute transition-colors group-hover:text-signal">
							{s.code}
						</span>
						<span
							class="font-display text-3xl tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl"
						>
							{s.title}
						</span>
						<span
							class="text-2xl text-mute transition-all group-hover:-rotate-45 group-hover:text-signal"
						>
							→
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- CTA -->
<section class="px-5 pb-24 sm:px-8 md:pb-32">
	<div
		class="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-signal px-8 py-16 text-ink sm:px-14 sm:py-20"
	>
		<span
			class="pointer-events-none absolute -top-16 -right-6 font-display text-[16rem] leading-none text-ink/10 select-none sm:text-[22rem]"
			aria-hidden="true"
		>
			0
		</span>
		<h2 class="relative max-w-2xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
			What would your team do with an extra day a week?
		</h2>
		<a
			href={resolve('/contact')}
			class="relative mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 font-semibold text-paper transition-transform hover:-translate-y-0.5"
		>
			Tell us about your workflow <span>→</span>
		</a>
	</div>
</section>
