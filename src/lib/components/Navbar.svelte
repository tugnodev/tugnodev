<script lang="ts">
    // Importation du type automatique depuis le dossier généré
    import type { LayoutRouteId } from "../../routes/$types.js";
    import {
        HouseHeart,
        ScrollText,
        FolderGit2,
        Contact,
    } from "@lucide/svelte";
    import { page } from "$app/state";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    interface MyRoute {
        path: LayoutRouteId;
        title: string;
        icon: any;
    }

    const routes: MyRoute[] = [
        { path: "/", title: "Accueil", icon: HouseHeart },
        { path: "/skill", title: "Skills", icon: ScrollText },
        { path: "/projects", title: "Projets", icon: FolderGit2 },
        { path: "/contact", title: "Contact", icon: Contact },
    ];

    let currentPage: string = $state("/");

    $effect(() => {
        currentPage = page.url.pathname;
    });
    onMount(() => {});
</script>

<nav
    class="flex justify-center items-center border-2 rounded-xl p-1 bg-base-100/50 backdrop-blur-lg border-base-300"
>
    <ul class="flex gap-2 items-center justify-center">
        {#each routes as route (route.path)}
            <li
                in:fade={{ duration: 300, easing: cubicOut }}
                out:fade={{ duration: 300, easing: cubicOut }}
                class="flex"
            >
                <a
                    class={`flex p-1 rounded gap-1 px-1 ${currentPage === route.path ? "bg-base-300 transition-color" : ""}`}
                    href={route.path}
                    class:active={currentPage === route.path}
                >
                    <route.icon />
                    {#if currentPage === route.path}
                        <span>{route.title}</span>
                    {/if}
                </a>
            </li>
        {/each}
    </ul>
</nav>
