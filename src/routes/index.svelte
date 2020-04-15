<script>
	import { blur, fade } from 'svelte/transition'
	import { goto } from '@sapper/app'
	import { username } from '../stores/user.js'

	let name

	let enter = function(){
		username.set(name != undefined ? name : "Anon")
		goto('/rooms')
	}
</script>

<style lang="scss" scoped>
	img.banner{
		max-height: 300px;
	}
</style>

<svelte:head>
	<title>caeli</title>
</svelte:head>

<div class="hero is-fullheight is-primary">
	<div class="hero-body container">
		<div in:blur="{{amount: 10, duration: 2000}}">
			<img class="image banner" src="/img/caeli.png" alt="Where did our logo go?">
			<div>
				<form on:submit|preventDefault={enter}>
					<div class="field has-addons has-shadow">
						<div class="control">
							<input
								class="input is-large is-rounded is-outlined is-warning"
								name="username"
								type="text"
								placeholder="Enter a username"
								autocomplete="off"
								bind:value={name}
							/>
						</div>

						<div class="control">
							<button class="button is-large is-warning is-rounded is-outlined" type="submit">
								Enter
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>