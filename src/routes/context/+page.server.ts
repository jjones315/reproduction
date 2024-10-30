import type { LineItemModel } from "$lib/types";

export async function load() {
    const lineItems: LineItemModel[] = [];
    return {
        lineItems,
    };
}
