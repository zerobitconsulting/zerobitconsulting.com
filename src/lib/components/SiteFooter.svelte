<script lang="ts">
	import { resolve } from '$app/paths';
	import { nav, site } from '#lib';
	import Logo from './Logo.svelte';
	import SocialIcon from './SocialIcon.svelte';

	const links = [{ href: '/', label: 'Home' } as const, ...nav];
	const socials = [
		{ href: site.social.instagram, icon: 'instagram', label: 'ZeroBit on Instagram' },
		{ href: site.social.x, icon: 'x', label: 'ZeroBit on X' }
	] as const;
</script>

<footer class="border-t border-line bg-ink-raised/60">
	<div class="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
		<div class="space-y-5">
			<Logo />
			<p class="max-w-sm font-display text-2xl leading-snug text-paper/90">
				Automating the smallest bit of work so you can focus on your
				<em class="text-signal">customers</em>.
			</p>
		</div>

		<div>
			<p class="mb-4 eyebrow">Navigate</p>
			<ul class="space-y-2">
				{#each links as { href, label } (href)}
					<li>
						<a href={resolve(href)} class="text-paper/80 transition-colors hover:text-signal">
							{label}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<p class="mb-4 eyebrow">Connect</p>
			<a
				href={`mailto:${site.email}`}
				class="break-all text-paper/80 underline decoration-line underline-offset-4 transition-colors hover:text-signal hover:decoration-signal"
			>
				{site.email}
			</a>
			<div class="mt-5 flex gap-3">
				{#each socials as { href, icon, label } (icon)}
					<a
						{href}
						target="_blank"
						rel="external noreferrer"
						aria-label={label}
						class="grid size-10 place-items-center rounded-full border border-line text-paper/80 transition-colors hover:border-signal hover:text-signal"
					>
						<SocialIcon name={icon} />
					</a>
				{/each}
			</div>
		</div>
	</div>

	<div class="border-t border-line/60">
		<div
			class="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 font-mono text-xs text-mute sm:flex-row sm:justify-between sm:px-8"
		>
			<span>© {new Date().getFullYear()} {site.name}</span>
			<span>
				status: <span class="text-signal">0</span> manual steps remaining
				<span class="ml-0.5 animate-blink">_</span>
			</span>
		</div>
	</div>
</footer>
