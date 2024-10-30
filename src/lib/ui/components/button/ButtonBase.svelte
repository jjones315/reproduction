<script lang="ts">
    import type { BaseButtonProps } from ".";
    import { ripple } from "$ui/actions/ripple";
    let {
        href,
        type = "button",
        as,
        ref = $bindable(undefined),
        children,
        disableRipple,
        tabindex,
        ...restProps
    }: BaseButtonProps = $props();
    const element = $derived(as ?? (href ? "a" : "button"));
</script>

{#if disableRipple}
    <svelte:element
        this={element}
        bind:this={ref}
        data-button-root=""
        href={element === "a" ? href : undefined}
        tabindex={tabindex ?? (as === "span" ? -1 : 0)}
        type={element === "button" ? type : undefined}
        {...restProps}
    >
        {@render children?.()}
    </svelte:element>
{:else}
    <svelte:element
        this={element}
        bind:this={ref}
        data-button-root=""
        href={element === "a" ? href : undefined}
        tabindex={tabindex ?? (as === "span" ? -1 : 0)}
        type={element === "button" ? type : undefined}
        use:ripple
        {...restProps}
    >
        {@render children?.()}
    </svelte:element>
{/if}
