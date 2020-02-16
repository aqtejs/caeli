<script>
	import Nav from '../components/Nav.svelte'
	import Footer from '../components/Footer.svelte'
</script>

<style scoped>
	br{
		margin-top: 20px;
	}
</style>

<main>
	<slot></slot>
</main>

<br>

<Footer/>
<Nav/>