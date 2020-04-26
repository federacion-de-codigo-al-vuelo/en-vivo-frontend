<script context="module">
	export async function preload(page, session) {
		let apiUrl = process.env.EN_VIVO_BACKEND_API_URL
	
		return { apiUrl };
	}
</script>
<script>

	import Header from "../containers/ui/Header/Header"

	export let apiUrl

	

	// export let env

	$: console.log("apiUrl", apiUrl);
	

</script>

<Header/>

<main>
	<slot></slot>
</main>