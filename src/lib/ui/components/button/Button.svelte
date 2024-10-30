<script lang="ts">
    import { buttonVariants, ButtonBase, type ButtonProps, useButtonGroupContext } from ".";
    import { Tooltip } from "$components/tooltip";

    const groupContext = useButtonGroupContext();

    let {
        // Style only
        isLoading,
        isInGroup,
        fullWidth,
        size,
        color,
        variant,
        disableAnimation,
        radius,
        disableRipple: disableRippleProp,
        disabled,
        isIconOnly,
        tooltip,
        "aria-label": ariaLabel,

        // Attributes
        class: className,
        // Snippets
        children,
        start,
        end,

        ...props
    }: ButtonProps = $props();

    const classes = $derived(
        buttonVariants({
            size: size ?? groupContext?.size ?? "md",
            color: color ?? groupContext?.color ?? "default",
            variant: variant ?? groupContext?.variant ?? "solid",
            radius: radius ?? groupContext?.radius,
            fullWidth: fullWidth ?? groupContext?.fullWidth ?? false,
            disabled: disabled || isLoading,
            isInGroup: isInGroup || !!groupContext,
            disableAnimation: disableAnimation ?? groupContext?.disableAnimation ?? false,
            isIconOnly: isIconOnly ?? groupContext?.isIconOnly ?? false,
            className,
        })
    );

    const disableRipple = $derived(disableRippleProp ?? groupContext?.disableRipple ?? false);
    const attributes = $derived({ disabled: (disabled ?? groupContext?.disabled ?? false) || isLoading });
</script>

{#if tooltip}
    <Tooltip
        class={classes}
        {disableRipple}
        {...props as any}
        aria-label={ariaLabel ?? tooltip}
        {...attributes}
        content={tooltip}
    >
        {#snippet child({ props })}
            <ButtonBase {...props}>
                {@render start?.()}

                {#if children && (!isLoading || !isIconOnly)}
                    {@render children()}
                {/if}

                {@render end?.()}
            </ButtonBase>
        {/snippet}
    </Tooltip>
{:else}
    <ButtonBase class={classes} aria-label={ariaLabel} {disableRipple} {...attributes} {...props}>
        {@render start?.()}

        {#if children && (!isLoading || !isIconOnly)}
            {@render children()}
        {/if}

        {@render end?.()}
    </ButtonBase>
{/if}
