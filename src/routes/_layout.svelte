<script context="module">


	export async function preload(page, session) {
		let api = process.env.EN_VIVO_BACKEND_API_URL
		let mediaUrl = process.env.EN_VIVO_MEDIA_URL
	
		return { api, mediaUrl };
	}

</script>
<script>
	
	import { onMount } from "svelte";
	import { gql } from "apollo-boost";
	import { setClient } from "svelte-apollo";
	import { setContext } from "svelte";
	import apollo from '../apollo';
	import Connect from '../components/api/Connect';

	export let api
	export let mediaUrl
	let client;

	onMount(async () => {

		client = apollo(api)
		
	});	

	
</script>



{#if client}

	<Connect {client} {mediaUrl}>
		<slot></slot>
	</Connect>

{:else}

	<p>
		Connecting
	</p>

{/if}
