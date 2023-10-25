import { BkLoadingMode, BkLoadingSize, setDefaultIndicator } from './loading';
declare const BkLoading: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            title: string;
            zIndex: number;
            mode: "default" | "spin";
            color: string;
            size: "" | "small" | "large" | "mini";
            inline: boolean;
            opacity: number;
            loading: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            indicator: {
                type: FunctionConstructor;
            };
            loading: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            inline: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            theme: {
                type: import("vue").PropType<"success" | "warning" | "danger" | "primary" | "white">;
            };
            title: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            size: {
                type: import("vue").PropType<"" | "small" | "large" | "mini">;
                default: BkLoadingSize;
            };
            mode: {
                type: import("vue").PropType<"default" | "spin">;
                default: string;
            };
            opacity: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            color: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            zIndex: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "title" | "zIndex" | "mode" | "color" | "size" | "inline" | "opacity" | "loading">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            indicator: {
                type: FunctionConstructor;
            };
            loading: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            inline: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            theme: {
                type: import("vue").PropType<"success" | "warning" | "danger" | "primary" | "white">;
            };
            title: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            size: {
                type: import("vue").PropType<"" | "small" | "large" | "mini">;
                default: BkLoadingSize;
            };
            mode: {
                type: import("vue").PropType<"default" | "spin">;
                default: string;
            };
            opacity: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
            color: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            zIndex: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            title: string;
            zIndex: number;
            mode: "default" | "spin";
            color: string;
            size: "" | "small" | "large" | "mini";
            inline: boolean;
            opacity: number;
            loading: boolean;
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
        indicator: {
            type: FunctionConstructor;
        };
        loading: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        inline: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        theme: {
            type: import("vue").PropType<"success" | "warning" | "danger" | "primary" | "white">;
        };
        title: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        size: {
            type: import("vue").PropType<"" | "small" | "large" | "mini">;
            default: BkLoadingSize;
        };
        mode: {
            type: import("vue").PropType<"default" | "spin">;
            default: string;
        };
        opacity: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
        color: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        zIndex: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    indicator: {
        type: FunctionConstructor;
    };
    loading: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    inline: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    theme: {
        type: import("vue").PropType<"success" | "warning" | "danger" | "primary" | "white">;
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    size: {
        type: import("vue").PropType<"" | "small" | "large" | "mini">;
        default: BkLoadingSize;
    };
    mode: {
        type: import("vue").PropType<"default" | "spin">;
        default: string;
    };
    opacity: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    color: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    zIndex: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    title: string;
    zIndex: number;
    mode: "default" | "spin";
    color: string;
    size: "" | "small" | "large" | "mini";
    inline: boolean;
    opacity: number;
    loading: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin & Readonly<{
    setDefaultIndicator: typeof setDefaultIndicator;
    BkLoadingMode: typeof BkLoadingMode;
    BkLoadingSize: typeof BkLoadingSize;
}>;
export default BkLoading;
export { BkLoading, setDefaultIndicator, BkLoadingMode, BkLoadingSize, };
