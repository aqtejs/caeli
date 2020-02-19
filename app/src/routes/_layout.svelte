<script>
	import Nav from '../components/Nav.svelte'
	import Footer from '../components/Footer.svelte'
</script>

<style scoped>
	br{
		margin-top: 20px;
	}

	main {
		min-height: 100vh;
		min-width: 100vh;
	}
</style>

<Nav/>
<main>
	<slot></slot>
</main>

<br>

<Footer/>