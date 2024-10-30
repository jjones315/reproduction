import * as v from "valibot";

export const CreatedLineItem = v.object({
    description: v.string("Description is required", [
        v.minLength(1, "Description is required"),
        v.maxLength(256, "Description cannot be longer than 256 characters"),
    ]),
    hasRetainage: v.coerce(v.boolean(), Boolean),
    totalAmount: v.nullish(v.coerce(v.number([v.minValue(0, "Cannot Be Negative")]), Number)),
});
export type CreatedLineItem = v.Output<typeof CreatedLineItem>;
