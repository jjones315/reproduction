<script lang="ts">
    import LineItemBudgetRow from "./components/LineItemBudgetRow.svelte";
    import { Button } from "$components";
    import { createBudgetContext } from "./context/budgetContext.svelte";
    import { stateFrom } from "$lib/utils/stateFrom.svelte";

    let { data } = $props();

    const lineItems = stateFrom(() => data.lineItems);

    const budgetContext = createBudgetContext({
        get lineItems() {
            return lineItems.data;
        },
    });
</script>

<table class="min-w-[800px]">
    <tbody>
        {#each budgetContext.sortedLineItemIds as id (id)}
            <tr>
                <LineItemBudgetRow lineItemId={id} />
            </tr>
        {/each}
    </tbody>
</table>

<button onclick={() => budgetContext.add()}>ADD LINE</button>
