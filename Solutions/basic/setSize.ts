import type { CSSProperties } from "../types";

export const setSize = (element: HTMLElement, size: Pick<CSSProperties, "width" | "height">): void => {
    element.setAttribute("width", (size.width ?? 0) + "px");
    element.setAttribute("height", (size.height ?? 0) + "px");
};
