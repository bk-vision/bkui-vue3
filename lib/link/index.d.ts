declare const BkLink: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            target: string;
            disabled: boolean;
            theme: "success" | "warning" | "danger" | "default" | "primary";
            underline: boolean;
            href: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "default" | "primary"> & {
                default: "success" | "warning" | "danger" | "default" | "primary";
            };
            href: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            underline: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            target: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "target" | "disabled" | "theme" | "underline" | "href">;
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
        $emit: (event: "click", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "default" | "primary"> & {
                default: "success" | "warning" | "danger" | "default" | "primary";
            };
            href: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            underline: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            target: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
        }, {
            handleClick: (event: Event) => boolean;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], string, {
            target: string;
            disabled: boolean;
            theme: "success" | "warning" | "danger" | "default" | "primary";
            underline: boolean;
            href: string;
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
        theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "default" | "primary"> & {
            default: "success" | "warning" | "danger" | "default" | "primary";
        };
        href: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        underline: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        target: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
    }>> & {
        onClick?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        handleClick: (event: Event) => boolean;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "default" | "primary"> & {
        default: "success" | "warning" | "danger" | "default" | "primary";
    };
    href: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    underline: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    target: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
}>> & {
    onClick?: (...args: any[]) => any;
}, {
    handleClick: (event: Event) => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", {
    target: string;
    disabled: boolean;
    theme: "success" | "warning" | "danger" | "default" | "primary";
    underline: boolean;
    href: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkLink;
