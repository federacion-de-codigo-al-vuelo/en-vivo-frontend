<script context="module">

	export async function preload(page, session) {

		const { slug } = page.params;

		return { event: { slug } };

	}

</script>

<script>
	
    export let event;

</script>


<h1>
    { event.slug }
</h1>