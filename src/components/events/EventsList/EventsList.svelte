<script>

    export let events

</script>


{#if Array.isArray(events)}
    <ul>

        {#each events as event,i ("event_"+i)}

            <article>
                <a href={"#"}>
                    {event.name}
                </a>
            </article>

        {/each}

    </ul>
{/if}