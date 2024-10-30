import type { LineItemModel } from "$lib/types";
import { getContext, setContext } from "svelte";

export interface BudgetContextSource {
    readonly lineItems: LineItemModel[];
}

export class BudgetContext implements BudgetContextSource {
    #init: BudgetContextSource = undefined!;

    readonly lineItems = $derived(this.#init.lineItems);
    readonly sortedLineItemIds = $derived(
        this.lineItems
            .filter(x => x.isDeleted !== true)
            // eslint-disable-next-line unicorn/prefer-spread
            .slice(0)
            .sort((a, b) => {
                const orderBy = (a.orderBy ?? 0) - (b.orderBy ?? 0);
                if (orderBy != 0) return orderBy;

                if (a.id <= 0 && b.id <= 0) {
                    // Both new items, desc sort on id
                    return (b.orderBy ?? 0) - (a.orderBy ?? 0);
                } else if (a.id > 0 && b.id > 0) {
                    // Both existing items, acs sort on id
                    return (a.orderBy ?? 0) - (a.orderBy ?? 0);
                }

                // one old one new, put new last
                return (b.orderBy ?? 0) - (a.orderBy ?? 0);
            })
            .map(x => x.id)
    );

    constructor(init: BudgetContextSource) {
        this.#init = init;
    }

    add() {
        const hasRetainage = true;
        const data: LineItemModel = {
            id: Math.min(0, ...this.lineItems.map(x => x.id)) - 1,
            lineNumber: Math.max(0, ...this.lineItems.map(x => x.lineNumber)) + 1,
            projectId: 0,
            activeOrderId: null,
            disbursedOrderId: null,
            createdByOrderId: null,
            createdAt: new Date().toISOString(),
            createdById: 0,
            lastModifiedAt: null,
            lastModifiedById: null,
            inspectorCompletedPercentage: null,
            lenderCompletedPercentage: null,
            previousCompletedPercentage: null,
            requestedAmount: null,
            approvedDisbursementAmount: null,
            orderBy: getOrderBy(this.lineItems),
            description: "",
            totalAmount: undefined,
            totalDisbursementAmount: null,
            isApproved: false,
            isDeleted: false,
            hasRetainage,
        };
        this.lineItems.push(data);
        return data;
    }
}

const BUDGET_CONTEXT_KEY = Symbol("$site/project/budget");

export function createBudgetContext(init: BudgetContextSource) {
    return setContext(BUDGET_CONTEXT_KEY, new BudgetContext(init));
}

export function useBudgetContext() {
    return getContext<BudgetContext>(BUDGET_CONTEXT_KEY);
}

const INT_32_MAX_VALUE = 2_147_483_647;
const RESERVED_ORDERED_BY = INT_32_MAX_VALUE - 100_000;

function getOrderBy(values: LineItemModel[]) {
    let maxValue = 0;
    for (const value of values) {
        const orderBy = value.orderBy ?? 1;
        if (orderBy > maxValue && orderBy < RESERVED_ORDERED_BY) {
            maxValue = orderBy;
        }
    }
    return maxValue + 1;
}
