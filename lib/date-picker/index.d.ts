import TimePicker from './time-picker';
declare const BkDatePicker: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            placement: import("@popperjs/core").ComputedPlacement;
            options: Record<string, any>;
            behavior: "simplicity" | "normal";
            type: import("./interface").PickerTypeType;
            transfer: boolean;
            disabled: boolean;
            fontSize: "normal" | "large" | "medium";
            open: boolean;
            multiple: boolean;
            placeholder: string;
            clearable: boolean;
            readonly: boolean;
            withValidate: boolean;
            extPopoverCls: string;
            editable: boolean;
            timePickerOptions: {};
            splitPanels: boolean;
            appendToBody: boolean;
            shortcuts: import("./interface").DatePickerShortcutsType;
            shortcutClose: boolean;
            upToNow: boolean;
            useShortcutText: boolean;
            shortcutSelectedIndex: number;
            headerSlotCls: string;
            footerSlotCls: string;
            allowCrossDay: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            readonly type: {
                readonly type: import("vue").PropType<import("./interface").PickerTypeType>;
                readonly default: "date";
                readonly validator: (value: any) => boolean;
            };
            readonly extPopoverCls: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly format: StringConstructor;
            readonly readonly: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly disabled: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly editable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly clearable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly open: {
                readonly type: () => boolean;
                readonly default: any;
            };
            readonly multiple: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly timePickerOptions: {
                readonly type: import("vue").PropType<Record<string, any>>;
                readonly default: () => {};
            };
            readonly splitPanels: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly startDate: DateConstructor;
            readonly placeholder: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly placement: {
                readonly type: import("vue").PropType<import("@popperjs/core").ComputedPlacement>;
                readonly default: "bottom-start";
                readonly validator: (value: any) => boolean;
            };
            readonly transfer: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly appendToBody: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly shortcuts: {
                readonly type: import("vue").PropType<import("./interface").DatePickerShortcutsType>;
                readonly default: () => any[];
            };
            readonly shortcutClose: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly modelValue: {
                readonly type: import("vue").PropType<import("./interface").DatePickerValueType>;
            };
            readonly value: {
                readonly type: import("vue").PropType<import("./interface").DatePickerValueType>;
            };
            readonly options: {
                readonly type: ObjectConstructor;
                readonly default: () => {};
            };
            readonly fontSize: {
                readonly type: import("vue").PropType<"normal" | "large" | "medium">;
                readonly default: "normal";
            };
            readonly upToNow: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly useShortcutText: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly shortcutSelectedIndex: {
                readonly type: NumberConstructor;
                readonly default: -1;
            };
            readonly headerSlotCls: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly footerSlotCls: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly allowCrossDay: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly behavior: {
                readonly type: import("vue").PropType<"simplicity" | "normal">;
                readonly default: "normal";
                readonly validator: (v: any) => boolean;
            };
            readonly disabledDate: import("vue").PropType<import("./interface").DisabledDateType>;
            readonly withValidate: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            onInput?: (...args: any[]) => any;
            onClear?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onPick-success"?: (...args: any[]) => any;
            "onOpen-change"?: (...args: any[]) => any;
            "onShortcut-change"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "placement" | "options" | "behavior" | "type" | "transfer" | "disabled" | "fontSize" | "open" | "multiple" | "placeholder" | "clearable" | "readonly" | "withValidate" | "extPopoverCls" | "editable" | "timePickerOptions" | "splitPanels" | "appendToBody" | "shortcuts" | "shortcutClose" | "upToNow" | "useShortcutText" | "shortcutSelectedIndex" | "headerSlotCls" | "footerSlotCls" | "allowCrossDay">;
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
        $emit: (event: "input" | "change" | "clear" | "update:modelValue" | "pick-success" | "open-change" | "shortcut-change", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly type: {
                readonly type: import("vue").PropType<import("./interface").PickerTypeType>;
                readonly default: "date";
                readonly validator: (value: any) => boolean;
            };
            readonly extPopoverCls: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly format: StringConstructor;
            readonly readonly: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly disabled: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly editable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly clearable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly open: {
                readonly type: () => boolean;
                readonly default: any;
            };
            readonly multiple: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly timePickerOptions: {
                readonly type: import("vue").PropType<Record<string, any>>;
                readonly default: () => {};
            };
            readonly splitPanels: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly startDate: DateConstructor;
            readonly placeholder: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly placement: {
                readonly type: import("vue").PropType<import("@popperjs/core").ComputedPlacement>;
                readonly default: "bottom-start";
                readonly validator: (value: any) => boolean;
            };
            readonly transfer: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly appendToBody: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly shortcuts: {
                readonly type: import("vue").PropType<import("./interface").DatePickerShortcutsType>;
                readonly default: () => any[];
            };
            readonly shortcutClose: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly modelValue: {
                readonly type: import("vue").PropType<import("./interface").DatePickerValueType>;
            };
            readonly value: {
                readonly type: import("vue").PropType<import("./interface").DatePickerValueType>;
            };
            readonly options: {
                readonly type: ObjectConstructor;
                readonly default: () => {};
            };
            readonly fontSize: {
                readonly type: import("vue").PropType<"normal" | "large" | "medium">;
                readonly default: "normal";
            };
            readonly upToNow: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly useShortcutText: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly shortcutSelectedIndex: {
                readonly type: NumberConstructor;
                readonly default: -1;
            };
            readonly headerSlotCls: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly footerSlotCls: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly allowCrossDay: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly behavior: {
                readonly type: import("vue").PropType<"simplicity" | "normal">;
                readonly default: "normal";
                readonly validator: (v: any) => boolean;
            };
            readonly disabledDate: import("vue").PropType<import("./interface").DisabledDateType>;
            readonly withValidate: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
        }>> & {
            onChange?: (...args: any[]) => any;
            onInput?: (...args: any[]) => any;
            onClear?: (...args: any[]) => any;
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onPick-success"?: (...args: any[]) => any;
            "onOpen-change"?: (...args: any[]) => any;
            "onShortcut-change"?: (...args: any[]) => any;
        }, {
            panel: import("vue").ComputedRef<import("./interface").DatePickerPanelType>;
            publicStringValue: import("vue").ComputedRef<any>;
            opened: import("vue").ComputedRef<boolean>;
            visualValue: import("vue").ComputedRef<any>;
            displayValue: import("vue").ComputedRef<any>;
            isConfirm: import("vue").ComputedRef<boolean>;
            hasHeader: import("vue").ComputedRef<boolean>;
            hasFooter: import("vue").ComputedRef<boolean>;
            hasShortcuts: import("vue").ComputedRef<boolean>;
            hasConfirm: import("vue").ComputedRef<boolean>;
            fontSizeCls: import("vue").ComputedRef<string>;
            longWidthCls: import("vue").ComputedRef<string>;
            localReadonly: import("vue").ComputedRef<boolean>;
            allowCrossDayProp: import("vue").ComputedRef<boolean>;
            ownPickerProps: import("vue").ComputedRef<Record<string, any>>;
            pickerDropdownRef: any;
            inputRef: any;
            triggerRef: import("vue").Ref<HTMLElement>;
            pickerPanelRef: any;
            handleClose: (e?: Event) => boolean;
            handleIconClick: () => void;
            handleInputMouseenter: () => void;
            handleInputMouseleave: (_e: any) => void;
            handleFocus: (e: any) => void;
            handleBlur: (e: any) => void;
            handleKeydown: (e: KeyboardEvent) => void;
            handleInputChange: (e: any) => void;
            handleClear: () => void;
            onPick: (_dates: any, visible: boolean, type: any, shortcut: any) => void;
            onPickSuccess: () => void;
            handleToggleTime: () => void;
            showClose: import("vue").Ref<boolean>;
            visible: import("vue").Ref<boolean>;
            internalValue: import("vue").Ref<any>;
            disableClickOutSide: import("vue").Ref<boolean>;
            disableCloseUnderTransfer: import("vue").Ref<boolean>;
            selectionMode: import("vue").Ref<import("./interface").SelectionModeType>;
            forceInputRerender: import("vue").Ref<number>;
            isFocused: import("vue").Ref<boolean>;
            focusedDate: import("vue").Ref<any>;
            focusedTime: import("vue").Ref<{
                column: number;
                picker: number;
                time: any;
                active: boolean;
            }>;
            internalFocus: import("vue").Ref<boolean>;
            timeEnterMode: import("vue").Ref<boolean>;
            shortcut: import("vue").Ref<any>;
            onSelectionModeChange: import("vue").Ref<(_type: any) => import("./interface").SelectionModeType>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "change" | "clear" | "update:modelValue" | "pick-success" | "open-change" | "shortcut-change")[], string, {
            placement: import("@popperjs/core").ComputedPlacement;
            options: Record<string, any>;
            behavior: "simplicity" | "normal";
            type: import("./interface").PickerTypeType;
            transfer: boolean;
            disabled: boolean;
            fontSize: "normal" | "large" | "medium";
            open: boolean;
            multiple: boolean;
            placeholder: string;
            clearable: boolean;
            readonly: boolean;
            withValidate: boolean;
            extPopoverCls: string;
            editable: boolean;
            timePickerOptions: {};
            splitPanels: boolean;
            appendToBody: boolean;
            shortcuts: import("./interface").DatePickerShortcutsType;
            shortcutClose: boolean;
            upToNow: boolean;
            useShortcutText: boolean;
            shortcutSelectedIndex: number;
            headerSlotCls: string;
            footerSlotCls: string;
            allowCrossDay: boolean;
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
        readonly type: {
            readonly type: import("vue").PropType<import("./interface").PickerTypeType>;
            readonly default: "date";
            readonly validator: (value: any) => boolean;
        };
        readonly extPopoverCls: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly format: StringConstructor;
        readonly readonly: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly editable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly clearable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly open: {
            readonly type: () => boolean;
            readonly default: any;
        };
        readonly multiple: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly timePickerOptions: {
            readonly type: import("vue").PropType<Record<string, any>>;
            readonly default: () => {};
        };
        readonly splitPanels: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly startDate: DateConstructor;
        readonly placeholder: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly placement: {
            readonly type: import("vue").PropType<import("@popperjs/core").ComputedPlacement>;
            readonly default: "bottom-start";
            readonly validator: (value: any) => boolean;
        };
        readonly transfer: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly appendToBody: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly shortcuts: {
            readonly type: import("vue").PropType<import("./interface").DatePickerShortcutsType>;
            readonly default: () => any[];
        };
        readonly shortcutClose: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly modelValue: {
            readonly type: import("vue").PropType<import("./interface").DatePickerValueType>;
        };
        readonly value: {
            readonly type: import("vue").PropType<import("./interface").DatePickerValueType>;
        };
        readonly options: {
            readonly type: ObjectConstructor;
            readonly default: () => {};
        };
        readonly fontSize: {
            readonly type: import("vue").PropType<"normal" | "large" | "medium">;
            readonly default: "normal";
        };
        readonly upToNow: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly useShortcutText: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly shortcutSelectedIndex: {
            readonly type: NumberConstructor;
            readonly default: -1;
        };
        readonly headerSlotCls: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly footerSlotCls: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly allowCrossDay: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly behavior: {
            readonly type: import("vue").PropType<"simplicity" | "normal">;
            readonly default: "normal";
            readonly validator: (v: any) => boolean;
        };
        readonly disabledDate: import("vue").PropType<import("./interface").DisabledDateType>;
        readonly withValidate: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
    }>> & {
        onChange?: (...args: any[]) => any;
        onInput?: (...args: any[]) => any;
        onClear?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
        "onPick-success"?: (...args: any[]) => any;
        "onOpen-change"?: (...args: any[]) => any;
        "onShortcut-change"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        panel: import("vue").ComputedRef<import("./interface").DatePickerPanelType>;
        publicStringValue: import("vue").ComputedRef<any>;
        opened: import("vue").ComputedRef<boolean>;
        visualValue: import("vue").ComputedRef<any>;
        displayValue: import("vue").ComputedRef<any>;
        isConfirm: import("vue").ComputedRef<boolean>;
        hasHeader: import("vue").ComputedRef<boolean>;
        hasFooter: import("vue").ComputedRef<boolean>;
        hasShortcuts: import("vue").ComputedRef<boolean>;
        hasConfirm: import("vue").ComputedRef<boolean>;
        fontSizeCls: import("vue").ComputedRef<string>;
        longWidthCls: import("vue").ComputedRef<string>;
        localReadonly: import("vue").ComputedRef<boolean>;
        allowCrossDayProp: import("vue").ComputedRef<boolean>;
        ownPickerProps: import("vue").ComputedRef<Record<string, any>>;
        pickerDropdownRef: any;
        inputRef: any;
        triggerRef: import("vue").Ref<HTMLElement>;
        pickerPanelRef: any;
        handleClose: (e?: Event) => boolean;
        handleIconClick: () => void;
        handleInputMouseenter: () => void;
        handleInputMouseleave: (_e: any) => void;
        handleFocus: (e: any) => void;
        handleBlur: (e: any) => void;
        handleKeydown: (e: KeyboardEvent) => void;
        handleInputChange: (e: any) => void;
        handleClear: () => void;
        onPick: (_dates: any, visible: boolean, type: any, shortcut: any) => void;
        onPickSuccess: () => void;
        handleToggleTime: () => void;
        showClose: import("vue").Ref<boolean>;
        visible: import("vue").Ref<boolean>;
        internalValue: import("vue").Ref<any>;
        disableClickOutSide: import("vue").Ref<boolean>;
        disableCloseUnderTransfer: import("vue").Ref<boolean>;
        selectionMode: import("vue").Ref<import("./interface").SelectionModeType>;
        forceInputRerender: import("vue").Ref<number>;
        isFocused: import("vue").Ref<boolean>;
        focusedDate: import("vue").Ref<any>;
        focusedTime: import("vue").Ref<{
            column: number;
            picker: number;
            time: any;
            active: boolean;
        }>;
        internalFocus: import("vue").Ref<boolean>;
        timeEnterMode: import("vue").Ref<boolean>;
        shortcut: import("vue").Ref<any>;
        onSelectionModeChange: import("vue").Ref<(_type: any) => import("./interface").SelectionModeType>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("./interface").PickerTypeType>;
        readonly default: "date";
        readonly validator: (value: any) => boolean;
    };
    readonly extPopoverCls: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly format: StringConstructor;
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly editable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly open: {
        readonly type: () => boolean;
        readonly default: any;
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly timePickerOptions: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly default: () => {};
    };
    readonly splitPanels: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly startDate: DateConstructor;
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly placement: {
        readonly type: import("vue").PropType<import("@popperjs/core").ComputedPlacement>;
        readonly default: "bottom-start";
        readonly validator: (value: any) => boolean;
    };
    readonly transfer: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly shortcuts: {
        readonly type: import("vue").PropType<import("./interface").DatePickerShortcutsType>;
        readonly default: () => any[];
    };
    readonly shortcutClose: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly modelValue: {
        readonly type: import("vue").PropType<import("./interface").DatePickerValueType>;
    };
    readonly value: {
        readonly type: import("vue").PropType<import("./interface").DatePickerValueType>;
    };
    readonly options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
    };
    readonly fontSize: {
        readonly type: import("vue").PropType<"normal" | "large" | "medium">;
        readonly default: "normal";
    };
    readonly upToNow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly useShortcutText: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly shortcutSelectedIndex: {
        readonly type: NumberConstructor;
        readonly default: -1;
    };
    readonly headerSlotCls: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly footerSlotCls: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly allowCrossDay: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly behavior: {
        readonly type: import("vue").PropType<"simplicity" | "normal">;
        readonly default: "normal";
        readonly validator: (v: any) => boolean;
    };
    readonly disabledDate: import("vue").PropType<import("./interface").DisabledDateType>;
    readonly withValidate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    onInput?: (...args: any[]) => any;
    onClear?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onPick-success"?: (...args: any[]) => any;
    "onOpen-change"?: (...args: any[]) => any;
    "onShortcut-change"?: (...args: any[]) => any;
}, {
    panel: import("vue").ComputedRef<import("./interface").DatePickerPanelType>;
    publicStringValue: import("vue").ComputedRef<any>;
    opened: import("vue").ComputedRef<boolean>;
    visualValue: import("vue").ComputedRef<any>;
    displayValue: import("vue").ComputedRef<any>;
    isConfirm: import("vue").ComputedRef<boolean>;
    hasHeader: import("vue").ComputedRef<boolean>;
    hasFooter: import("vue").ComputedRef<boolean>;
    hasShortcuts: import("vue").ComputedRef<boolean>;
    hasConfirm: import("vue").ComputedRef<boolean>;
    fontSizeCls: import("vue").ComputedRef<string>;
    longWidthCls: import("vue").ComputedRef<string>;
    localReadonly: import("vue").ComputedRef<boolean>;
    allowCrossDayProp: import("vue").ComputedRef<boolean>;
    ownPickerProps: import("vue").ComputedRef<Record<string, any>>;
    pickerDropdownRef: any;
    inputRef: any;
    triggerRef: import("vue").Ref<HTMLElement>;
    pickerPanelRef: any;
    handleClose: (e?: Event) => boolean;
    handleIconClick: () => void;
    handleInputMouseenter: () => void;
    handleInputMouseleave: (_e: any) => void;
    handleFocus: (e: any) => void;
    handleBlur: (e: any) => void;
    handleKeydown: (e: KeyboardEvent) => void;
    handleInputChange: (e: any) => void;
    handleClear: () => void;
    onPick: (_dates: any, visible: boolean, type: any, shortcut: any) => void;
    onPickSuccess: () => void;
    handleToggleTime: () => void;
    showClose: import("vue").Ref<boolean>;
    visible: import("vue").Ref<boolean>;
    internalValue: import("vue").Ref<any>;
    disableClickOutSide: import("vue").Ref<boolean>;
    disableCloseUnderTransfer: import("vue").Ref<boolean>;
    selectionMode: import("vue").Ref<import("./interface").SelectionModeType>;
    forceInputRerender: import("vue").Ref<number>;
    isFocused: import("vue").Ref<boolean>;
    focusedDate: import("vue").Ref<any>;
    focusedTime: import("vue").Ref<{
        column: number;
        picker: number;
        time: any;
        active: boolean;
    }>;
    internalFocus: import("vue").Ref<boolean>;
    timeEnterMode: import("vue").Ref<boolean>;
    shortcut: import("vue").Ref<any>;
    onSelectionModeChange: import("vue").Ref<(_type: any) => import("./interface").SelectionModeType>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "change" | "clear" | "update:modelValue" | "pick-success" | "open-change" | "shortcut-change")[], "input" | "change" | "clear" | "update:modelValue" | "pick-success" | "open-change" | "shortcut-change", {
    placement: import("@popperjs/core").ComputedPlacement;
    options: Record<string, any>;
    behavior: "simplicity" | "normal";
    type: import("./interface").PickerTypeType;
    transfer: boolean;
    disabled: boolean;
    fontSize: "normal" | "large" | "medium";
    open: boolean;
    multiple: boolean;
    placeholder: string;
    clearable: boolean;
    readonly: boolean;
    withValidate: boolean;
    extPopoverCls: string;
    editable: boolean;
    timePickerOptions: {};
    splitPanels: boolean;
    appendToBody: boolean;
    shortcuts: import("./interface").DatePickerShortcutsType;
    shortcutClose: boolean;
    upToNow: boolean;
    useShortcutText: boolean;
    shortcutSelectedIndex: number;
    headerSlotCls: string;
    footerSlotCls: string;
    allowCrossDay: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkDatePicker;
export { TimePicker, };
