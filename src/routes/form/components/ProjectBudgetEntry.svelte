<script lang="ts">
    import { type SuperForm } from "sveltekit-superforms";
    import { Button } from "$components";
    import type { FormSchema } from "../FormSchema";

    type Props = {
        form: SuperForm<FormSchema>;
        onBack: () => void;
    };
    let { form, onBack }: Props = $props();
    let { form: formData } = form;
</script>

{#if $formData.budget.entry && $formData.budget.entry.lines}
    <div class="flex flex-row gap-2">
        <button onclick={onBack}> Back </button>

        <!-- Error seems to happen reading `$formData.budget.entry` in the disabled attribute -->
        <Button
            color="primary"
            disabled={$formData.budget.entry.lines.length === 0}
            isIconOnly
            radius="full"
            tooltip="Restart and Clear Budget"
            variant="light"
        >
            RESET
        </Button>

        <!-- the button element works? -->
        <!-- <button disabled={$formData.budget.entry.lines.length === 0}> RESET </button> -->
    </div>

    <div class="flex-1 overflow-y-auto px-4">
        <div class="flex h-10 bg-background">
            <div class="flex w-10 items-center justify-center p-2">#</div>
            <div class="flex-1 p-2">Description</div>
            <div class="w-36 p-2">Amount</div>
        </div>
        <div class="flex-1">
            {#each { length: $formData.budget.entry.lines.length + 10 } as _, index}
                <div class="flex">
                    <div class="flex w-10 items-center justify-center border">
                        {index + 1}
                    </div>
                    <div class="flex-1 border border-b-0">
                        {$formData.budget.entry.lines[index]?.description}
                    </div>
                    <div class="flex w-36 items-center border bg-white p-0">
                        {$formData.budget.entry.lines[index]?.amount}
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/if}
