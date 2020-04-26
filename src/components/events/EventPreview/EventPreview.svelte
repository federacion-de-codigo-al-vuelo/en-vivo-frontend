<script>

    export let event

</script>

{#if typeof event == "object"}

    <article class="Event">
        <a href={"/events/"+event.slug}>
            <h4>{event.name}</h4>
            <img src={event.image} alt={event.name}/>
        </a>
    </article>

{/if}