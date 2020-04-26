<script>

    export let event

</script>


{#if typeof event == "object"}

    <article>
        <header>
            <h1>
                {event.name}
            </h1>

            <section class="Dates">
                <span>{event.dateStart}</span> - <span>{event.dateEnd}</span>
            </section>
        </header>
        <section class="image">
            <img src={event.image} alt={event.name}/>
        </section>
    </article>

{/if}