<script>
    import { goto } from "$app/navigation";
    import Tugnodev from "$lib/components/Tugnodev.svelte";
</script>

<header
    class="flex fixed bg-base-200/20 backdrop-blur-md top-0 items-center h-16 z-60 justify-between w-full p-2 max-w-7xl"
>
    <button onclick={() => goto("/")} class="w-42 text-accent">
        <Tugnodev width="full" fill={`currentColor`} />
    </button>
    <button
        onclick={() => goto("/contact")}
        class="btn btn-md btn-soft btn-accent">Contacter</button
    >
</header>
