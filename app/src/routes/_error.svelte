<script>
	import Modal from '../components/Modal.svelte';

	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style scoped lang="scss">
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
				<Modal title="Ops...">
					{error.stack}
				</Modal>
			{/if}
		</div>
	</div>
</div>
