<script>

    export let event

</script>

{#if typeof event == "object"}

    <article class="Event">
        <a href={"/events/"+event.slug}>
            {event.name}
        </a>
    </article>
    
{/if}