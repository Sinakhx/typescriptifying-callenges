// suppose you have access to the type: CSSProperties which includes width & height
// (it's acutally inculded in the types.ts file)
// element is supposed to be an HTML element
// size: { width, height }

export const setSize = (element, size) => {
    element.setAttribute("width", (size.width ?? 0) + "px");
    element.setAttribute("height", (size.height ?? 0) + "px");
};
