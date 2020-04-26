<script>


    import { getContext } from "svelte"
    import { onMount } from "svelte"

    import EVENT_SLUG from "../../../api/backend/EVENT_SLUG";

    import EventDetail from "../../../components/events/EventDetail/EventDetail";

    const { client, mediaUrl } = getContext("api");
    

    export let slug
    let event
    

    onMount(async()=>{

        const query = await client.query({
            query: EVENT_SLUG,
            variables: { slug }
        })

        event = query.data.allEvents[0]
        
        event = {
            ...event,
            image: mediaUrl + event.image.resizedImages[0].file.publicUrl
        }

        
        
    })

    
    

</script>

{#if event}
    <EventDetail {event}/>
{/if}