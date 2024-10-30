<script lang="ts">
    import { superForm } from "sveltekit-superforms";
    import { valibotClient } from "sveltekit-superforms/adapters";
    import { FormSchema } from "./FormSchema.js";
    import ProjectBudgetSelection from "./components/ProjectBudgetSelection.svelte";

    let { data } = $props();

    const form = superForm(data.form, {
        validationMethod: "oninput",
        dataType: "json",
        clearOnSubmit: "errors",
        resetForm: false,
        applyAction: true,
        validators: valibotClient(FormSchema),
    });
</script>

<ProjectBudgetSelection {form} />
