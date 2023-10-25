export declare function removeClass(el: HTMLElement | Element, cls: string): void;
export declare function addClass(el: HTMLElement | Element, cls: string): void;
export declare const collapseMotion: (emit: any) => {
    css: boolean;
    onBeforeEnter: (el: any) => void;
    onEnter: (el: any) => void;
    onAfterEnter: (el: any) => void;
    onBeforeLeave: (el: any) => void;
    onLeave: (el: any) => void;
    onAfterLeave: (el: any) => void;
};
