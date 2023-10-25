import { CheckboxProps } from './checkbox';
import CheckboxGroup from './checkbox-group';
declare const BkCheckbox: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            size: "small" | "default" | "large";
            trueLabel: string | number | boolean;
            falseLabel: string | number | boolean;
            checked: boolean;
            indeterminate: boolean;
            beforeChange: (...args: any[]) => any;
            immediateEmitChange: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            modelValue: import("vue-types").VueTypeDef<string | number | boolean>;
            label: import("vue-types").VueTypeDef<string | number | boolean>;
            trueLabel: import("vue-types").VueTypeDef<string | number | boolean> & {
                default: string | number | boolean;
            };
            falseLabel: import("vue-types").VueTypeDef<string | number | boolean> & {
                default: string | number | boolean;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            checked: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            indeterminate: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
                default: (...args: any[]) => any;
            };
            size: import("vue-types").VueTypeDef<"small" | "default" | "large"> & {
                default: "small" | "default" | "large";
            };
            immediateEmitChange: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "disabled" | "size" | "trueLabel" | "falseLabel" | "checked" | "indeterminate" | "beforeChange" | "immediateEmitChange">;
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
            modelValue: import("vue-types").VueTypeDef<string | number | boolean>;
            label: import("vue-types").VueTypeDef<string | number | boolean>;
            trueLabel: import("vue-types").VueTypeDef<string | number | boolean> & {
                default: string | number | boolean;
            };
            falseLabel: import("vue-types").VueTypeDef<string | number | boolean> & {
                default: string | number | boolean;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            checked: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            indeterminate: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
                default: (...args: any[]) => any;
            };
            size: import("vue-types").VueTypeDef<"small" | "default" | "large"> & {
                default: "small" | "default" | "large";
            };
            immediateEmitChange: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
        }, {
            inputRef: import("vue").Ref<any>;
            isFocus: import("vue").Ref<boolean>;
            isChecked: import("vue").Ref<boolean>;
            isDisabled: import("vue").ComputedRef<boolean>;
            setChecked: (value?: boolean) => void;
            handleBlur: () => void;
            handleFocus: () => void;
            handleChange: (event: Event) => void;
            size: "small" | "default" | "large";
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
            disabled: boolean;
            size: "small" | "default" | "large";
            trueLabel: string | number | boolean;
            falseLabel: string | number | boolean;
            checked: boolean;
            indeterminate: boolean;
            beforeChange: (...args: any[]) => any;
            immediateEmitChange: boolean;
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
        modelValue: import("vue-types").VueTypeDef<string | number | boolean>;
        label: import("vue-types").VueTypeDef<string | number | boolean>;
        trueLabel: import("vue-types").VueTypeDef<string | number | boolean> & {
            default: string | number | boolean;
        };
        falseLabel: import("vue-types").VueTypeDef<string | number | boolean> & {
            default: string | number | boolean;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        checked: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        indeterminate: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
            default: (...args: any[]) => any;
        };
        size: import("vue-types").VueTypeDef<"small" | "default" | "large"> & {
            default: "small" | "default" | "large";
        };
        immediateEmitChange: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
    }>> & {
        onChange?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        inputRef: import("vue").Ref<any>;
        isFocus: import("vue").Ref<boolean>;
        isChecked: import("vue").Ref<boolean>;
        isDisabled: import("vue").ComputedRef<boolean>;
        setChecked: (value?: boolean) => void;
        handleBlur: () => void;
        handleFocus: () => void;
        handleChange: (event: Event) => void;
        size: "small" | "default" | "large";
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue-types").VueTypeDef<string | number | boolean>;
    label: import("vue-types").VueTypeDef<string | number | boolean>;
    trueLabel: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    falseLabel: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    checked: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    indeterminate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    beforeChange: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    };
    size: import("vue-types").VueTypeDef<"small" | "default" | "large"> & {
        default: "small" | "default" | "large";
    };
    immediateEmitChange: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    inputRef: import("vue").Ref<any>;
    isFocus: import("vue").Ref<boolean>;
    isChecked: import("vue").Ref<boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
    setChecked: (value?: boolean) => void;
    handleBlur: () => void;
    handleFocus: () => void;
    handleChange: (event: Event) => void;
    size: "small" | "default" | "large";
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
    disabled: boolean;
    size: "small" | "default" | "large";
    trueLabel: string | number | boolean;
    falseLabel: string | number | boolean;
    checked: boolean;
    indeterminate: boolean;
    beforeChange: (...args: any[]) => any;
    immediateEmitChange: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin & Readonly<{
    Group: import("vue").DefineComponent<{
        name: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        modelValue: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        name: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        modelValue: import("vue-types").VueTypeValidableDef<unknown[]> & {
            default: () => unknown[];
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
    }>> & {
        onChange?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
    }, {
        name: string;
        disabled: boolean;
        modelValue: unknown[];
        withValidate: boolean;
    }>;
}>;
export default BkCheckbox;
export { BkCheckbox, CheckboxGroup as BkCheckboxGroup, };
export type { CheckboxProps, };
