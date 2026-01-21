<script lang="ts">
    import { skills } from "$lib/data.js";
    import SkillCard from "$lib/components/SkillCard.svelte";
    import Section from "$lib/components/Section.svelte";

    const langages = [
        { lang: "Rust", icon: "/axum.png" },
        { lang: "TypeScript", icon: "/typescript.svg" },
    ];
</script>

<Section>
    <div class="w-full flex flex-col gap-4">
        <div class="w-full flex gap-4 flex-col items-center justify-center">
            <h2 class="text-2xl font-bold">Langages</h2>
            <p>
                Pour des raisons de sécurite et de performance j'ai decider de
                baser ma stack autour de ces deux langages :
            </p>
            <div class="flex animate-bounce gap-4">
                {#each langages as lang}
                    <span
                        class="flex gap-2 badge badge-soft badge-xl badge-info"
                    >
                        <img class="w-6" src={lang.icon} alt="logo" />
                        <p>{lang.lang}</p>
                    </span>
                {/each}
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <h2 class="text-2xl font-bold">Frameworks :</h2>
            <div
                class="w-full grid overflow-visible grid-cols-1 relative z-30 gap-2 xl:grid-cols-2"
            >
                {#each skills as skill (skill.domaineName)}
                    <SkillCard {skill} />
                {/each}
            </div>
        </div>
    </div>
</Section>
