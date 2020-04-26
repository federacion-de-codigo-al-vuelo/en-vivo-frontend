<script>

    import EventPreview from "../EventPreview/EventPreview";

    export let events

</script>


{#if Array.isArray(events)}
    <ul>
        {#each events as event,i ("event_"+event.id)}
            <EventPreview {event}/>
        {/each}
    </ul>
{/if}