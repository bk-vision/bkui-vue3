declare const BkColorPicker: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            transfer: boolean;
            disabled: boolean;
            size: "" | "small" | "large";
            extCls: string;
            readonly: boolean;
            modelValue: string;
            withValidate: boolean;
            recommend: boolean | unknown[];
            showValue: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            modelValue: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            readonly: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            transfer: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            size: import("vue-types").VueTypeDef<"" | "small" | "large"> & {
                default: "" | "small" | "large";
            };
            showValue: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            recommend: import("vue-types").VueTypeDef<boolean | unknown[]> & {
                default: boolean | (() => unknown[]);
            };
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "transfer" | "disabled" | "size" | "extCls" | "readonly" | "modelValue" | "withValidate" | "recommend" | "showValue">;
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
        $emit: (event: "change" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            readonly: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            transfer: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            size: import("vue-types").VueTypeDef<"" | "small" | "large"> & {
                default: "" | "small" | "large";
            };
            showValue: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            recommend: import("vue-types").VueTypeDef<boolean | unknown[]> & {
                default: boolean | (() => unknown[]);
            };
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
            transfer: boolean;
            disabled: boolean;
            size: "" | "small" | "large";
            extCls: string;
            readonly: boolean;
            modelValue: string;
            withValidate: boolean;
            recommend: boolean | unknown[];
            showValue: boolean;
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
        modelValue: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        readonly: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        transfer: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        size: import("vue-types").VueTypeDef<"" | "small" | "large"> & {
            default: "" | "small" | "large";
        };
        showValue: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        recommend: import("vue-types").VueTypeDef<boolean | unknown[]> & {
            default: boolean | (() => unknown[]);
        };
        extCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
    }>> & {
        onChange?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    readonly: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    transfer: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    size: import("vue-types").VueTypeDef<"" | "small" | "large"> & {
        default: "" | "small" | "large";
    };
    showValue: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    recommend: import("vue-types").VueTypeDef<boolean | unknown[]> & {
        default: boolean | (() => unknown[]);
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
    transfer: boolean;
    disabled: boolean;
    size: "" | "small" | "large";
    extCls: string;
    readonly: boolean;
    modelValue: string;
    withValidate: boolean;
    recommend: boolean | unknown[];
    showValue: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkColorPicker;
