<script>

    export let events

</script>


{#if Array.isArray(events)}
    <ul>

        {#each events as event,i ("event_"+event.id)}

            <article>
                <a href={"/events/"+event.slug}>
                    {event.name}
                </a>
            </article>

        {/each}

    </ul>
{/if}