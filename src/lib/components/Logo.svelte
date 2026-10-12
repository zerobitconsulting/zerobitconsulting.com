<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<a href={resolve('/')} class="group flex items-center gap-3" aria-label="ZeroBit Consulting home">
	<span
		class="grid size-9 place-items-center rounded-sm border border-paper/80 font-mono text-sm font-medium transition-colors group-hover:border-signal group-hover:bg-signal group-hover:text-ink"
	>
		0b
	</span>
	<span class="font-display text-2xl leading-none tracking-tight">
		ZeroBit<span class="text-signal">.</span>
	</span>
</a>
