<script>
    export let title
</script>

<style scoped lang="scss">
	$radius: 10px;

	.padded{
		padding: 10px !important;
	}

	.is-rounded{
		border-radius: $radius;
	}

	.is-rounded-top{
		border-radius: $radius $radius 0 0;
	}

	.is-rounded-bottom{
		border-radius: 0 0 $radius $radius;
	}
</style>

<div class="box is-rounded is-paddingless">
    {#if title}
   	<div class="hero is-small is-dark is-rounded-top">
		<div class="hero-body padded is-block">
			<div>
				<div class="is-pulled-left">
					<span>{title}</span>
				</div>
				<div class="is-pulled-right">
					<div>
						🟢 🟠 🔴
					</div>
				</div>
			</div>
		</div>
	</div>
    {/if}

	<pre class="is-rounded-bottom">
        <slot></slot>
    </pre>
</div>