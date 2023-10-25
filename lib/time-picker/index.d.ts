declare const BkTimePicker: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            placement: import("@popperjs/core").ComputedPlacement;
            options: Record<string, any>;
            behavior: "simplicity" | "normal";
            type: import("../../date-picker/src/interface").PickerTypeType;
            transfer: boolean;
            width: number;
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
            shortcuts: import("../../date-picker/src/interface").DatePickerShortcutsType;
            shortcutClose: boolean;
            upToNow: boolean;
            useShortcutText: boolean;
            shortcutSelectedIndex: number;
            headerSlotCls: string;
            footerSlotCls: string;
            allowCrossDay: boolean;
            disabledHours: unknown[];
            disabledMinutes: unknown[];
            disabledSeconds: unknown[];
            hideDisabledOptions: boolean;
            enterMode: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            disabledHours: {
                readonly type: ArrayConstructor;
                readonly default: () => any[];
            };
            disabledMinutes: {
                readonly type: ArrayConstructor;
                readonly default: () => any[];
            };
            disabledSeconds: {
                readonly type: ArrayConstructor;
                readonly default: () => any[];
            };
            hideDisabledOptions: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            width: {
                readonly type: NumberConstructor;
                readonly default: 261;
            };
            enterMode: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            type: {
                type: import("vue").PropType<import("../../date-picker/src/interface").PickerTypeType>;
                default: string;
                validator(value: any): boolean;
            };
            allowCrossDay: {
                type: BooleanConstructor;
                default: boolean;
            };
            extPopoverCls: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            format: StringConstructor;
            readonly: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            disabled: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            editable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            clearable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            open: {
                readonly type: () => boolean;
                readonly default: any;
            };
            multiple: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            timePickerOptions: {
                readonly type: import("vue").PropType<Record<string, any>>;
                readonly default: () => {};
            };
            splitPanels: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            startDate: DateConstructor;
            placeholder: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            placement: {
                readonly type: import("vue").PropType<import("@popperjs/core").ComputedPlacement>;
                readonly default: "bottom-start";
                readonly validator: (value: any) => boolean;
            };
            transfer: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            appendToBody: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            shortcuts: {
                readonly type: import("vue").PropType<import("../../date-picker/src/interface").DatePickerShortcutsType>;
                readonly default: () => any[];
            };
            shortcutClose: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            modelValue: {
                readonly type: import("vue").PropType<import("../../date-picker/src/interface").DatePickerValueType>;
            };
            value: {
                readonly type: import("vue").PropType<import("../../date-picker/src/interface").DatePickerValueType>;
            };
            options: {
                readonly type: ObjectConstructor;
                readonly default: () => {};
            };
            fontSize: {
                readonly type: import("vue").PropType<"normal" | "large" | "medium">;
                readonly default: "normal";
            };
            upToNow: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            useShortcutText: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            shortcutSelectedIndex: {
                readonly type: NumberConstructor;
                readonly default: -1;
            };
            headerSlotCls: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            footerSlotCls: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            behavior: {
                readonly type: import("vue").PropType<"simplicity" | "normal">;
                readonly default: "normal";
                readonly validator: (v: any) => boolean;
            };
            disabledDate: import("vue").PropType<import("../../date-picker/src/interface").DisabledDateType>;
            withValidate: {
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
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "placement" | "options" | "behavior" | "type" | "transfer" | "width" | "disabled" | "fontSize" | "open" | "multiple" | "placeholder" | "clearable" | "readonly" | "withValidate" | "extPopoverCls" | "editable" | "timePickerOptions" | "splitPanels" | "appendToBody" | "shortcuts" | "shortcutClose" | "upToNow" | "useShortcutText" | "shortcutSelectedIndex" | "headerSlotCls" | "footerSlotCls" | "allowCrossDay" | "disabledHours" | "disabledMinutes" | "disabledSeconds" | "hideDisabledOptions" | "enterMode">;
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
            disabledHours: {
                readonly type: ArrayConstructor;
                readonly default: () => any[];
            };
            disabledMinutes: {
                readonly type: ArrayConstructor;
                readonly default: () => any[];
            };
            disabledSeconds: {
                readonly type: ArrayConstructor;
                readonly default: () => any[];
            };
            hideDisabledOptions: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            width: {
                readonly type: NumberConstructor;
                readonly default: 261;
            };
            enterMode: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            type: {
                type: import("vue").PropType<import("../../date-picker/src/interface").PickerTypeType>;
                default: string;
                validator(value: any): boolean;
            };
            allowCrossDay: {
                type: BooleanConstructor;
                default: boolean;
            };
            extPopoverCls: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            format: StringConstructor;
            readonly: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            disabled: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            editable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            clearable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            open: {
                readonly type: () => boolean;
                readonly default: any;
            };
            multiple: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            timePickerOptions: {
                readonly type: import("vue").PropType<Record<string, any>>;
                readonly default: () => {};
            };
            splitPanels: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            startDate: DateConstructor;
            placeholder: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            placement: {
                readonly type: import("vue").PropType<import("@popperjs/core").ComputedPlacement>;
                readonly default: "bottom-start";
                readonly validator: (value: any) => boolean;
            };
            transfer: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            appendToBody: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            shortcuts: {
                readonly type: import("vue").PropType<import("../../date-picker/src/interface").DatePickerShortcutsType>;
                readonly default: () => any[];
            };
            shortcutClose: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            modelValue: {
                readonly type: import("vue").PropType<import("../../date-picker/src/interface").DatePickerValueType>;
            };
            value: {
                readonly type: import("vue").PropType<import("../../date-picker/src/interface").DatePickerValueType>;
            };
            options: {
                readonly type: ObjectConstructor;
                readonly default: () => {};
            };
            fontSize: {
                readonly type: import("vue").PropType<"normal" | "large" | "medium">;
                readonly default: "normal";
            };
            upToNow: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            useShortcutText: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            shortcutSelectedIndex: {
                readonly type: NumberConstructor;
                readonly default: -1;
            };
            headerSlotCls: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            footerSlotCls: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            behavior: {
                readonly type: import("vue").PropType<"simplicity" | "normal">;
                readonly default: "normal";
                readonly validator: (v: any) => boolean;
            };
            disabledDate: import("vue").PropType<import("../../date-picker/src/interface").DisabledDateType>;
            withValidate: {
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
            panel: import("vue").ComputedRef<import("../../date-picker/src/interface").DatePickerPanelType>;
            publicStringValue: import("vue").ComputedRef<any>;
            opened: import("vue").ComputedRef<boolean>;
            visualValue: import("vue").ComputedRef<any>;
            displayValue: import("vue").ComputedRef<any>;
            isConfirm: import("vue").ComputedRef<boolean>;
            hasHeader: import("vue").ComputedRef<boolean>;
            hasFooter: import("vue").ComputedRef<boolean>;
            hasShortcuts: import("vue").ComputedRef<boolean>;
            fontSizeCls: import("vue").ComputedRef<string>;
            longWidthCls: import("vue").ComputedRef<string>;
            localReadonly: import("vue").ComputedRef<boolean>;
            allowCrossDayProp: import("vue").ComputedRef<boolean>;
            ownPickerProps: import("vue").ComputedRef<{
                disabledHours: unknown[];
                disabledMinutes: unknown[];
                disabledSeconds: unknown[];
                hideDisabledOptions: boolean;
            }>;
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
            handleTransferClick: () => void;
            onPick: (_dates: any, visible: boolean, type: any, shortcut: any) => void;
            onPickSuccess: () => void;
            showClose: import("vue").Ref<boolean>;
            visible: import("vue").Ref<boolean>;
            internalValue: import("vue").Ref<any>;
            disableClickOutSide: import("vue").Ref<boolean>;
            disableCloseUnderTransfer: import("vue").Ref<boolean>;
            selectionMode: import("vue").Ref<import("../../date-picker/src/interface").SelectionModeType>;
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
            onSelectionModeChange: import("vue").Ref<(_type: any) => import("../../date-picker/src/interface").SelectionModeType>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "change" | "clear" | "update:modelValue" | "pick-success" | "open-change" | "shortcut-change")[], string, {
            placement: import("@popperjs/core").ComputedPlacement;
            options: Record<string, any>;
            behavior: "simplicity" | "normal";
            type: import("../../date-picker/src/interface").PickerTypeType;
            transfer: boolean;
            width: number;
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
            shortcuts: import("../../date-picker/src/interface").DatePickerShortcutsType;
            shortcutClose: boolean;
            upToNow: boolean;
            useShortcutText: boolean;
            shortcutSelectedIndex: number;
            headerSlotCls: string;
            footerSlotCls: string;
            allowCrossDay: boolean;
            disabledHours: unknown[];
            disabledMinutes: unknown[];
            disabledSeconds: unknown[];
            hideDisabledOptions: boolean;
            enterMode: boolean;
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
        disabledHours: {
            readonly type: ArrayConstructor;
            readonly default: () => any[];
        };
        disabledMinutes: {
            readonly type: ArrayConstructor;
            readonly default: () => any[];
        };
        disabledSeconds: {
            readonly type: ArrayConstructor;
            readonly default: () => any[];
        };
        hideDisabledOptions: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        width: {
            readonly type: NumberConstructor;
            readonly default: 261;
        };
        enterMode: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        type: {
            type: import("vue").PropType<import("../../date-picker/src/interface").PickerTypeType>;
            default: string;
            validator(value: any): boolean;
        };
        allowCrossDay: {
            type: BooleanConstructor;
            default: boolean;
        };
        extPopoverCls: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        format: StringConstructor;
        readonly: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        editable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        clearable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        open: {
            readonly type: () => boolean;
            readonly default: any;
        };
        multiple: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        timePickerOptions: {
            readonly type: import("vue").PropType<Record<string, any>>;
            readonly default: () => {};
        };
        splitPanels: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        startDate: DateConstructor;
        placeholder: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        placement: {
            readonly type: import("vue").PropType<import("@popperjs/core").ComputedPlacement>;
            readonly default: "bottom-start";
            readonly validator: (value: any) => boolean;
        };
        transfer: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        appendToBody: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        shortcuts: {
            readonly type: import("vue").PropType<import("../../date-picker/src/interface").DatePickerShortcutsType>;
            readonly default: () => any[];
        };
        shortcutClose: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        modelValue: {
            readonly type: import("vue").PropType<import("../../date-picker/src/interface").DatePickerValueType>;
        };
        value: {
            readonly type: import("vue").PropType<import("../../date-picker/src/interface").DatePickerValueType>;
        };
        options: {
            readonly type: ObjectConstructor;
            readonly default: () => {};
        };
        fontSize: {
            readonly type: import("vue").PropType<"normal" | "large" | "medium">;
            readonly default: "normal";
        };
        upToNow: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        useShortcutText: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        shortcutSelectedIndex: {
            readonly type: NumberConstructor;
            readonly default: -1;
        };
        headerSlotCls: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        footerSlotCls: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        behavior: {
            readonly type: import("vue").PropType<"simplicity" | "normal">;
            readonly default: "normal";
            readonly validator: (v: any) => boolean;
        };
        disabledDate: import("vue").PropType<import("../../date-picker/src/interface").DisabledDateType>;
        withValidate: {
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
        panel: import("vue").ComputedRef<import("../../date-picker/src/interface").DatePickerPanelType>;
        publicStringValue: import("vue").ComputedRef<any>;
        opened: import("vue").ComputedRef<boolean>;
        visualValue: import("vue").ComputedRef<any>;
        displayValue: import("vue").ComputedRef<any>;
        isConfirm: import("vue").ComputedRef<boolean>;
        hasHeader: import("vue").ComputedRef<boolean>;
        hasFooter: import("vue").ComputedRef<boolean>;
        hasShortcuts: import("vue").ComputedRef<boolean>;
        fontSizeCls: import("vue").ComputedRef<string>;
        longWidthCls: import("vue").ComputedRef<string>;
        localReadonly: import("vue").ComputedRef<boolean>;
        allowCrossDayProp: import("vue").ComputedRef<boolean>;
        ownPickerProps: import("vue").ComputedRef<{
            disabledHours: unknown[];
            disabledMinutes: unknown[];
            disabledSeconds: unknown[];
            hideDisabledOptions: boolean;
        }>;
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
        handleTransferClick: () => void;
        onPick: (_dates: any, visible: boolean, type: any, shortcut: any) => void;
        onPickSuccess: () => void;
        showClose: import("vue").Ref<boolean>;
        visible: import("vue").Ref<boolean>;
        internalValue: import("vue").Ref<any>;
        disableClickOutSide: import("vue").Ref<boolean>;
        disableCloseUnderTransfer: import("vue").Ref<boolean>;
        selectionMode: import("vue").Ref<import("../../date-picker/src/interface").SelectionModeType>;
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
        onSelectionModeChange: import("vue").Ref<(_type: any) => import("../../date-picker/src/interface").SelectionModeType>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    disabledHours: {
        readonly type: ArrayConstructor;
        readonly default: () => any[];
    };
    disabledMinutes: {
        readonly type: ArrayConstructor;
        readonly default: () => any[];
    };
    disabledSeconds: {
        readonly type: ArrayConstructor;
        readonly default: () => any[];
    };
    hideDisabledOptions: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    width: {
        readonly type: NumberConstructor;
        readonly default: 261;
    };
    enterMode: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    type: {
        type: import("vue").PropType<import("../../date-picker/src/interface").PickerTypeType>;
        default: string;
        validator(value: any): boolean;
    };
    allowCrossDay: {
        type: BooleanConstructor;
        default: boolean;
    };
    extPopoverCls: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    format: StringConstructor;
    readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    editable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    open: {
        readonly type: () => boolean;
        readonly default: any;
    };
    multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    timePickerOptions: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly default: () => {};
    };
    splitPanels: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    startDate: DateConstructor;
    placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    placement: {
        readonly type: import("vue").PropType<import("@popperjs/core").ComputedPlacement>;
        readonly default: "bottom-start";
        readonly validator: (value: any) => boolean;
    };
    transfer: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    shortcuts: {
        readonly type: import("vue").PropType<import("../../date-picker/src/interface").DatePickerShortcutsType>;
        readonly default: () => any[];
    };
    shortcutClose: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    modelValue: {
        readonly type: import("vue").PropType<import("../../date-picker/src/interface").DatePickerValueType>;
    };
    value: {
        readonly type: import("vue").PropType<import("../../date-picker/src/interface").DatePickerValueType>;
    };
    options: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
    };
    fontSize: {
        readonly type: import("vue").PropType<"normal" | "large" | "medium">;
        readonly default: "normal";
    };
    upToNow: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    useShortcutText: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    shortcutSelectedIndex: {
        readonly type: NumberConstructor;
        readonly default: -1;
    };
    headerSlotCls: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    footerSlotCls: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    behavior: {
        readonly type: import("vue").PropType<"simplicity" | "normal">;
        readonly default: "normal";
        readonly validator: (v: any) => boolean;
    };
    disabledDate: import("vue").PropType<import("../../date-picker/src/interface").DisabledDateType>;
    withValidate: {
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
    panel: import("vue").ComputedRef<import("../../date-picker/src/interface").DatePickerPanelType>;
    publicStringValue: import("vue").ComputedRef<any>;
    opened: import("vue").ComputedRef<boolean>;
    visualValue: import("vue").ComputedRef<any>;
    displayValue: import("vue").ComputedRef<any>;
    isConfirm: import("vue").ComputedRef<boolean>;
    hasHeader: import("vue").ComputedRef<boolean>;
    hasFooter: import("vue").ComputedRef<boolean>;
    hasShortcuts: import("vue").ComputedRef<boolean>;
    fontSizeCls: import("vue").ComputedRef<string>;
    longWidthCls: import("vue").ComputedRef<string>;
    localReadonly: import("vue").ComputedRef<boolean>;
    allowCrossDayProp: import("vue").ComputedRef<boolean>;
    ownPickerProps: import("vue").ComputedRef<{
        disabledHours: unknown[];
        disabledMinutes: unknown[];
        disabledSeconds: unknown[];
        hideDisabledOptions: boolean;
    }>;
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
    handleTransferClick: () => void;
    onPick: (_dates: any, visible: boolean, type: any, shortcut: any) => void;
    onPickSuccess: () => void;
    showClose: import("vue").Ref<boolean>;
    visible: import("vue").Ref<boolean>;
    internalValue: import("vue").Ref<any>;
    disableClickOutSide: import("vue").Ref<boolean>;
    disableCloseUnderTransfer: import("vue").Ref<boolean>;
    selectionMode: import("vue").Ref<import("../../date-picker/src/interface").SelectionModeType>;
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
    onSelectionModeChange: import("vue").Ref<(_type: any) => import("../../date-picker/src/interface").SelectionModeType>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "change" | "clear" | "update:modelValue" | "pick-success" | "open-change" | "shortcut-change")[], "input" | "change" | "clear" | "update:modelValue" | "pick-success" | "open-change" | "shortcut-change", {
    placement: import("@popperjs/core").ComputedPlacement;
    options: Record<string, any>;
    behavior: "simplicity" | "normal";
    type: import("../../date-picker/src/interface").PickerTypeType;
    transfer: boolean;
    width: number;
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
    shortcuts: import("../../date-picker/src/interface").DatePickerShortcutsType;
    shortcutClose: boolean;
    upToNow: boolean;
    useShortcutText: boolean;
    shortcutSelectedIndex: number;
    headerSlotCls: string;
    footerSlotCls: string;
    allowCrossDay: boolean;
    disabledHours: unknown[];
    disabledMinutes: unknown[];
    disabledSeconds: unknown[];
    hideDisabledOptions: boolean;
    enterMode: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkTimePicker;
