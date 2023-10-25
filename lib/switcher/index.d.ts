declare const BkSwitcher: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            value: string | number | boolean;
            extCls: string;
            modelValue: string | number | boolean;
            withValidate: boolean;
            beforeChange: (...args: any[]) => any;
            showText: boolean;
            isOutline: boolean;
            onText: string;
            offText: string;
            isSquare: boolean;
            trueValue: string | number | boolean;
            falseValue: string | number | boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
            size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            showText: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            isOutline: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            onText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            offText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            isSquare: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
                default: (...args: any[]) => any;
            } & {
                default: (...args: any[]) => any;
            };
            trueValue: import("vue-types").VueTypeDef<string | number | boolean> & {
                default: string | number | boolean;
            };
            falseValue: import("vue-types").VueTypeDef<string | number | boolean> & {
                default: string | number | boolean;
            };
            value: import("vue-types").VueTypeDef<string | number | boolean> & {
                default: string | number | boolean;
            };
            modelValue: import("vue-types").VueTypeDef<string | number | boolean> & {
                default: string | number | boolean;
            };
            withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "disabled" | "value" | "extCls" | "modelValue" | "withValidate" | "beforeChange" | "showText" | "isOutline" | "onText" | "offText" | "isSquare" | "trueValue" | "falseValue">;
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
            theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
            size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            showText: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            isOutline: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            onText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            offText: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            isSquare: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            extCls: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
                default: (...args: any[]) => any;
            } & {
                default: (...args: any[]) => any;
            };
            trueValue: import("vue-types").VueTypeDef<string | number | boolean> & {
                default: string | number | boolean;
            };
            falseValue: import("vue-types").VueTypeDef<string | number | boolean> & {
                default: string | number | boolean;
            };
            value: import("vue-types").VueTypeDef<string | number | boolean> & {
                default: string | number | boolean;
            };
            modelValue: import("vue-types").VueTypeDef<string | number | boolean> & {
                default: string | number | boolean;
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
            disabled: boolean;
            value: string | number | boolean;
            extCls: string;
            modelValue: string | number | boolean;
            withValidate: boolean;
            beforeChange: (...args: any[]) => any;
            showText: boolean;
            isOutline: boolean;
            onText: string;
            offText: string;
            isSquare: boolean;
            trueValue: string | number | boolean;
            falseValue: string | number | boolean;
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
        size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        showText: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        isOutline: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        onText: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        offText: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        isSquare: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        extCls: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        } & {
            default: (...args: any[]) => any;
        };
        trueValue: import("vue-types").VueTypeDef<string | number | boolean> & {
            default: string | number | boolean;
        };
        falseValue: import("vue-types").VueTypeDef<string | number | boolean> & {
            default: string | number | boolean;
        };
        value: import("vue-types").VueTypeDef<string | number | boolean> & {
            default: string | number | boolean;
        };
        modelValue: import("vue-types").VueTypeDef<string | number | boolean> & {
            default: string | number | boolean;
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
    theme: import("vue-types").VueTypeDef<"success" | "warning" | "danger" | "primary">;
    size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    showText: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    isOutline: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    onText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    offText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    isSquare: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    extCls: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    trueValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    falseValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    value: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    modelValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
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
    disabled: boolean;
    value: string | number | boolean;
    extCls: string;
    modelValue: string | number | boolean;
    withValidate: boolean;
    beforeChange: (...args: any[]) => any;
    showText: boolean;
    isOutline: boolean;
    onText: string;
    offText: string;
    isSquare: boolean;
    trueValue: string | number | boolean;
    falseValue: string | number | boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkSwitcher;
