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
    </article>

{/if}