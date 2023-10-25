declare const BkResizeLayout: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "placement" | "disabled" | "border" | "max" | "min" | "collapsible" | "immediate" | "triggerWidth" | "triggerOffset" | "initialDivide" | "autoMinimize">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: "before-resize" | "resizing" | "after-resize" | "collapse-change", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("before-resize" | "resizing" | "after-resize" | "collapse-change")[], string, {
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
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
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
    } & import("vue").ShallowUnwrapRef<{
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
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("before-resize" | "resizing" | "after-resize" | "collapse-change")[], "before-resize" | "resizing" | "after-resize" | "collapse-change", {
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
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkResizeLayout;
