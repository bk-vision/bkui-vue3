declare const _default: import("vue").DefineComponent<{
    placement: import("vue-types").VueTypeDef<"top" | "bottom" | "right" | "left"> & {
        default: "top" | "bottom" | "right" | "left";
    };
    min: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    max: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    triggerWidth: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    triggerOffset: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    initialDivide: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    immediate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    collapsible: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    autoMinimize: import("vue-types").VueTypeDef<number | boolean> & {
        default: number | boolean;
    };
    border: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}, {
    collapsed: import("vue").Ref<boolean>;
    asideContentVisible: import("vue").Ref<boolean>;
    minimized: import("vue").Ref<boolean>;
    limitMax: any;
    state: any;
    vertical: import("vue").ComputedRef<boolean>;
    cssPropKey: import("vue").ComputedRef<"height" | "width">;
    bkResizeLayoutRef: import("vue").Ref<HTMLElement>;
    resizeProxyRef: import("vue").Ref<HTMLElement>;
    resizeMaskRef: import("vue").Ref<HTMLElement>;
    asideRef: import("vue").Ref<HTMLElement>;
    triggerStyle: import("vue").ComputedRef<{
        [x: string]: string;
    }>;
    asideStyle: import("vue").ComputedRef<{
        [x: string]: string;
    }>;
    handleMousedown: (event: any) => void;
    setCollapse: (collapse: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("before-resize" | "resizing" | "after-resize" | "collapse-change")[], "before-resize" | "resizing" | "after-resize" | "collapse-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    placement: import("vue-types").VueTypeDef<"top" | "bottom" | "right" | "left"> & {
        default: "top" | "bottom" | "right" | "left";
    };
    min: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    max: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    triggerWidth: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    triggerOffset: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    initialDivide: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    immediate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    collapsible: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    autoMinimize: import("vue-types").VueTypeDef<number | boolean> & {
        default: number | boolean;
    };
    border: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>> & {
    "onBefore-resize"?: (...args: any[]) => any;
    onResizing?: (...args: any[]) => any;
    "onAfter-resize"?: (...args: any[]) => any;
    "onCollapse-change"?: (...args: any[]) => any;
}, {
    placement: "top" | "bottom" | "right" | "left";
    disabled: boolean;
    border: boolean;
    max: number;
    min: number;
    collapsible: boolean;
    immediate: boolean;
    triggerWidth: number;
    triggerOffset: number;
    initialDivide: string | number;
    autoMinimize: number | boolean;
}>;
export default _default;
