<script>
	export let segment;

	let active = false;

	let toggle = () => active = !active
</script>

<style scoped>
	/*.navbar{
		position: sticky;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}*/
</style>

<nav class="navbar has-shadow is-fixed-top">
	<div class="navbar-brand">
		<a class="navbar-item" class:selected='{segment === undefined}' href='.'>
			<img class="image is-64x64" src="/img/c.png" alt/>
		</a>

		<div class="navbar-burger" on:click={toggle} class:is-active={active}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>

	<div class="navbar-menu" class:is-active={active}>
		<div class="navbar-start">
			
			<a class="navbar-item" class:selected='{segment === "about"}' href='rooms'>Rooms</a>
		</div>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<div class="navbar-end">
			<a class="navbar-item" rel=prefetch class:selected='{segment === "blog"}' href='blog'>Blog</a>
		</div>
	</div>
</nav>
