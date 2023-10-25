declare const BkTag: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: "" | "stroke" | "filled";
            theme: "success" | "info" | "warning" | "danger";
            extCls: string;
            closable: boolean;
            radius: string;
            checked: boolean;
            checkable: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            theme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
                default: "success" | "info" | "warning" | "danger";
            };
            closable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            type: import("vue-types").VueTypeDef<"" | "stroke" | "filled"> & {
                default: "" | "stroke" | "filled";
            };
            checkable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            checked: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            radius: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            onClose?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "theme" | "extCls" | "closable" | "radius" | "checked" | "checkable">;
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
        $emit: (event: "change" | "close", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            theme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
                default: "success" | "info" | "warning" | "danger";
            };
            closable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            type: import("vue-types").VueTypeDef<"" | "stroke" | "filled"> & {
                default: "" | "stroke" | "filled";
            };
            checkable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            checked: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            radius: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            onClose?: (...args: any[]) => any;
        }, {
            wrapperCls: import("vue").ComputedRef<string>;
            wrapperStyle: import("vue").ComputedRef<{
                borderRadius: string;
            }>;
            handleClose: (e: Event) => void;
            handleClick: (e: Event) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close")[], string, {
            type: "" | "stroke" | "filled";
            theme: "success" | "info" | "warning" | "danger";
            extCls: string;
            closable: boolean;
            radius: string;
            checked: boolean;
            checkable: boolean;
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
        theme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
            default: "success" | "info" | "warning" | "danger";
        };
        closable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        type: import("vue-types").VueTypeDef<"" | "stroke" | "filled"> & {
            default: "" | "stroke" | "filled";
        };
        checkable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        checked: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        radius: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        extCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
    }>> & {
        onChange?: (...args: any[]) => any;
        onClose?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        wrapperCls: import("vue").ComputedRef<string>;
        wrapperStyle: import("vue").ComputedRef<{
            borderRadius: string;
        }>;
        handleClose: (e: Event) => void;
        handleClick: (e: Event) => void;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    theme: import("vue-types").VueTypeDef<"success" | "info" | "warning" | "danger"> & {
        default: "success" | "info" | "warning" | "danger";
    };
    closable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    type: import("vue-types").VueTypeDef<"" | "stroke" | "filled"> & {
        default: "" | "stroke" | "filled";
    };
    checkable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    checked: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    radius: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
}, {
    wrapperCls: import("vue").ComputedRef<string>;
    wrapperStyle: import("vue").ComputedRef<{
        borderRadius: string;
    }>;
    handleClose: (e: Event) => void;
    handleClick: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close")[], "change" | "close", {
    type: "" | "stroke" | "filled";
    theme: "success" | "info" | "warning" | "danger";
    extCls: string;
    closable: boolean;
    radius: string;
    checked: boolean;
    checkable: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkTag;
