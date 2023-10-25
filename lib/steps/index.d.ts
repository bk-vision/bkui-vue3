declare const BkSteps: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            text: boolean;
            direction: "horizontal" | "vertical";
            lineType: "dashed" | "solid";
            steps: unknown[];
            theme: "success" | "warning" | "danger" | "primary";
            extCls: string;
            beforeChange: (...args: any[]) => any;
            controllable: boolean;
            status: "" | "error" | "loading";
            curStep: number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
                default: "success" | "warning" | "danger" | "primary";
            };
            size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
            curStep: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            controllable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            direction: import("vue-types").VueTypeDef<"horizontal" | "vertical"> & {
                default: "horizontal" | "vertical";
            };
            status: import("vue-types").VueTypeDef<"" | "error" | "loading"> & {
                default: "" | "error" | "loading";
            };
            lineType: import("vue-types").VueTypeDef<"dashed" | "solid"> & {
                default: "dashed" | "solid";
            };
            text: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            steps: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            } & {
                default: () => unknown[];
            };
            beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
                default: (...args: any[]) => any;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
            "onUpdate:curStep"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "text" | "direction" | "lineType" | "steps" | "theme" | "extCls" | "beforeChange" | "controllable" | "status" | "curStep">;
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
        $emit: (event: "click" | "update:curStep", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
                default: "success" | "warning" | "danger" | "primary";
            };
            size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
            curStep: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            controllable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            direction: import("vue-types").VueTypeDef<"horizontal" | "vertical"> & {
                default: "horizontal" | "vertical";
            };
            status: import("vue-types").VueTypeDef<"" | "error" | "loading"> & {
                default: "" | "error" | "loading";
            };
            lineType: import("vue-types").VueTypeDef<"dashed" | "solid"> & {
                default: "dashed" | "solid";
            };
            text: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            steps: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            } & {
                default: () => unknown[];
            };
            beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
                default: (...args: any[]) => any;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
            "onUpdate:curStep"?: (...args: any[]) => any;
        }, {
            defaultSteps: import("vue").Ref<any[]>;
            jumpTo: (index: any) => Promise<void>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:curStep")[], string, {
            text: boolean;
            direction: "horizontal" | "vertical";
            lineType: "dashed" | "solid";
            steps: unknown[];
            theme: "success" | "warning" | "danger" | "primary";
            extCls: string;
            beforeChange: (...args: any[]) => any;
            controllable: boolean;
            status: "" | "error" | "loading";
            curStep: number;
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
        theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
            default: "success" | "warning" | "danger" | "primary";
        };
        size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
        curStep: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        controllable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        direction: import("vue-types").VueTypeDef<"horizontal" | "vertical"> & {
            default: "horizontal" | "vertical";
        };
        status: import("vue-types").VueTypeDef<"" | "error" | "loading"> & {
            default: "" | "error" | "loading";
        };
        lineType: import("vue-types").VueTypeDef<"dashed" | "solid"> & {
            default: "dashed" | "solid";
        };
        text: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        extCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        steps: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        } & {
            default: () => unknown[];
        };
        beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
    }>> & {
        onClick?: (...args: any[]) => any;
        "onUpdate:curStep"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        defaultSteps: import("vue").Ref<any[]>;
        jumpTo: (index: any) => Promise<void>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary"> & {
        default: "success" | "warning" | "danger" | "primary";
    };
    size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    curStep: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    controllable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    direction: import("vue-types").VueTypeDef<"horizontal" | "vertical"> & {
        default: "horizontal" | "vertical";
    };
    status: import("vue-types").VueTypeDef<"" | "error" | "loading"> & {
        default: "" | "error" | "loading";
    };
    lineType: import("vue-types").VueTypeDef<"dashed" | "solid"> & {
        default: "dashed" | "solid";
    };
    text: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    steps: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
}>> & {
    onClick?: (...args: any[]) => any;
    "onUpdate:curStep"?: (...args: any[]) => any;
}, {
    defaultSteps: import("vue").Ref<any[]>;
    jumpTo: (index: any) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:curStep")[], "click" | "update:curStep", {
    text: boolean;
    direction: "horizontal" | "vertical";
    lineType: "dashed" | "solid";
    steps: unknown[];
    theme: "success" | "warning" | "danger" | "primary";
    extCls: string;
    beforeChange: (...args: any[]) => any;
    controllable: boolean;
    status: "" | "error" | "loading";
    curStep: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkSteps;
