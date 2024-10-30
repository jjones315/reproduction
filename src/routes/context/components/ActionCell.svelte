<script lang="ts">
    import { Button } from "$components";
    import * as v from "valibot";
    import { useLineItemContext } from "../context/lineItemContext.svelte";
    import { CreatedLineItem } from "../schema";

    const lineItem = useLineItemContext();

    const isValid = $derived(
        v.safeParse(CreatedLineItem, {
            description: lineItem.value.description,
            hasRetainage: lineItem.value.hasRetainage,
            totalAmount: lineItem.value.totalAmount,
            totalDisbursementAmount: lineItem.value.totalDisbursementAmount,
        }).success
    );
</script>

<td>
    <Button color="danger" onclick={() => lineItem.deleteLineItem()} size="sm" tooltip="Remove" variant="light">
        Delete
    </Button>

    <Button color="default" disabled={!isValid} size="sm" tooltip="Approve" variant="solid">Approve</Button>
</td>
