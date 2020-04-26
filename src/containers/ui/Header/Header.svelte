<script>


    import { getContext } from "svelte"
    import { onMount } from "svelte"

    import Header from "../../../components/ui/Header/Header";
    import HEADER from "../../../api/backend/HEADER";

    const { client, mediaUrl } = getContext("api");
    

    let data = {}

    onMount(async()=>{

        const query = await client.query({
            query: HEADER
        })

        const { name, logo } = query.data.allConfigurations[0];
        

        data = {
            name,
            logo: mediaUrl + logo.resizedImages[0].file.publicUrl
        }

    })

    
    

</script>

<Header {...data}/>