declare const BkProcess: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            list: unknown[];
            extCls: string;
            displayKey: string;
            controllable: boolean;
            showSteps: boolean;
            curProcess: number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            list: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            } & {
                default: () => unknown[];
            };
            controllable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            showSteps: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            curProcess: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            displayKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
            "onUpdate:curProcess"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "list" | "extCls" | "displayKey" | "controllable" | "showSteps" | "curProcess">;
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
        $emit: (event: "click" | "update:curProcess", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            list: import("vue-types").VueTypeValidableDef<unknown[]> & {
                default: () => unknown[];
            } & {
                default: () => unknown[];
            };
            controllable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            showSteps: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            curProcess: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            displayKey: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
            "onUpdate:curProcess"?: (...args: any[]) => any;
        }, {
            defaultProcessList: import("vue").Ref<any[]>;
            paddingBottom: import("vue").Ref<number>;
            jumpTo: (index: any) => Promise<void>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:curProcess")[], string, {
            list: unknown[];
            extCls: string;
            displayKey: string;
            controllable: boolean;
            showSteps: boolean;
            curProcess: number;
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
        list: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        } & {
            default: () => unknown[];
        };
        controllable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        showSteps: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        curProcess: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        displayKey: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        extCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
    }>> & {
        onClick?: (...args: any[]) => any;
        "onUpdate:curProcess"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        defaultProcessList: import("vue").Ref<any[]>;
        paddingBottom: import("vue").Ref<number>;
        jumpTo: (index: any) => Promise<void>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    list: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    controllable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showSteps: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    curProcess: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    displayKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
}>> & {
    onClick?: (...args: any[]) => any;
    "onUpdate:curProcess"?: (...args: any[]) => any;
}, {
    defaultProcessList: import("vue").Ref<any[]>;
    paddingBottom: import("vue").Ref<number>;
    jumpTo: (index: any) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:curProcess")[], "click" | "update:curProcess", {
    list: unknown[];
    extCls: string;
    displayKey: string;
    controllable: boolean;
    showSteps: boolean;
    curProcess: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkProcess;
