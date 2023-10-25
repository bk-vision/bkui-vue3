import ButtonGroup from './button-group';
declare const BkButton: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            title: string;
            text: boolean;
            disabled: boolean;
            size: "" | "small" | "large";
            icon: string;
            outline: boolean;
            loading: boolean;
            iconRight: string;
            loadingMode: "default" | "spin";
            selected: boolean;
            nativeType: "button" | "reset" | "submit";
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
            hoverTheme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
            size: {
                type: import("vue").PropType<"" | "small" | "large">;
                default: "";
            };
            title: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            icon: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            iconRight: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            loading: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            loadingMode: {
                type: import("vue").PropType<"default" | "spin">;
                default: string;
            };
            outline: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            text: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            selected: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            nativeType: {
                type: ((new (...args: any[]) => ("button" | "reset" | "submit") & {}) | (() => "button" | "reset" | "submit")) | ((new (...args: any[]) => ("button" | "reset" | "submit") & {}) | (() => "button" | "reset" | "submit"))[];
                default: string;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
            onMouseover?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "title" | "text" | "disabled" | "size" | "icon" | "outline" | "loading" | "iconRight" | "loadingMode" | "selected" | "nativeType">;
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
        $emit: (event: "click" | "mouseover", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
            hoverTheme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
            size: {
                type: import("vue").PropType<"" | "small" | "large">;
                default: "";
            };
            title: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            icon: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            iconRight: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            loading: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            loadingMode: {
                type: import("vue").PropType<"default" | "spin">;
                default: string;
            };
            outline: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            text: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            selected: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            nativeType: {
                type: ((new (...args: any[]) => ("button" | "reset" | "submit") & {}) | (() => "button" | "reset" | "submit")) | ((new (...args: any[]) => ("button" | "reset" | "submit") & {}) | (() => "button" | "reset" | "submit"))[];
                default: string;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
            onMouseover?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "mouseover")[], string, {
            title: string;
            text: boolean;
            disabled: boolean;
            size: "" | "small" | "large";
            icon: string;
            outline: boolean;
            loading: boolean;
            iconRight: string;
            loadingMode: "default" | "spin";
            selected: boolean;
            nativeType: "button" | "reset" | "submit";
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
        theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
        hoverTheme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
        size: {
            type: import("vue").PropType<"" | "small" | "large">;
            default: "";
        };
        title: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        icon: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        iconRight: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        loading: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        loadingMode: {
            type: import("vue").PropType<"default" | "spin">;
            default: string;
        };
        outline: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        text: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        selected: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        nativeType: {
            type: ((new (...args: any[]) => ("button" | "reset" | "submit") & {}) | (() => "button" | "reset" | "submit")) | ((new (...args: any[]) => ("button" | "reset" | "submit") & {}) | (() => "button" | "reset" | "submit"))[];
            default: string;
        };
    }>> & {
        onClick?: (...args: any[]) => any;
        onMouseover?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
    hoverTheme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
    size: {
        type: import("vue").PropType<"" | "small" | "large">;
        default: "";
    };
    title: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    icon: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    iconRight: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    loading: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    loadingMode: {
        type: import("vue").PropType<"default" | "spin">;
        default: string;
    };
    outline: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    text: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    selected: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    nativeType: {
        type: ((new (...args: any[]) => ("button" | "reset" | "submit") & {}) | (() => "button" | "reset" | "submit")) | ((new (...args: any[]) => ("button" | "reset" | "submit") & {}) | (() => "button" | "reset" | "submit"))[];
        default: string;
    };
}>> & {
    onClick?: (...args: any[]) => any;
    onMouseover?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "mouseover")[], "click" | "mouseover", {
    title: string;
    text: boolean;
    disabled: boolean;
    size: "" | "small" | "large";
    icon: string;
    outline: boolean;
    loading: boolean;
    iconRight: string;
    loadingMode: "default" | "spin";
    selected: boolean;
    nativeType: "button" | "reset" | "submit";
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin & Readonly<{
    ButtonGroup: import("vue").DefineComponent<{
        size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    }>>, {}>;
}>;
export default BkButton;
export { ButtonGroup as BkButtonGroup, BkButton, };
