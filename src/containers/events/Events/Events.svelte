<script>


    import { getContext } from "svelte"
    import { onMount } from "svelte"

    import EVENTS from "../../../api/backend/EVENTS";

    import EventsList from "../../../components/events/EventsList/EventsList";

    const { client, mediaUrl } = getContext("api");
    

    let events
    

    onMount(async()=>{

        const query = await client.query({
            query: EVENTS
        })

        events = query.data.allEvents.map(e=>({
            ...e,
            image: mediaUrl + e.image.resizedImages[0].file.publicUrl
        }));
        

    })

    
    

</script>

<EventsList {events}/>