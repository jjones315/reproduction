import type { Tooltip } from "bits-ui";
import type { Snippet } from "svelte";

export { default as Tooltip } from "./Tooltip.svelte";

export type TooltipProps = Tooltip.ProviderProps &
    Tooltip.RootProps &
    Tooltip.TriggerProps & {
        portal?: Tooltip.PortalProps["to"];
        content?: Snippet | string;
        class?: string;
        triggerRef?: HTMLElement | null;
        classes?: {
            trigger?: string;
            content?: string;
        };
        side?: Tooltip.ContentProps["side"];
        sideOffset?: Tooltip.ContentProps["sideOffset"];
        contentProps?: Omit<Tooltip.ContentProps, "side" | "sideOffset">;
    };
