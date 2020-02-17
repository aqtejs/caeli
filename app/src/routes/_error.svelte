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

<div class="hero is-fullheight">

	<div class="hero-body container">
		<div>
			<h1 class="has-text-centered title is-1">{status}</h1>
			<p class="has-text-centered subtitle is-2">{error.message}</p>

			{#if dev && error.stack}
				<div class="box is-rounded is-paddingless">
					<div class="hero is-small is-dark">
						<div class="hero-body is-paddingless is-block">
							<div class="level">
								<div class="level-left">
									<span>Ops...</span>
								</div>

								<div class="level-right">
									<div class="level-item">
										...
									</div>
								</div>
							</div>
						</div>
					</div>

					<pre>{error.stack}</pre>
				</div>
			{/if}
		</div>
	</div>
</div>
