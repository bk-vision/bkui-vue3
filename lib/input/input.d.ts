import { ExtractPropTypes } from 'vue';
export declare const inputType: {
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
};
export declare const enum EVENTS {
    UPDATE = "update:modelValue",
    FOCUS = "focus",
    BLUR = "blur",
    CHANGE = "change",
    CLEAR = "clear",
    INPUT = "input",
    KEYPRESS = "keypress",
    KEYDOWN = "keydown",
    KEYUP = "keyup",
    ENTER = "enter",
    PASTE = "paste",
    COMPOSITIONSTART = "compositionstart",
    COMPOSITIONUPDATE = "compositionupdate",
    COMPOSITIONEND = "compositionend"
}
declare function EventFunction(_value: any, _evt?: KeyboardEvent | Event): boolean;
declare function CompositionEventFunction(evt: CompositionEvent): CompositionEvent;
export declare const inputEmitEventsType: {
    "update:modelValue": typeof EventFunction;
    focus: (evt: FocusEvent) => FocusEvent;
    blur: (evt: FocusEvent) => FocusEvent;
    change: typeof EventFunction;
    clear: () => boolean;
    input: typeof EventFunction;
    keypress: typeof EventFunction;
    keydown: typeof EventFunction;
    keyup: typeof EventFunction;
    enter: typeof EventFunction;
    paste: typeof EventFunction;
    compositionstart: typeof CompositionEventFunction;
    compositionupdate: typeof CompositionEventFunction;
    compositionend: typeof CompositionEventFunction;
};
export declare type InputType = ExtractPropTypes<typeof inputType>;
declare const _default: import("vue").DefineComponent<{
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": typeof EventFunction;
    focus: (evt: FocusEvent) => FocusEvent;
    blur: (evt: FocusEvent) => FocusEvent;
    change: typeof EventFunction;
    clear: () => boolean;
    input: typeof EventFunction;
    keypress: typeof EventFunction;
    keydown: typeof EventFunction;
    keyup: typeof EventFunction;
    enter: typeof EventFunction;
    paste: typeof EventFunction;
    compositionstart: typeof CompositionEventFunction;
    compositionupdate: typeof CompositionEventFunction;
    compositionend: typeof CompositionEventFunction;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
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
}, {
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
}>;
export default _default;
