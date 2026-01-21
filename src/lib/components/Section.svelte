<script>
    import { cubicInOut, cubicOut } from "svelte/easing";
    import { slide } from "svelte/transition";

    let { children } = $props();
</script>

<section
    in:slide={{ duration: 300, delay: 150, easing: cubicInOut }}
    out:slide={{ duration: 200, easing: cubicOut }}
    class="w-full h-full mt-16 pb-16 xl:mt-0 gap-6 flex flex-col p-4 items-center justify-around xl:justify-between overflow-hidden overflow-y-scroll max-w-7xl xl:flex-row-reverse"
>
    {@render children()}
</section>
