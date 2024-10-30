<script lang="ts">
    import { Tooltip } from "bits-ui";
    import type { TooltipProps } from ".";

    let {
        delayDuration = 250,
        skipDelayDuration,
        disableHoverableContent,
        disableCloseOnTriggerClick,
        disabled,
        ignoreNonKeyboardFocus,

        // root
        open = $bindable(false),
        onOpenChange,

        // content
        content,
        contentProps,
        side = "bottom",
        sideOffset = 8,

        // trigger
        triggerRef = $bindable(null),
        portal = "html",
        class: className,
        classes,
        ...props
    }: TooltipProps = $props();
</script>

<Tooltip.Provider
    {delayDuration}
    {disableCloseOnTriggerClick}
    {disableHoverableContent}
    {disabled}
    {ignoreNonKeyboardFocus}
    {skipDelayDuration}
>
    <Tooltip.Root
        {delayDuration}
        {disableCloseOnTriggerClick}
        {disableHoverableContent}
        {disabled}
        {ignoreNonKeyboardFocus}
        {onOpenChange}
        bind:open
    >
        <Tooltip.Trigger
            class="outline-none {className} {classes?.trigger}"
            tabindex={-1}
            bind:ref={triggerRef}
            {...props}
        />
        {#if content}
            <Tooltip.Portal to={portal}>
                <Tooltip.Content {...contentProps} {side} {sideOffset}>
                    {#snippet child({ props })}
                        <div
                            {...props}
                            class="z-[10000] overflow-hidden rounded-lg border bg-content1/80 p-2 text-sm text-foreground shadow-md backdrop-blur-sm"
                        >
                            {#if typeof content === "string"}
                                {content}
                            {:else}
                                {@render content?.()}
                            {/if}
                        </div>
                    {/snippet}
                </Tooltip.Content>
            </Tooltip.Portal>
        {/if}
    </Tooltip.Root>
</Tooltip.Provider>
