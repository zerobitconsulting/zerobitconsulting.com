<script lang="ts">
	const COLS = 8;
	const ROWS = 8;
	const SIZE = COLS * ROWS;

	// Deterministic so the prerendered HTML and the hydrated first frame match.
	function seedBits(): number[] {
		let x = 0x2f6b;
		return Array.from({ length: SIZE }, () => {
			x = (x * 1103515245 + 12345) & 0x7fffffff;
			return (x >> 16) % 3 === 0 ? 0 : 1;
		});
	}

	/**
	 * An 8x8 register of bits that steadily flip to zero — manual work being
	 * automated away. A stray bit occasionally flips back on so it never settles.
	 */
	let bits = $state(seedBits());
	let last = $state<number | null>(null);

	const zeros = $derived(bits.filter((b) => b === 0).length);

	$effect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const id = window.setInterval(() => {
			const ones = bits.flatMap((b, i) => (b ? [i] : []));
			const revive = ones.length < SIZE * 0.2 || Math.random() < 0.18;
			const pool = revive ? bits.flatMap((b, i) => (b ? [] : [i])) : ones;
			const pick = pool[Math.floor(Math.random() * pool.length)];
			if (pick === undefined) {
				last = null;
				return;
			}
			bits[pick] = revive ? 1 : 0;
			last = revive ? null : pick;
		}, 420);

		return () => window.clearInterval(id);
	});
</script>

<figure class="relative" aria-label="Animated grid of bits flipping to zero">
	<div
		class="rounded-lg border border-line bg-ink-raised/80 p-5 shadow-[0_30px_80px_-20px_#000] sm:p-6"
	>
		<div
			class="mb-5 flex items-center justify-between font-mono text-[11px] tracking-[0.2em] text-mute uppercase"
		>
			<span class="flex items-center gap-2">
				<span class="size-2 rounded-full bg-signal shadow-[0_0_12px_var(--color-signal)]"></span>
				automation.run
			</span>
			<span aria-live="off">{String(zeros).padStart(2, '0')}/{SIZE} zeroed</span>
		</div>

		<div class="grid grid-cols-8 gap-1.5 sm:gap-2" aria-hidden="true">
			{#each bits as bit, i (i)}
				<span
					class={[
						'grid aspect-square place-items-center rounded-[3px] font-mono text-sm transition-all duration-500 sm:text-base',
						i === last
							? 'scale-110 bg-signal text-ink'
							: bit
								? 'bg-paper/[0.08] text-paper'
								: 'bg-transparent text-mute/50'
					]}
				>
					{bit}
				</span>
			{/each}
		</div>

		<div class="mt-5 h-1 overflow-hidden rounded-full bg-line">
			<div
				class="h-full bg-signal transition-[width] duration-500"
				style:width="{(zeros / SIZE) * 100}%"
			></div>
		</div>
	</div>
	<div
		class="absolute -inset-6 -z-10 dot-grid [mask-image:radial-gradient(closest-side,#000,transparent)] opacity-60"
	></div>
</figure>
