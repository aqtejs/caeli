<script>
    export let from, at
</script>

<style scoped>
    .box{
        border-radius: 40px;
        border-bottom-right-radius: 0;

        margin: 10px 0;
    }
</style>

<div class="box is-rounded">
    {#if from}
    <label class="label">
        {from.name}
        {#if from.id}
        <span class="tag is-primary is-light">{from.id}</span>
        {/if}
    </label>
    {/if}

    <p>
        <slot></slot>
    </p>
</div>