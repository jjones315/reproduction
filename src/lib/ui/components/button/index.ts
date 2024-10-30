import { focusVisibleClasses, colorVariants } from "../../theme";
import { tv, type VariantProps } from "@nextui-org/theme";
import { type Button } from "bits-ui";
import type { Snippet } from "svelte";
import { getContext, setContext } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export { default as Button } from "./Button.svelte";
export { default as ButtonBase } from "./ButtonBase.svelte";

export const buttonVariants = tv({
    base: [
        "group relative z-0 box-border inline-flex min-w-max select-none appearance-none items-center justify-center overflow-hidden whitespace-nowrap font-normal subpixel-antialiased outline-none tap-highlight-transparent",
        ...focusVisibleClasses,
    ],
    variants: {
        variant: {
            solid: "",
            bordered: "border-medium bg-transparent",
            light: "bg-transparent",
            flat: "",
            faded: "border-medium",
            shadow: "",
            ghost: "border-medium bg-transparent",
        },
        size: {
            sm: "h-8 min-w-16 gap-2 rounded-small px-3 text-tiny",
            md: "h-10 min-w-20 gap-2 rounded-medium px-4 text-small",
            lg: "h-12 min-w-24 gap-3 rounded-large px-6 text-medium",
        },
        color: {
            default: "",
            primary: "",
            secondary: "",
            success: "",
            warning: "",
            danger: "",
        },
        radius: {
            none: "rounded-none",
            sm: "rounded-small",
            md: "rounded-medium",
            lg: "rounded-large",
            full: "rounded-full",
        },
        fullWidth: {
            true: "w-full",
        },
        disabled: {
            true: "pointer-events-none opacity-disabled",
        },
        isInGroup: {
            true: "[&:not(:first-child):not(:last-child)]:rounded-none",
        },
        isIconOnly: {
            true: "!gap-0 px-0",
            false: "[&>svg]:max-w-[theme(spacing.8)]",
        },
        disableAnimation: {
            true: "!transition-none",
            false: "transition-transform-colors-opacity motion-reduce:transition-none",
        },
    },
    defaultVariants: {
        size: "md",
        variant: "solid",
        color: "default",
        fullWidth: false,
        disabled: false,
        isInGroup: false,
        disableAnimation: false,
    },
    compoundVariants: [
        {
            disableAnimation: false,
            isInGroup: false,
            class: "focus-within:scale-[0.97] focus:scale-[0.97] active:scale-[0.97]",
        },

        // solid / color
        {
            variant: "solid",
            color: "default",
            class: colorVariants.solid.default,
        },
        {
            variant: "solid",
            color: "primary",
            class: colorVariants.solid.primary,
        },
        {
            variant: "solid",
            color: "secondary",
            class: colorVariants.solid.secondary,
        },
        {
            variant: "solid",
            color: "success",
            class: colorVariants.solid.success,
        },
        {
            variant: "solid",
            color: "warning",
            class: colorVariants.solid.warning,
        },
        {
            variant: "solid",
            color: "danger",
            class: colorVariants.solid.danger,
        },
        // shadow / color
        {
            variant: "shadow",
            color: "default",
            class: colorVariants.shadow.default,
        },
        {
            variant: "shadow",
            color: "primary",
            class: colorVariants.shadow.primary,
        },
        {
            variant: "shadow",
            color: "secondary",
            class: colorVariants.shadow.secondary,
        },
        {
            variant: "shadow",
            color: "success",
            class: colorVariants.shadow.success,
        },
        {
            variant: "shadow",
            color: "warning",
            class: colorVariants.shadow.warning,
        },
        {
            variant: "shadow",
            color: "danger",
            class: colorVariants.shadow.danger,
        },
        // bordered / color
        {
            variant: "bordered",
            color: "default",
            class: colorVariants.bordered.default,
        },
        {
            variant: "bordered",
            color: "primary",
            class: colorVariants.bordered.primary,
        },
        {
            variant: "bordered",
            color: "secondary",
            class: colorVariants.bordered.secondary,
        },
        {
            variant: "bordered",
            color: "success",
            class: colorVariants.bordered.success,
        },
        {
            variant: "bordered",
            color: "warning",
            class: colorVariants.bordered.warning,
        },
        {
            variant: "bordered",
            color: "danger",
            class: colorVariants.bordered.danger,
        },
        // flat / color
        {
            variant: "flat",
            color: "default",
            class: colorVariants.flat.default,
        },
        {
            variant: "flat",
            color: "primary",
            class: colorVariants.flat.primary,
        },
        {
            variant: "flat",
            color: "secondary",
            class: colorVariants.flat.secondary,
        },
        {
            variant: "flat",
            color: "success",
            class: colorVariants.flat.success,
        },
        {
            variant: "flat",
            color: "warning",
            class: colorVariants.flat.warning,
        },
        {
            variant: "flat",
            color: "danger",
            class: colorVariants.flat.danger,
        },
        // faded / color
        {
            variant: "faded",
            color: "default",
            class: colorVariants.faded.default,
        },
        {
            variant: "faded",
            color: "primary",
            class: colorVariants.faded.primary,
        },
        {
            variant: "faded",
            color: "secondary",
            class: colorVariants.faded.secondary,
        },
        {
            variant: "faded",
            color: "success",
            class: colorVariants.faded.success,
        },
        {
            variant: "faded",
            color: "warning",
            class: colorVariants.faded.warning,
        },
        {
            variant: "faded",
            color: "danger",
            class: colorVariants.faded.danger,
        },
        // light / color
        {
            variant: "light",
            color: "default",
            class: [colorVariants.light.default, "hover:bg-default/40"],
        },
        {
            variant: "light",
            color: "primary",
            class: [colorVariants.light.primary, "hover:bg-primary/20"],
        },
        {
            variant: "light",
            color: "secondary",
            class: [colorVariants.light.secondary, "hover:bg-secondary/20"],
        },
        {
            variant: "light",
            color: "success",
            class: [colorVariants.light.success, "hover:bg-success/20"],
        },
        {
            variant: "light",
            color: "warning",
            class: [colorVariants.light.warning, "hover:bg-warning/20"],
        },
        {
            variant: "light",
            color: "danger",
            class: [colorVariants.light.danger, "hover:bg-danger/20"],
        },
        // ghost / color
        {
            variant: "ghost",
            color: "default",
            class: colorVariants.ghost.default,
        },
        {
            variant: "ghost",
            color: "primary",
            class: colorVariants.ghost.primary,
        },
        {
            variant: "ghost",
            color: "secondary",
            class: colorVariants.ghost.secondary,
        },
        {
            variant: "ghost",
            color: "success",
            class: colorVariants.ghost.success,
        },
        {
            variant: "ghost",
            color: "warning",
            class: colorVariants.ghost.warning,
        },
        {
            variant: "ghost",
            color: "danger",
            class: colorVariants.ghost.danger,
        },
        // isInGroup / radius / size <-- radius not provided
        {
            isInGroup: true,
            class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
        },
        {
            isInGroup: true,
            size: "sm",
            class: "rounded-none first:rounded-s-small last:rounded-e-small",
        },
        {
            isInGroup: true,
            size: "md",
            class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
        },
        {
            isInGroup: true,
            size: "lg",
            class: "rounded-none first:rounded-s-large last:rounded-e-large",
        },
        {
            isInGroup: true,
            isRounded: true,
            class: "rounded-none first:rounded-s-full last:rounded-e-full",
        },
        // isInGroup / radius <-- radius provided
        {
            isInGroup: true,
            radius: "none",
            class: "rounded-none first:rounded-s-none last:rounded-e-none",
        },
        {
            isInGroup: true,
            radius: "sm",
            class: "rounded-none first:rounded-s-small last:rounded-e-small",
        },
        {
            isInGroup: true,
            radius: "md",
            class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
        },
        {
            isInGroup: true,
            radius: "lg",
            class: "rounded-none first:rounded-s-large last:rounded-e-large",
        },
        {
            isInGroup: true,
            radius: "full",
            class: "rounded-none first:rounded-s-full last:rounded-e-full",
        },
        {
            isIconOnly: true,
            size: "sm",
            class: "size-8 min-w-8",
        },
        {
            isIconOnly: true,
            size: "md",
            class: "size-10 min-w-10",
        },
        {
            isIconOnly: true,
            size: "lg",
            class: "size-12 min-w-12",
        },
        // variant / hover
        {
            variant: ["solid", "faded", "flat", "bordered", "shadow"],
            class: "hover:opacity-hover",
        },
    ],
});

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export type ButtonProps = BaseButtonProps &
    ButtonVariantProps & {
        disableRipple?: boolean;
        isLoading?: boolean;
        start?: Snippet;
        end?: Snippet;
    } & (
        | {
              isIconOnly: true;
              tooltip: Snippet | string | undefined;
          }
        | {
              isIconOnly?: false;
              tooltip?: Snippet | string;
          }
    );

export type ButtonGroupProps = ButtonGroupContext & HTMLAttributes<HTMLDivElement>;

export type BaseButtonProps = Button.RootProps & {
    as?: "a" | "button" | "span";
    el?: HTMLAnchorElement | HTMLButtonElement | HTMLSpanElement;
    disableRipple?: boolean;
};

export type ButtonGroupContext = {
    size?: ButtonProps["size"];
    color?: ButtonProps["color"];
    variant?: ButtonProps["variant"];
    radius?: ButtonProps["radius"];
    disabled?: ButtonProps["disabled"];
    disableAnimation?: ButtonProps["disableAnimation"];
    disableRipple?: ButtonProps["disableRipple"];
    isIconOnly?: ButtonProps["isIconOnly"];
    fullWidth?: boolean;
};

const COMPONENT_BUTTON_GROUP_CONTEXT_KEY = Symbol("$components/button/group");

export function createButtonGroupContext(init: ButtonGroupContext) {
    return setContext(COMPONENT_BUTTON_GROUP_CONTEXT_KEY, init);
}

export function useButtonGroupContext() {
    return getContext<ButtonGroupContext | undefined>(COMPONENT_BUTTON_GROUP_CONTEXT_KEY);
}
