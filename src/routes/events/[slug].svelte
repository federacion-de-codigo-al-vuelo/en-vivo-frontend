<script context="module">

	export async function preload(page, session) {

		const { slug } = page.params;

		return { slug };

	}

</script>

<script>

	import Event from "../../containers/events/Event/Event"

    export let slug;

</script>


<Event {slug}/>