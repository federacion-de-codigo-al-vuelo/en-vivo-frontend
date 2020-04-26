<script>

	import Header from "../containers/ui/Header/Header"

	// import { getClient } from "svelte-apollo"

	// let client = getClient();

	// $: console.log("client!!!??", client);
	
    import { getContext } from "svelte"

 const client = getContext(Symbol("api"));

    $: console.log(client);
    
    
</script>

<svelte:head>
	<title>Código al Vuelo</title>
</svelte:head>


<!-- {#if client} -->
<Header/>

<main>
	<h1>Código al Vuelo</h1>
</main>

<!-- {/if} -->