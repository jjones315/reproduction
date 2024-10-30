<script lang="ts">
    import { type SuperForm } from "sveltekit-superforms";
    import ProjectBudgetEntry from "./ProjectBudgetEntry.svelte";
    import type { FormSchema } from "../FormSchema";

    type Props = {
        form: SuperForm<FormSchema>;
    };
    let { form }: Props = $props();
    let { form: formData } = form;

    function enterBudget() {
        $formData.budget!.entry = {
            confirmed: false,
            lines: [],
        };
    }

    function handleBack() {
        $formData.budget!.entry = null;
    }
</script>

<div class="relative h-[800px] w-[500px]">
    {#if $formData.budget.entry}
        <ProjectBudgetEntry {form} onBack={handleBack} />
    {:else}
        <div class="flex flex-1 flex-col items-center justify-center gap-4 p-10">
            <button onclick={enterBudget}> Add Budget </button>
        </div>
    {/if}
</div>
