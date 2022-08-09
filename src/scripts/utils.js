export const generateClientRects = (arr) => {
    return arr.map(elem => {
        let { top, left, height, width, bottom, right, x, y } = elem.getBoundingClientRect();
        return {
            height,
            width,
            bottom, right, x, y,
            top: top + window.scrollY,
            left: left + window.scrollX
        };
    });
};
export const axis = (type = "no-limit", axis = "x", rate = 20, limit = 0) => {
    return (e, clientRect) => {
        let mouseAxis = e[`client${axis?.toUpperCase()}`];
        let elRectAxis = clientRect[axis?.toLowerCase()];
        let value = (mouseAxis - elRectAxis) / rate;
        return (type == "no-limit" ? value : Math[type](value, limit)) + `px`;
    };
};
/**
 * throttle function that catches and triggers last invocation
 * use time to see if there is a last invocation
 */
export const throttle = (func, limit = 300) => {
    let lastFunc;
    let lastRan;
    return function (...args) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        }
        else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if (Date.now() - lastRan >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
};
/**
 * debounce function
 * use timer to maintain internal reference of timeout to clear
 */
export const debounce = (func, timeout = 300) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
};
//# sourceMappingURL=utils.js.map