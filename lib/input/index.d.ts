declare const BkInput: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            behavior: "simplicity" | "normal";
            type: string;
            disabled: boolean;
            step: number;
            placeholder: string;
            prefix: string;
            max: number;
            min: number;
            maxlength: number;
            clearable: boolean;
            readonly: boolean;
            prefixIcon: string;
            suffixIcon: string;
            suffix: string;
            showWordLimit: boolean;
            showControl: boolean;
            showClearOnlyHover: boolean;
            precision: number;
            rows: number;
            selectReadonly: boolean;
            withValidate: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            type: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            clearable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            readonly: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            placeholder: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            prefixIcon: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            suffixIcon: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            suffix: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            prefix: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            step: import("vue-types").VueTypeDef<number> & {
                default: number;
            };
            max: import("vue-types").VueTypeDef<number> & {
                default: number;
            };
            min: import("vue-types").VueTypeDef<number> & {
                default: number;
            };
            maxlength: import("vue-types").VueTypeDef<number> & {
                default: number;
            };
            behavior: import("vue-types").VueTypeDef<"simplicity" | "normal"> & {
                default: "simplicity" | "normal";
            };
            showWordLimit: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            showControl: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            showClearOnlyHover: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            precision: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            } & {
                validator: import("vue-types/dist/types").ValidatorFunction<unknown>;
            };
            modelValue: import("vue-types").VueTypeDef<string | number>;
            size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
            rows: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            selectReadonly: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onPaste?: (_value: any, _evt?: Event | KeyboardEvent) => any;
            onCompositionend?: (evt: CompositionEvent) => any;
            onCompositionstart?: (evt: CompositionEvent) => any;
            onCompositionupdate?: (evt: CompositionEvent) => any;
            onFocus?: (evt: FocusEvent) => any;
            onBlur?: (evt: FocusEvent) => any;
            onChange?: (_value: any, _evt?: Event | KeyboardEvent) => any;
            onInput?: (_value: any, _evt?: Event | KeyboardEvent) => any;
            onKeydown?: (_value: any, _evt?: Event | KeyboardEvent) => any;
            onKeypress?: (_value: any, _evt?: Event | KeyboardEvent) => any;
            onKeyup?: (_value: any, _evt?: Event | KeyboardEvent) => any;
            onClear?: () => any;
            "onUpdate:modelValue"?: (_value: any, _evt?: Event | KeyboardEvent) => any;
            onEnter?: (_value: any, _evt?: Event | KeyboardEvent) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "behavior" | "type" | "disabled" | "step" | "placeholder" | "prefix" | "max" | "min" | "maxlength" | "clearable" | "readonly" | "prefixIcon" | "suffixIcon" | "suffix" | "showWordLimit" | "showControl" | "showClearOnlyHover" | "precision" | "rows" | "selectReadonly" | "withValidate">;
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
        $emit: ((event: import("./input").EVENTS.UPDATE, _value: any, _evt?: Event | KeyboardEvent) => void) & ((event: import("./input").EVENTS.FOCUS, evt: FocusEvent) => void) & ((event: import("./input").EVENTS.BLUR, evt: FocusEvent) => void) & ((event: import("./input").EVENTS.CHANGE, _value: any, _evt?: Event | KeyboardEvent) => void) & ((event: import("./input").EVENTS.CLEAR) => void) & ((event: import("./input").EVENTS.INPUT, _value: any, _evt?: Event | KeyboardEvent) => void) & ((event: import("./input").EVENTS.KEYPRESS, _value: any, _evt?: Event | KeyboardEvent) => void) & ((event: import("./input").EVENTS.KEYDOWN, _value: any, _evt?: Event | KeyboardEvent) => void) & ((event: import("./input").EVENTS.KEYUP, _value: any, _evt?: Event | KeyboardEvent) => void) & ((event: import("./input").EVENTS.ENTER, _value: any, _evt?: Event | KeyboardEvent) => void) & ((event: import("./input").EVENTS.PASTE, _value: any, _evt?: Event | KeyboardEvent) => void) & ((event: import("./input").EVENTS.COMPOSITIONSTART, evt: CompositionEvent) => void) & ((event: import("./input").EVENTS.COMPOSITIONUPDATE, evt: CompositionEvent) => void) & ((event: import("./input").EVENTS.COMPOSITIONEND, evt: CompositionEvent) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            type: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            clearable: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            disabled: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            readonly: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            placeholder: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            } & {
                default: string;
            };
            prefixIcon: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            suffixIcon: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            suffix: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            prefix: import("vue-types").VueTypeValidableDef<string> & {
                default: string;
            };
            step: import("vue-types").VueTypeDef<number> & {
                default: number;
            };
            max: import("vue-types").VueTypeDef<number> & {
                default: number;
            };
            min: import("vue-types").VueTypeDef<number> & {
                default: number;
            };
            maxlength: import("vue-types").VueTypeDef<number> & {
                default: number;
            };
            behavior: import("vue-types").VueTypeDef<"simplicity" | "normal"> & {
                default: "simplicity" | "normal";
            };
            showWordLimit: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            };
            showControl: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            showClearOnlyHover: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            precision: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            } & {
                default: number;
            } & {
                validator: import("vue-types/dist/types").ValidatorFunction<unknown>;
            };
            modelValue: import("vue-types").VueTypeDef<string | number>;
            size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
            rows: import("vue-types").VueTypeValidableDef<number> & {
                default: number;
            };
            selectReadonly: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
            withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
                default: boolean;
            } & {
                default: boolean;
            };
        }>> & {
            onPaste?: (_value: any, _evt?: Event | KeyboardEvent) => any;
            onCompositionend?: (evt: CompositionEvent) => any;
            onCompositionstart?: (evt: CompositionEvent) => any;
            onCompositionupdate?: (evt: CompositionEvent) => any;
            onFocus?: (evt: FocusEvent) => any;
            onBlur?: (evt: FocusEvent) => any;
            onChange?: (_value: any, _evt?: Event | KeyboardEvent) => any;
            onInput?: (_value: any, _evt?: Event | KeyboardEvent) => any;
            onKeydown?: (_value: any, _evt?: Event | KeyboardEvent) => any;
            onKeypress?: (_value: any, _evt?: Event | KeyboardEvent) => any;
            onKeyup?: (_value: any, _evt?: Event | KeyboardEvent) => any;
            onClear?: () => any;
            "onUpdate:modelValue"?: (_value: any, _evt?: Event | KeyboardEvent) => any;
            onEnter?: (_value: any, _evt?: Event | KeyboardEvent) => any;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (_value: any, _evt?: Event | KeyboardEvent) => boolean;
            focus: (evt: FocusEvent) => FocusEvent;
            blur: (evt: FocusEvent) => FocusEvent;
            change: (_value: any, _evt?: Event | KeyboardEvent) => boolean;
            clear: () => boolean;
            input: (_value: any, _evt?: Event | KeyboardEvent) => boolean;
            keypress: (_value: any, _evt?: Event | KeyboardEvent) => boolean;
            keydown: (_value: any, _evt?: Event | KeyboardEvent) => boolean;
            keyup: (_value: any, _evt?: Event | KeyboardEvent) => boolean;
            enter: (_value: any, _evt?: Event | KeyboardEvent) => boolean;
            paste: (_value: any, _evt?: Event | KeyboardEvent) => boolean;
            compositionstart: (evt: CompositionEvent) => CompositionEvent;
            compositionupdate: (evt: CompositionEvent) => CompositionEvent;
            compositionend: (evt: CompositionEvent) => CompositionEvent;
        }, string, {
            behavior: "simplicity" | "normal";
            type: string;
            disabled: boolean;
            step: number;
            placeholder: string;
            prefix: string;
            max: number;
            min: number;
            maxlength: number;
            clearable: boolean;
            readonly: boolean;
            prefixIcon: string;
            suffixIcon: string;
            suffix: string;
            showWordLimit: boolean;
            showControl: boolean;
            showClearOnlyHover: boolean;
            precision: number;
            rows: number;
            selectReadonly: boolean;
            withValidate: boolean;
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
        type: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        clearable: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        disabled: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        readonly: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        placeholder: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        } & {
            default: string;
        };
        prefixIcon: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        suffixIcon: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        suffix: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        prefix: import("vue-types").VueTypeValidableDef<string> & {
            default: string;
        };
        step: import("vue-types").VueTypeDef<number> & {
            default: number;
        };
        max: import("vue-types").VueTypeDef<number> & {
            default: number;
        };
        min: import("vue-types").VueTypeDef<number> & {
            default: number;
        };
        maxlength: import("vue-types").VueTypeDef<number> & {
            default: number;
        };
        behavior: import("vue-types").VueTypeDef<"simplicity" | "normal"> & {
            default: "simplicity" | "normal";
        };
        showWordLimit: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        };
        showControl: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        showClearOnlyHover: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        precision: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        } & {
            default: number;
        } & {
            validator: import("vue-types/dist/types").ValidatorFunction<unknown>;
        };
        modelValue: import("vue-types").VueTypeDef<string | number>;
        size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
        rows: import("vue-types").VueTypeValidableDef<number> & {
            default: number;
        };
        selectReadonly: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
        withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
            default: boolean;
        } & {
            default: boolean;
        };
    }>> & {
        onPaste?: (_value: any, _evt?: Event | KeyboardEvent) => any;
        onCompositionend?: (evt: CompositionEvent) => any;
        onCompositionstart?: (evt: CompositionEvent) => any;
        onCompositionupdate?: (evt: CompositionEvent) => any;
        onFocus?: (evt: FocusEvent) => any;
        onBlur?: (evt: FocusEvent) => any;
        onChange?: (_value: any, _evt?: Event | KeyboardEvent) => any;
        onInput?: (_value: any, _evt?: Event | KeyboardEvent) => any;
        onKeydown?: (_value: any, _evt?: Event | KeyboardEvent) => any;
        onKeypress?: (_value: any, _evt?: Event | KeyboardEvent) => any;
        onKeyup?: (_value: any, _evt?: Event | KeyboardEvent) => any;
        onClear?: () => any;
        "onUpdate:modelValue"?: (_value: any, _evt?: Event | KeyboardEvent) => any;
        onEnter?: (_value: any, _evt?: Event | KeyboardEvent) => any;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    clearable: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    readonly: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    placeholder: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    prefixIcon: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    suffixIcon: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    suffix: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    prefix: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    step: import("vue-types").VueTypeDef<number> & {
        default: number;
    };
    max: import("vue-types").VueTypeDef<number> & {
        default: number;
    };
    min: import("vue-types").VueTypeDef<number> & {
        default: number;
    };
    maxlength: import("vue-types").VueTypeDef<number> & {
        default: number;
    };
    behavior: import("vue-types").VueTypeDef<"simplicity" | "normal"> & {
        default: "simplicity" | "normal";
    };
    showWordLimit: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    showControl: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    showClearOnlyHover: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    precision: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    } & {
        validator: import("vue-types/dist/types").ValidatorFunction<unknown>;
    };
    modelValue: import("vue-types").VueTypeDef<string | number>;
    size: import("vue-types").VueTypeDef<"small" | "default" | "large">;
    rows: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    };
    selectReadonly: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    withValidate: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>> & {
    onPaste?: (_value: any, _evt?: Event | KeyboardEvent) => any;
    onCompositionend?: (evt: CompositionEvent) => any;
    onCompositionstart?: (evt: CompositionEvent) => any;
    onCompositionupdate?: (evt: CompositionEvent) => any;
    onFocus?: (evt: FocusEvent) => any;
    onBlur?: (evt: FocusEvent) => any;
    onChange?: (_value: any, _evt?: Event | KeyboardEvent) => any;
    onInput?: (_value: any, _evt?: Event | KeyboardEvent) => any;
    onKeydown?: (_value: any, _evt?: Event | KeyboardEvent) => any;
    onKeypress?: (_value: any, _evt?: Event | KeyboardEvent) => any;
    onKeyup?: (_value: any, _evt?: Event | KeyboardEvent) => any;
    onClear?: () => any;
    "onUpdate:modelValue"?: (_value: any, _evt?: Event | KeyboardEvent) => any;
    onEnter?: (_value: any, _evt?: Event | KeyboardEvent) => any;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (_value: any, _evt?: Event | KeyboardEvent) => boolean;
    focus: (evt: FocusEvent) => FocusEvent;
    blur: (evt: FocusEvent) => FocusEvent;
    change: (_value: any, _evt?: Event | KeyboardEvent) => boolean;
    clear: () => boolean;
    input: (_value: any, _evt?: Event | KeyboardEvent) => boolean;
    keypress: (_value: any, _evt?: Event | KeyboardEvent) => boolean;
    keydown: (_value: any, _evt?: Event | KeyboardEvent) => boolean;
    keyup: (_value: any, _evt?: Event | KeyboardEvent) => boolean;
    enter: (_value: any, _evt?: Event | KeyboardEvent) => boolean;
    paste: (_value: any, _evt?: Event | KeyboardEvent) => boolean;
    compositionstart: (evt: CompositionEvent) => CompositionEvent;
    compositionupdate: (evt: CompositionEvent) => CompositionEvent;
    compositionend: (evt: CompositionEvent) => CompositionEvent;
}, string, {
    behavior: "simplicity" | "normal";
    type: string;
    disabled: boolean;
    step: number;
    placeholder: string;
    prefix: string;
    max: number;
    min: number;
    maxlength: number;
    clearable: boolean;
    readonly: boolean;
    prefixIcon: string;
    suffixIcon: string;
    suffix: string;
    showWordLimit: boolean;
    showControl: boolean;
    showClearOnlyHover: boolean;
    precision: number;
    rows: number;
    selectReadonly: boolean;
    withValidate: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkInput;
