import { throttle, debounce, generateClientRects, axis } from "./utils";
function RunScript() {
    let rootEl = document.querySelector("[data-perspective-group]");
    let els = Array.from(rootEl.querySelectorAll("[data-perspective]"));
    let len = els.length;
    let headerEl;
    let elAttrs = els.map(el => {
        const attr = el.getAttribute("data-perspective");
        if(attr === 'header') headerEl = el;
        return attr;
    });
    let elClientRects = generateClientRects(els);
    setInitialLocations();
    function perspectiveCatagory(attr, e, clientRect, yscale) {
        switch (attr) {
            case "header":
                return {
                    x: axis("max", "x", 10, -20)(e, clientRect),
                    y: `${-yscale * (clientRect.height / 2)}px`,
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
                    y: `${-yscale * clientRect.height * 0.0125}px`,
                };
        }
        return {
            x: axis()(e, clientRect),
            y: axis()(e, clientRect)
        };
    };
    let height = window.innerHeight;
    let registered = false;
    function onMousemove(e) {
        if(window.innerWidth < 1080) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
            window.matchMedia("(pointer: coarse)").matches)
            return;
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
        if(window.innerWidth < 1080 && headerEl !== null) 
            headerEl.style.transform = 'none';
    }, 200), { passive: true });
    setTimeout(() => {
        const html = document.querySelector("html");
        html.classList.add("dom-loaded");
    }, 500);
    function setInitialLocations() {
        for(let i = 0; i < len; i++) {
            switch (els[i].getAttribute("data-perspective")) {
                case "header":
                    els[i].style.transform = `translate(100px, 0px)`;
                    break;
                case "image":
                    els[i].style.transform = `translate(-200px, -150px)`;
                    break
            }
        }
    }
}
export { RunScript };
//# sourceMappingURL=index.js.map