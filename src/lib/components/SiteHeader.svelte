<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { nav } from '#lib';
	import Logo from './Logo.svelte';

	let open = $state(false);

	const isActive = (href: string) => page.url.pathname.startsWith(href);

	// Close the mobile menu on any navigation, including back/forward.
	afterNavigate(() => {
		open = false;
	});
</script>

<header class="sticky top-0 z-50 border-b border-line/70 bg-ink/75 backdrop-blur-md">
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
		<Logo />

		<nav aria-label="Primary" class="hidden md:block">
			<ul class="flex items-center gap-1">
				{#each nav as { href, label } (href)}
					{@const active = isActive(href)}
					<li>
						<a
							href={resolve(href)}
							aria-current={active ? 'page' : undefined}
							class={[
								'relative px-4 py-2 font-mono text-xs tracking-[0.18em] uppercase transition-colors hover:text-paper',
								active ? 'text-paper' : 'text-mute'
							]}
						>
							{#if active}<span class="absolute left-1 text-signal">›</span>{/if}
							{label}
						</a>
					</li>
				{/each}
				<li class="ml-3">
					<a
						href={resolve('/contact')}
						class="rounded-full bg-paper px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-signal"
					>
						Let’s talk
					</a>
				</li>
			</ul>
		</nav>

		<button
			type="button"
			class="relative grid size-10 place-items-center md:hidden"
			aria-expanded={open}
			aria-controls="mobile-nav"
			aria-label={open ? 'Close menu' : 'Open menu'}
			onclick={() => (open = !open)}
		>
			<span
				class={[
					'absolute h-px w-6 bg-paper transition-transform duration-300',
					open ? 'rotate-45' : '-translate-y-1.5'
				]}
			></span>
			<span
				class={[
					'absolute h-px w-6 bg-paper transition-transform duration-300',
					open ? '-rotate-45' : 'translate-y-1.5'
				]}
			></span>
		</button>
	</div>

	<nav
		id="mobile-nav"
		inert={!open}
		aria-label="Mobile"
		class={[
			'grid overflow-hidden border-line/70 transition-[grid-template-rows] duration-300 md:hidden',
			open ? 'grid-rows-[1fr] border-t' : 'grid-rows-[0fr]'
		]}
	>
		<ul class="min-h-0 px-5">
			{#each nav as { href, label }, i (href)}
				<li class="border-b border-line/50 last:border-none">
					<a
						href={resolve(href)}
						tabindex={open ? undefined : -1}
						aria-current={isActive(href) ? 'page' : undefined}
						class="flex items-baseline gap-4 py-4 font-display text-3xl"
					>
						<span class="font-mono text-xs text-signal">0{i + 1}</span>
						{label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
