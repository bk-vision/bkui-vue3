import RadioButton from './radio-button';
import RadioGroup from './radio-group';
declare const BkRadio: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            name: string;
            disabled: boolean;
            modelValue: string | number | boolean;
            checked: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            name: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            label: import("vue-types").VueTypeDef<string | number | boolean> & {
                required: true;
            };
            modelValue: import("vue-types").VueTypeDef<string | number | boolean> & {
                default: string | number | boolean;
            };
            checked: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "name" | "disabled" | "modelValue" | "checked">;
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
            name: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            label: import("vue-types").VueTypeDef<string | number | boolean> & {
                required: true;
            };
            modelValue: import("vue-types").VueTypeDef<string | number | boolean> & {
                default: string | number | boolean;
            };
            checked: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
        }, {
            isFocused: import("vue").Ref<boolean>;
            isChecked: import("vue").Ref<boolean>;
            isDisabled: import("vue").ComputedRef<boolean>;
            setChecked: (value?: boolean) => void;
            handleBlur: () => void;
            handleFocus: () => void;
            handleChange: (event: Event) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], string, {
            name: string;
            disabled: boolean;
            modelValue: string | number | boolean;
            checked: boolean;
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
        name: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        label: import("vue-types").VueTypeDef<string | number | boolean> & {
            required: true;
        };
        modelValue: import("vue-types").VueTypeDef<string | number | boolean> & {
            default: string | number | boolean;
        };
        checked: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
    }>> & {
        onChange?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        isFocused: import("vue").Ref<boolean>;
        isChecked: import("vue").Ref<boolean>;
        isDisabled: import("vue").ComputedRef<boolean>;
        setChecked: (value?: boolean) => void;
        handleBlur: () => void;
        handleFocus: () => void;
        handleChange: (event: Event) => void;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    name: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    label: import("vue-types").VueTypeDef<string | number | boolean> & {
        required: true;
    };
    modelValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    checked: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    isFocused: import("vue").Ref<boolean>;
    isChecked: import("vue").Ref<boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
    setChecked: (value?: boolean) => void;
    handleBlur: () => void;
    handleFocus: () => void;
    handleChange: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", {
    name: string;
    disabled: boolean;
    modelValue: string | number | boolean;
    checked: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin & Readonly<{
    Group: import("vue").DefineComponent<{
        name: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        modelValue: import("vue-types").VueTypeDef<string | number | boolean>;
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        type: import("vue-types").VueTypeDef<string> & {
            default: string;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        name: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        modelValue: import("vue-types").VueTypeDef<string | number | boolean>;
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        type: import("vue-types").VueTypeDef<string> & {
            default: string;
        };
    }>> & {
        onChange?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
    }, {
        name: string;
        type: string;
        disabled: boolean;
        withValidate: boolean;
    }>;
    Button: import("vue").DefineComponent<{
        name: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        label: import("vue-types").VueTypeDef<string | number | boolean> & {
            required: true;
        };
        modelValue: import("vue-types").VueTypeDef<string | number | boolean> & {
            default: string | number | boolean;
        };
        checked: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    }, {
        isFocused: import("vue").Ref<boolean>;
        isChecked: import("vue").Ref<boolean>;
        isDisabled: import("vue").ComputedRef<boolean>;
        setChecked: (value?: boolean) => void;
        handleBlur: () => void;
        handleFocus: () => void;
        handleChange: (event: Event) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        name: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        label: import("vue-types").VueTypeDef<string | number | boolean> & {
            required: true;
        };
        modelValue: import("vue-types").VueTypeDef<string | number | boolean> & {
            default: string | number | boolean;
        };
        checked: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    }>> & {
        onChange?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
    }, {
        name: string;
        disabled: boolean;
        modelValue: string | number | boolean;
        checked: boolean;
    }>;
}>;
export default BkRadio;
export { BkRadio, RadioGroup as BkRadioGroup, RadioButton as BkRadioButton, };
