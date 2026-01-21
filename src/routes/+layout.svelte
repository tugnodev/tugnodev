<script lang="ts">
    import "./layout.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Header from "$lib/components/Header.svelte";

    const { children } = $props();
</script>

<main
    class="bg-linear-to-tl from-base-200 to-base-300 w-full flex fixed flex-col items-center justify-center h-screen"
>
    <Header />
    <section
        class="fixed flex bottom-4 justify-center items-center w-full z-60"
    >
        <Navbar />
    </section>
    {@render children()}
</main>
