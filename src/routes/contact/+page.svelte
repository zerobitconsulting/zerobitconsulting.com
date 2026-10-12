<script lang="ts">
	import PageIntro from '#lib/components/PageIntro.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import SocialIcon from '#lib/components/SocialIcon.svelte';
	import { site } from '#lib';

	const prompts = [
		"What task is eating your team's time?",
		'Which tools or systems are involved?',
		'How often does it happen, and who does it today?'
	];

	const socials = [
		{ href: site.social.instagram, icon: 'instagram' },
		{ href: site.social.x, icon: 'x' }
	] as const;
</script>

<Seo title="Contact" description="Get in touch with ZeroBit Consulting." />

<PageIntro eyebrow="Contact">
	{#snippet title()}
		Let’s zero out <br />
		your <em class="text-signal">busywork</em>.
	{/snippet}
	Tell us about the work you wish would just happen on its own. We read every message.
</PageIntro>

<section class="mx-auto grid max-w-6xl gap-16 px-5 py-24 sm:px-8 md:grid-cols-[1.4fr_1fr] md:py-32">
	<div>
		<p class="eyebrow"><span class="text-signal">//</span> Email</p>
		<a
			href={`mailto:${site.email}`}
			class="group mt-6 block font-display text-3xl leading-tight tracking-tight break-all sm:text-5xl"
		>
			<span
				class="bg-[linear-gradient(var(--color-signal),var(--color-signal))] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]"
			>
				{site.email}
			</span>
			<span class="ml-3 inline-block text-signal transition-transform group-hover:translate-x-2"
				>→</span
			>
		</a>

		<div class="mt-16">
			<p class="eyebrow"><span class="text-signal">//</span> Elsewhere</p>
			<div class="mt-6 flex flex-wrap gap-3">
				{#each socials as { href, icon } (icon)}
					<a
						{href}
						target="_blank"
						rel="external noreferrer"
						class="inline-flex items-center gap-3 rounded-full border border-line px-5 py-3 transition-colors hover:border-signal hover:text-signal"
					>
						<SocialIcon name={icon} /> @zerobit_consult
					</a>
				{/each}
			</div>
		</div>
	</div>

	<aside class="self-start rounded-lg border border-line bg-ink-raised/70 p-8">
		<p class="eyebrow">Helpful to include</p>
		<ol class="mt-6 space-y-5">
			{#each prompts as q, i (q)}
				<li class="flex gap-4">
					<span class="font-mono text-sm text-signal">0{i + 1}</span>
					<span class="leading-relaxed text-paper/85">{q}</span>
				</li>
			{/each}
		</ol>
	</aside>
</section>
