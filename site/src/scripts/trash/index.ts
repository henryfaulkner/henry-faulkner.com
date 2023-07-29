import { throttle, debounce, generateClientRects, axis, type Rect } from "../utils";

function RunScript(){
    let rootEl = document.querySelector("[data-perspective-group]") as HTMLElement;
    let els = Array.from(rootEl.querySelectorAll("[data-perspective]")) as HTMLElement[];

    let len = els.length;
    let elAttrs = els.map(el => el.getAttribute("data-perspective"));
    let elClientRects = generateClientRects(els);

    function perspectiveCatagory(attr: string, e: MouseEvent, clientRect: Rect, yscale: number) {
        switch (attr) {
            case "header":
                return {
                    x: axis("max", "x", 10, -20)(e, clientRect),
                    y: `${- yscale * (clientRect.height / 2)}px`,
                };

            case "image":
                return {
                    x: axis("min", "x", 5, (clientRect.width / 6) - 40)(e, clientRect),
                    y: `calc(-50% + ${yscale * (clientRect.height / 6)}px)`,
                };

            case "scroll-down":
                return {
                    x: axis("min", "x", 10, -10)(e, clientRect),
                    y: axis("min", "y", 35, 2)(e, clientRect)
                };

            case "social-links":
                return {
                    x: axis("min", "x", 10, -5)(e, clientRect),
                    y: `${- yscale * clientRect.height * 0.0125}px`,
                };
        }

        return {
            x: axis()(e, clientRect),
            y: axis()(e, clientRect)
        };
    };

    let height = window.innerHeight;
    let registered = false;
    function onMousemove(e: MouseEvent) {
        if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
            window.matchMedia("(pointer: coarse)").matches
        ) return;

        let yscale = (e.clientY / height) - 0.5;
        for (let i = 0; i < len; i++) {
            let el = els[i];
            let clientRect = elClientRects[i];
            let name = elAttrs[i];

            let { x, y } = perspectiveCatagory(name, e, clientRect, yscale);
            el.style.transform = `translate(${x}, ${y})`;
        }
    }

    function registerEvent() {
        if (!registered) {
            rootEl?.addEventListener("mousemove", onMousemove, { passive: true });
        }
        registered = true;
    }

    registerEvent();
    window.addEventListener("resize", debounce(() => {
        height = window.innerHeight;
        elClientRects = generateClientRects(els);
    }, 1000), { passive: true });

    setTimeout(() => {
        const html = document.querySelector("html");
        html.classList.add("dom-loaded");
    }, 500);
}
  
export {RunScript}