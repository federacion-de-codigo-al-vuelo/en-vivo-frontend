<script context="module">


	export async function preload(page, session) {
		let api = process.env.EN_VIVO_BACKEND_API_URL
	
		return { api };
	}

</script>
<script>
	
	import { onMount } from "svelte";
	import { gql } from "apollo-boost";
	import { setClient } from "svelte-apollo";
	import { setContext } from "svelte";
	import apollo from '../apollo';
	export let api
	let client;

	onMount(async () => {

		client = apollo(api)
		
	
		const q = await client.query({
			query: gql`
				query {
					allConfigurations {
						name
						logo {
							resizedImages {
								file {
									publicUrl
								}
								size {
									name
									size
								}
							}
						}
					}
				}
			`
		})

		console.log(q.data.allConfigurations[0]);
		
		
	});
	

	// setContext(Symbol("api"),{ client });		
	
</script>



{#if client}

	<slot></slot>

{:else}

	<p>
		Connecting
	</p>

{/if}
