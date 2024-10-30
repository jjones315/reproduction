import { useBudgetContext, type BudgetContextSource } from "./budgetContext.svelte";
import { getContext, setContext } from "svelte";

class LineItemData {
    constructor(budgetContext: BudgetContextSource, id: number) {
        this.#budgetContext = budgetContext;
        this.id = id;
    }

    #budgetContext: BudgetContextSource = undefined!;
    id: number = undefined!;

    readonly value = $derived(this.#budgetContext.lineItems.find(x => x.id === this.id)!);

    deleteLineItem() {
        const index = this.#budgetContext.lineItems.findIndex(x => x.id === this.id);
        if (index >= 0) {
            this.#budgetContext.lineItems.splice(index, 1);
        }
    }
}

const LINE_ITEM_CONTEXT_KEY = Symbol("$site/project/budget/lineItem");

export function useLineItemContext() {
    return getContext<LineItemData>(LINE_ITEM_CONTEXT_KEY);
}

export function createLineItemContext(id: number) {
    const budgetContext = useBudgetContext();
    return setContext(LINE_ITEM_CONTEXT_KEY, new LineItemData(budgetContext, id));
}

export function createLineItemData(budgetContext: BudgetContextSource, id: number) {
    return new LineItemData(budgetContext, id);
}
