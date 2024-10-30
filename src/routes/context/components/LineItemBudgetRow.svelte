<script lang="ts">
    import { createLineItemContext } from "../context/lineItemContext.svelte";
    import ActionCell from "./ActionCell.svelte";

    type Props = {
        lineItemId: number;
    };

    let { lineItemId }: Props = $props();
    const context = createLineItemContext(lineItemId);
</script>

<!-- adding/removing condition has no effect -->
{#if context.value}
    <ActionCell />
{/if}
