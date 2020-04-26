<script>
    export let logo
</script>
<header>


    {#if logo}
        <a href="/">
            <img src={logo} alt="Logo"/>
        </a>
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