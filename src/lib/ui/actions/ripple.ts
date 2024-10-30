import { onMount } from "svelte";

const IN_EVENTS = ["pointerdown", "touchstart"];
const OUT_EVENTS = ["pointerup", "mouseleave", "dragleave", "touchmove", "touchend", "touchcancel"];

const ATTR_NAME = "svelte-ripple";
const ATTR_CENTER_NAME = "ripple-center";

export interface RippleOptions {
    center?: boolean;
    color?: string;
    duration?: number;
    maxRadius?: number;
    disabled?: boolean;
}

const addEvent = (element: HTMLElement, event: string, callback: (...args: any[]) => void) => {
    element.addEventListener(event, callback);
};

const removeEvent = (element: HTMLElement, event: string, callback: (...args: any[]) => void) => {
    element.removeEventListener(event, callback);
};

const findFurthestPoint = (
    clickPointX: number,
    elementWidth: number,
    offsetX: number,
    clickPointY: number,
    elementHeight: number,
    offsetY: number
) => {
    const x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth;
    const y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight;
    const d = Math.hypot(x - (clickPointX - offsetX), y - (clickPointY - offsetY));

    return d;
};

function ripple(element: HTMLElement, options?: RippleOptions) {
    const addClassIfMissing = () => {
        if (!element.getAttribute(ATTR_NAME)) {
            element.setAttribute(ATTR_NAME, "");
        }

        if (options?.center) {
            element.setAttribute(ATTR_CENTER_NAME, "");
        } else {
            element.removeAttribute(ATTR_CENTER_NAME);
        }
    };

    onMount(() => {
        addClassIfMissing();
    });

    let maximumRadius = 0;

    const setOptions = (options?: RippleOptions) => {
        if (options?.color) {
            element.style.setProperty("--ripple-color", options.color);
        }
        if (options?.duration) {
            element.style.setProperty("--ripple-duration", options.duration + "s");
        }
        if (options?.maxRadius) {
            maximumRadius = options.maxRadius;
        }
    };

    setOptions(options);

    const createRipple = (event: PointerEvent) => {
        if (options?.disabled) return;

        event.stopPropagation();

        addClassIfMissing();

        const rect = element.getBoundingClientRect();
        const radius = findFurthestPoint(
            event.clientX,
            element.offsetWidth,
            rect.left,
            event.clientY,
            element.offsetHeight,
            rect.top
        );

        const ripple = document.createElement("div");
        ripple.classList.add("ripple");

        let size = radius * 2;
        let top = event.clientY - rect.top - radius;
        let left = event.clientX - rect.left - radius;

        if (maximumRadius && size > maximumRadius) {
            size = maximumRadius * 2;
            top = event.clientY - rect.top - maximumRadius;
            left = event.clientX - rect.left - maximumRadius;
        }

        ripple.style.left = left + "px";
        ripple.style.top = top + "px";

        ripple.style.width = ripple.style.height = size + "px";

        element.append(ripple);

        const removeRipple = () => {
            const timeOutDuration = options?.duration ? options.duration * 1000 : 1000;

            if (ripple !== null) {
                setTimeout(() => {
                    ripple.style.opacity = "0";
                }, timeOutDuration / 4);

                setTimeout(() => {
                    ripple.remove();
                }, timeOutDuration);
            }
        };

        for (const event of OUT_EVENTS) {
            addEvent(element, event, removeRipple);
        }
    };

    for (const event of IN_EVENTS) {
        addEvent(element, event, createRipple);
    }

    return {
        destroy: () => {
            for (const event of IN_EVENTS) {
                removeEvent(element, event, createRipple);
            }
        },
        update: (newOptions: RippleOptions) => {
            options = newOptions;

            setOptions(newOptions);
        },
    };
}

export { ripple };
