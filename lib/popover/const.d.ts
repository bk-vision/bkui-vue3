export declare const enum EMIT_EVENTS {
    SHOW = "show",
    HIDE = "hide",
    CLICK_OUTSIDE = "clickoutside",
    CONTENT_MOUSEENTER = "contentMouseenter",
    CONTENT_MOUSELEAVE = "contentMouseleave",
    STOP_HIDE = "stopHide"
}
export declare const EMIT_EVENT_TYPES: {
    show: (..._args: any[]) => boolean;
    hide: (..._args: any[]) => boolean;
    clickoutside: (..._args: any[]) => boolean;
    contentMouseenter: (..._args: any[]) => boolean;
    contentMouseleave: (..._args: any[]) => boolean;
    stopHide: (..._args: any[]) => boolean;
};
