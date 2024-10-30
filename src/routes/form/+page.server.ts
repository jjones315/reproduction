import { FormSchema } from "./FormSchema";
import { superValidate } from "sveltekit-superforms";
import { valibot } from "sveltekit-superforms/adapters";

export async function load() {
    const form = await superValidate(valibot(FormSchema), {
        defaults: {
            budget: {
                entry: null,
            },
        },
        errors: true,
    });

    return {
        form,
    };
}
