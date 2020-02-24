<script>
	import { onMount } from 'svelte'
	
	let rooms

	onMount(() => {
		import('../config/rooms.json')
			.then((res) => {
				rooms = res.default
			})
	})

	
</script>

<style scoped>
	.banner{
		padding-bottom: 60px;
	}

	.content{
		margin-top: -60px;
	}

	.room-name{
		text-transform: capitalize;
	}

	.rooms .hero{
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	.hero-body.overlay{
		width: 100%;
		transition: background-color 0.3s;
		background-color: rgba(0, 0, 0, 0.7);
		cursor: pointer;
	}

	.hero-body.overlay:hover{
		background-color: rgba(0, 0, 0, 0.4);
	}

	.is-rounded{
		border-radius: 10px;
	}

	.section{
		padding: 10px;
	}

	input{
		background: transparent;
	}
</style>

<svelte:head>
	<title>Rooms</title>
</svelte:head>

<div class="hero is-medium is-primary banner" class:is-fullheight={!rooms}>
	<div class="hero-body container">
		<h1 class="title is-1 is-flex">
			<span>Rooms</span>
			<span class="is-4" class:loader={!rooms}></span>
		</h1>
		
	</div>
</div>

<div class="rooms content container is-rounded is-paddingless">
	{#if rooms}
		<div class="section">
			<div class="hero is-rounded is-warning">
				<input type="text" class="hero-body is-rounded container is-dark input is-large title is-5 room-name" placeholder="Custom room name"/>
			</div>
		</div>

		{#each rooms as room}
			<div class="section">
				<a href="/chat/{room.name}" class="hero is-dark is-rounded" style="background-image: url(/img/rooms/{room.img})">
					<div class="hero-body is-rounded overlay container">
						<p class="title is-5 room-name">{room.name}</p>
					</div>
				</a>
			</div>
		{/each}
	{/if}
</div>