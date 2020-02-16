<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style scoped>
	.title.is-1{
		font-size: 100px
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="hero is-fullheight is-dark">

	<div class="hero-body container">
		<div>
			<h1 class="has-text-centered title is-1">{status}</h1>
			<p class="subtitle is-2">{error.message}</p>

			{#if dev && error.stack}
				<pre>{error.stack}</pre>
			{/if}
		</div>
	</div>
</div>
