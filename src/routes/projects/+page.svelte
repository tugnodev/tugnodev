<script lang="ts">
    import { goto } from "$app/navigation";
    import Section from "$lib/components/Section.svelte";
    import { project } from "$lib/projects.js";
</script>

<Section>
    <div
        class="w-full flex flex-col items-center justify-start gap-8 py-8 md:py-16 px-4"
    >
        <div class="text-center max-w-2xl">
            <h1 class="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h1>
            <p class="text-base-content/70">
                Explorez quelques-uns de mes projets et les défis relevés lors
                de leur conception.
            </p>
        </div>

        <div
            class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
            {#each project as pro (pro.name)}
                <div
                    class="card bg-base-100 shadow-xl image-full before:opacity-60! hover:before:opacity-40! transition-all duration-300"
                >
                    <figure class="h-64 md:h-80">
                        <img
                            src={pro.image}
                            alt={pro.name}
                            class="w-full h-full object-cover"
                        />
                    </figure>
                    <div class="card-body justify-end">
                        <h2 class="card-title text-2xl text-white">
                            {pro.name}
                        </h2>
                        <p class="text-white/90 line-clamp-3">
                            {pro.desc}
                        </p>
                        <div class="card-actions justify-end mt-4">
                            <a
                                href={pro.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn btn-primary"
                            >
                                Voir le repo
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 ml-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</Section>
