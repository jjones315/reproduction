import * as v from "valibot";

export const FormSchema = v.object({
    budget: v.object({
        entry: v.nullable(
            v.object({
                confirmed: v.boolean([v.value(true, "Must confirm budget")]),
                lines: v.array(
                    v.object({
                        description: v.string("Description is required"),
                        amount: v.transform(
                            v.nullable(
                                v.coerce(v.number("Must Be a Number", [v.minValue(0, "Must be Positive")]), Number)
                            ),
                            value => (value === 0 ? null : value)
                        ),
                    })
                ),
            })
        ),
    }),
});

export type FormSchema = v.Output<typeof FormSchema>;
