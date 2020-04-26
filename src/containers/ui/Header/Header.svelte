<script>


    import { getContext } from "svelte"
    import { onMount } from "svelte"

    import Header from "../../../components/ui/Header/Header";

    const client = getContext("api");

    console.log(client);
    
    

</script>

<Header/>