<script>
    export let logo
</script>
<header>


    {#if logo}
        <img src={logo} alt="Logo"/>
    {/if}

    
    <nav>
        <ul>
            <li>
                <a href="/events">
                    Eventos
                </a>
            </li>
        </ul>
    </nav>

</header>