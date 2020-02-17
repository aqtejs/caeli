<script>
    export let from, at
</script>

<style scoped>
    .box{
        border-radius: 40px;
        border-bottom-right-radius: 0;
    }
</style>

<div class="box is-rounded">
    {#if from}
    <label class="label">
        {from.username}
        <span class="tag is-primary is-light">{from.id}</span>
    </label>
    {/if}

    <p>
        <slot></slot>
    </p>
</div>