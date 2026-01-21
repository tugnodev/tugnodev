<script lang="ts">
    import { type Skills } from "../data.ts";
    import { ScreenShareOff } from "@lucide/svelte";

    const { skill }: { skill: Skills } = $props();
</script>

<div
    class="flex flex-col gap-6 w-full border border-base-300 bg-base-100 hover:shadow-md transition-all rounded-2xl p-4"
>
    <div class="flex items-center gap-4">
        <skill.icon />
        <h2 class="text-2xl font-semibold">{skill.domaineName}</h2>
    </div>
    <div>
        <p>{skill.desc}</p>
    </div>
    <div class="flex gap-2 flex-wrap items-center">
        {#each skill.tools as tool (tool.name)}
            <div class="tooltip flex items-center">
                <div class="tooltip-content absolute z-30 bg-base-300">
                    <div class="text-base-content font-semibold">
                        {tool.desc}
                    </div>
                </div>
                <span
                    class="flex badge animate-bounce badge-accent badge-soft items-center justify-center"
                    ><img class="w-4" src={tool.logo} alt="logo" />
                    <p>{tool.name}</p>
                </span>
            </div>
        {/each}
    </div>
</div>
