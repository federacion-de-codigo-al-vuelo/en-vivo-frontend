<script>
    
    import { setContext } from "svelte"

    export let client
    export let mediaUrl

    setContext("api", { client, mediaUrl })

</script>


<slot></slot>