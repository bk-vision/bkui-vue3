declare const BkSearchSelect: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            data: import("./utils").ISearchItem[];
            maxHeight: number;
            minHeight: number;
            clearable: boolean;
            modelValue: import("./utils").ISearchValue[];
            conditions: import("./utils").ICommonItem[];
            valueBehavior: import("./utils").ValueBehavior;
            valueSplitCode: string;
            shrink: boolean;
            uniqueSelect: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<import("./utils").ISearchItem[]>;
                default: () => any[];
            };
            modelValue: {
                type: import("vue").PropType<import("./utils").ISearchValue[]>;
                default: () => any[];
            };
            shrink: {
                type: BooleanConstructor;
                default: boolean;
            };
            maxHeight: {
                type: NumberConstructor;
                default: number;
            };
            minHeight: {
                type: NumberConstructor;
                default: number;
            };
            conditions: {
                type: import("vue").PropType<import("./utils").ICommonItem[]>;
                default: () => any[];
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            getMenuList: import("vue").PropType<import("./utils").GetMenuListFunc>;
            validateValues: import("vue").PropType<import("./utils").ValidateValuesFunc>;
            valueSplitCode: {
                type: StringConstructor;
                default: string;
            };
            uniqueSelect: {
                type: BooleanConstructor;
                default: boolean;
            };
            valueBehavior: {
                type: import("vue").PropType<import("./utils").ValueBehavior>;
                default: import("./utils").ValueBehavior;
                validator(v: import("./utils").ValueBehavior): boolean;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "data" | "maxHeight" | "minHeight" | "clearable" | "modelValue" | "conditions" | "valueBehavior" | "valueSplitCode" | "shrink" | "uniqueSelect">;
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
        $emit: (event: "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<import("./utils").ISearchItem[]>;
                default: () => any[];
            };
            modelValue: {
                type: import("vue").PropType<import("./utils").ISearchValue[]>;
                default: () => any[];
            };
            shrink: {
                type: BooleanConstructor;
                default: boolean;
            };
            maxHeight: {
                type: NumberConstructor;
                default: number;
            };
            minHeight: {
                type: NumberConstructor;
                default: number;
            };
            conditions: {
                type: import("vue").PropType<import("./utils").ICommonItem[]>;
                default: () => any[];
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            getMenuList: import("vue").PropType<import("./utils").GetMenuListFunc>;
            validateValues: import("vue").PropType<import("./utils").ValidateValuesFunc>;
            valueSplitCode: {
                type: StringConstructor;
                default: string;
            };
            uniqueSelect: {
                type: BooleanConstructor;
                default: boolean;
            };
            valueBehavior: {
                type: import("vue").PropType<import("./utils").ValueBehavior>;
                default: import("./utils").ValueBehavior;
                validator(v: import("./utils").ValueBehavior): boolean;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
        }, {
            inputRef: import("vue").Ref<import("vue").DefineComponent<{
                data: {
                    type: import("vue").PropType<import("./utils").ISearchItem[]>;
                    required: true;
                };
                showInputBefore: BooleanConstructor;
                showCondition: BooleanConstructor;
                clickOutside: FunctionConstructor;
                conditions: {
                    type: import("vue").PropType<import("./utils").ICommonItem[]>;
                    default: () => any[];
                };
                defautUsingItem: import("vue").PropType<import("./utils").SelectedItem>;
                mode: {
                    type: import("vue").PropType<import("./utils").SearchInputMode>;
                    default: import("./utils").SearchInputMode;
                };
                getMenuList: import("vue").PropType<import("./utils").GetMenuListFunc>;
                validateValues: import("vue").PropType<import("./utils").ValidateValuesFunc>;
                valueBehavior: import("vue").PropType<import("./utils").ValueBehavior>;
            }, {
                popoverRef: import("vue").Ref<HTMLDivElement>;
                inputRef: import("vue").Ref<HTMLDivElement>;
                keyword: import("vue").Ref<string>;
                loading: import("vue").Ref<boolean>;
                remoteMenuList: import("vue").Ref<{
                    id: string;
                    name: string;
                    disabled?: boolean;
                    realId?: string;
                    value?: {
                        name: string;
                        id: string;
                        realId?: string;
                        isSelected?: boolean;
                    };
                    isSelected?: boolean;
                }[]>;
                menuList: import("vue").Ref<import("./utils").ISearchItem[]>;
                menuHoverId: import("vue").Ref<string>;
                isFocus: import("vue").Ref<boolean>;
                usingItem: import("vue").Ref<import("./utils").SelectedItem>;
                showPopover: import("vue").Ref<boolean>;
                showNoSelectValueError: import("vue").Ref<boolean>;
                debounceSetMenuList: {
                    (this: any): any;
                    cancel(): void;
                };
                documentArrowEvent: (e: KeyboardEvent) => void;
                handleClickOutside: (e: MouseEvent) => void;
                handleInputFocus: (e: FocusEvent) => void;
                handleInputChange: (event: Event) => void;
                handleInputKeyup: (event: KeyboardEvent) => void;
                handleSelectItem: (item: import("./utils").ICommonItem, type?: import("./utils").SearchItemType) => Promise<void>;
                handleSelectCondtionItem: (item: import("./utils").ICommonItem) => void;
                handleMenuFooterClick: (item: import("./utils").IMenuFooterItem) => void;
                t: import("vue").ComputedRef<{
                    pleaseSelect: string;
                    loading: string;
                    filterQueryMustHasValue: string;
                    ok: string;
                    cancel: string;
                    or: string;
                    and: string;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "add" | "delete")[], "focus" | "add" | "delete", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: import("vue").PropType<import("./utils").ISearchItem[]>;
                    required: true;
                };
                showInputBefore: BooleanConstructor;
                showCondition: BooleanConstructor;
                clickOutside: FunctionConstructor;
                conditions: {
                    type: import("vue").PropType<import("./utils").ICommonItem[]>;
                    default: () => any[];
                };
                defautUsingItem: import("vue").PropType<import("./utils").SelectedItem>;
                mode: {
                    type: import("vue").PropType<import("./utils").SearchInputMode>;
                    default: import("./utils").SearchInputMode;
                };
                getMenuList: import("vue").PropType<import("./utils").GetMenuListFunc>;
                validateValues: import("vue").PropType<import("./utils").ValidateValuesFunc>;
                valueBehavior: import("vue").PropType<import("./utils").ValueBehavior>;
            }>> & {
                onFocus?: (...args: any[]) => any;
                onAdd?: (...args: any[]) => any;
                onDelete?: (...args: any[]) => any;
            }, {
                mode: import("./utils").SearchInputMode;
                conditions: import("./utils").ICommonItem[];
                showInputBefore: boolean;
                showCondition: boolean;
            }>>;
            wrapRef: import("vue").Ref<HTMLDivElement>;
            isFocus: import("vue").Ref<boolean>;
            copyData: import("vue").ShallowRef<import("./utils").ISearchItem[]>;
            selectedList: import("vue").Ref<{
                id: string;
                name: string;
                values: {
                    id: string;
                    name: string;
                    disabled?: boolean;
                    realId?: string;
                    value?: {
                        name: string;
                        id: string;
                        realId?: string;
                        isSelected?: boolean;
                    };
                    isSelected?: boolean;
                }[];
                condition: string;
                searchItem: {
                    id: string;
                    name: string;
                    children?: {
                        id: string;
                        name: string;
                        disabled?: boolean;
                        realId?: string;
                        value?: {
                            name: string;
                            id: string;
                            realId?: string;
                            isSelected?: boolean;
                        };
                        isSelected?: boolean;
                    }[];
                    multiple?: boolean;
                    async?: boolean;
                    noValidate?: boolean;
                    placeholder?: string;
                    disabled?: boolean;
                    value?: {
                        id: string;
                        name: string;
                        disabled?: boolean;
                        realId?: string;
                        value?: {
                            name: string;
                            id: string;
                            realId?: string;
                            isSelected?: boolean;
                        };
                        isSelected?: boolean;
                    };
                    isSelected?: boolean;
                };
                type: import("./utils").SearchItemType;
                splitCode: string;
                readonly multiple: boolean;
                readonly placeholder: string;
                readonly children: {
                    id: string;
                    name: string;
                    disabled?: boolean;
                    realId?: string;
                    value?: {
                        name: string;
                        id: string;
                        realId?: string;
                        isSelected?: boolean;
                    };
                    isSelected?: boolean;
                }[];
                readonly validate: boolean;
                readonly inputInnerHtml: string;
                readonly inputInnerText: string;
                readonly keyInnerHtml: string;
                readonly keyInnerText: string;
                isSpecialType: () => boolean;
                addValue: (item: import("./utils").ICommonItem) => void;
                toValue: () => import("./utils").ISearchValue;
                toValueKey: () => string;
                isInValueList: (item: import("./utils").ICommonItem) => boolean;
            }[]>;
            overflowIndex: import("vue").Ref<number>;
            validateStr: import("vue").Ref<string>;
            splitCode: import("vue").ComputedRef<string>;
            onEditClick: (item: import("./utils").SelectedItem, index: number) => void;
            onEditEnter: (item: import("./utils").SelectedItem, index: number) => void;
            handleWrapClick: () => void;
            handleInputFocus: (v: boolean) => void;
            handleResize: () => void;
            handleClearAll: () => void;
            handleInputOutside: (target: Node) => boolean;
            handleAddSelected: (item: import("./utils").SelectedItem) => void;
            handleDeleteSelected: (index?: number) => void;
            localConditions: import("vue").ComputedRef<import("./utils").ICommonItem[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], string, {
            data: import("./utils").ISearchItem[];
            maxHeight: number;
            minHeight: number;
            clearable: boolean;
            modelValue: import("./utils").ISearchValue[];
            conditions: import("./utils").ICommonItem[];
            valueBehavior: import("./utils").ValueBehavior;
            valueSplitCode: string;
            shrink: boolean;
            uniqueSelect: boolean;
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
        data: {
            type: import("vue").PropType<import("./utils").ISearchItem[]>;
            default: () => any[];
        };
        modelValue: {
            type: import("vue").PropType<import("./utils").ISearchValue[]>;
            default: () => any[];
        };
        shrink: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxHeight: {
            type: NumberConstructor;
            default: number;
        };
        minHeight: {
            type: NumberConstructor;
            default: number;
        };
        conditions: {
            type: import("vue").PropType<import("./utils").ICommonItem[]>;
            default: () => any[];
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        getMenuList: import("vue").PropType<import("./utils").GetMenuListFunc>;
        validateValues: import("vue").PropType<import("./utils").ValidateValuesFunc>;
        valueSplitCode: {
            type: StringConstructor;
            default: string;
        };
        uniqueSelect: {
            type: BooleanConstructor;
            default: boolean;
        };
        valueBehavior: {
            type: import("vue").PropType<import("./utils").ValueBehavior>;
            default: import("./utils").ValueBehavior;
            validator(v: import("./utils").ValueBehavior): boolean;
        };
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        inputRef: import("vue").Ref<import("vue").DefineComponent<{
            data: {
                type: import("vue").PropType<import("./utils").ISearchItem[]>;
                required: true;
            };
            showInputBefore: BooleanConstructor;
            showCondition: BooleanConstructor;
            clickOutside: FunctionConstructor;
            conditions: {
                type: import("vue").PropType<import("./utils").ICommonItem[]>;
                default: () => any[];
            };
            defautUsingItem: import("vue").PropType<import("./utils").SelectedItem>;
            mode: {
                type: import("vue").PropType<import("./utils").SearchInputMode>;
                default: import("./utils").SearchInputMode;
            };
            getMenuList: import("vue").PropType<import("./utils").GetMenuListFunc>;
            validateValues: import("vue").PropType<import("./utils").ValidateValuesFunc>;
            valueBehavior: import("vue").PropType<import("./utils").ValueBehavior>;
        }, {
            popoverRef: import("vue").Ref<HTMLDivElement>;
            inputRef: import("vue").Ref<HTMLDivElement>;
            keyword: import("vue").Ref<string>;
            loading: import("vue").Ref<boolean>;
            remoteMenuList: import("vue").Ref<{
                id: string;
                name: string;
                disabled?: boolean;
                realId?: string;
                value?: {
                    name: string;
                    id: string;
                    realId?: string;
                    isSelected?: boolean;
                };
                isSelected?: boolean;
            }[]>;
            menuList: import("vue").Ref<import("./utils").ISearchItem[]>;
            menuHoverId: import("vue").Ref<string>;
            isFocus: import("vue").Ref<boolean>;
            usingItem: import("vue").Ref<import("./utils").SelectedItem>;
            showPopover: import("vue").Ref<boolean>;
            showNoSelectValueError: import("vue").Ref<boolean>;
            debounceSetMenuList: {
                (this: any): any;
                cancel(): void;
            };
            documentArrowEvent: (e: KeyboardEvent) => void;
            handleClickOutside: (e: MouseEvent) => void;
            handleInputFocus: (e: FocusEvent) => void;
            handleInputChange: (event: Event) => void;
            handleInputKeyup: (event: KeyboardEvent) => void;
            handleSelectItem: (item: import("./utils").ICommonItem, type?: import("./utils").SearchItemType) => Promise<void>;
            handleSelectCondtionItem: (item: import("./utils").ICommonItem) => void;
            handleMenuFooterClick: (item: import("./utils").IMenuFooterItem) => void;
            t: import("vue").ComputedRef<{
                pleaseSelect: string;
                loading: string;
                filterQueryMustHasValue: string;
                ok: string;
                cancel: string;
                or: string;
                and: string;
            }>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "add" | "delete")[], "focus" | "add" | "delete", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<import("./utils").ISearchItem[]>;
                required: true;
            };
            showInputBefore: BooleanConstructor;
            showCondition: BooleanConstructor;
            clickOutside: FunctionConstructor;
            conditions: {
                type: import("vue").PropType<import("./utils").ICommonItem[]>;
                default: () => any[];
            };
            defautUsingItem: import("vue").PropType<import("./utils").SelectedItem>;
            mode: {
                type: import("vue").PropType<import("./utils").SearchInputMode>;
                default: import("./utils").SearchInputMode;
            };
            getMenuList: import("vue").PropType<import("./utils").GetMenuListFunc>;
            validateValues: import("vue").PropType<import("./utils").ValidateValuesFunc>;
            valueBehavior: import("vue").PropType<import("./utils").ValueBehavior>;
        }>> & {
            onFocus?: (...args: any[]) => any;
            onAdd?: (...args: any[]) => any;
            onDelete?: (...args: any[]) => any;
        }, {
            mode: import("./utils").SearchInputMode;
            conditions: import("./utils").ICommonItem[];
            showInputBefore: boolean;
            showCondition: boolean;
        }>>;
        wrapRef: import("vue").Ref<HTMLDivElement>;
        isFocus: import("vue").Ref<boolean>;
        copyData: import("vue").ShallowRef<import("./utils").ISearchItem[]>;
        selectedList: import("vue").Ref<{
            id: string;
            name: string;
            values: {
                id: string;
                name: string;
                disabled?: boolean;
                realId?: string;
                value?: {
                    name: string;
                    id: string;
                    realId?: string;
                    isSelected?: boolean;
                };
                isSelected?: boolean;
            }[];
            condition: string;
            searchItem: {
                id: string;
                name: string;
                children?: {
                    id: string;
                    name: string;
                    disabled?: boolean;
                    realId?: string;
                    value?: {
                        name: string;
                        id: string;
                        realId?: string;
                        isSelected?: boolean;
                    };
                    isSelected?: boolean;
                }[];
                multiple?: boolean;
                async?: boolean;
                noValidate?: boolean;
                placeholder?: string;
                disabled?: boolean;
                value?: {
                    id: string;
                    name: string;
                    disabled?: boolean;
                    realId?: string;
                    value?: {
                        name: string;
                        id: string;
                        realId?: string;
                        isSelected?: boolean;
                    };
                    isSelected?: boolean;
                };
                isSelected?: boolean;
            };
            type: import("./utils").SearchItemType;
            splitCode: string;
            readonly multiple: boolean;
            readonly placeholder: string;
            readonly children: {
                id: string;
                name: string;
                disabled?: boolean;
                realId?: string;
                value?: {
                    name: string;
                    id: string;
                    realId?: string;
                    isSelected?: boolean;
                };
                isSelected?: boolean;
            }[];
            readonly validate: boolean;
            readonly inputInnerHtml: string;
            readonly inputInnerText: string;
            readonly keyInnerHtml: string;
            readonly keyInnerText: string;
            isSpecialType: () => boolean;
            addValue: (item: import("./utils").ICommonItem) => void;
            toValue: () => import("./utils").ISearchValue;
            toValueKey: () => string;
            isInValueList: (item: import("./utils").ICommonItem) => boolean;
        }[]>;
        overflowIndex: import("vue").Ref<number>;
        validateStr: import("vue").Ref<string>;
        splitCode: import("vue").ComputedRef<string>;
        onEditClick: (item: import("./utils").SelectedItem, index: number) => void;
        onEditEnter: (item: import("./utils").SelectedItem, index: number) => void;
        handleWrapClick: () => void;
        handleInputFocus: (v: boolean) => void;
        handleResize: () => void;
        handleClearAll: () => void;
        handleInputOutside: (target: Node) => boolean;
        handleAddSelected: (item: import("./utils").SelectedItem) => void;
        handleDeleteSelected: (index?: number) => void;
        localConditions: import("vue").ComputedRef<import("./utils").ICommonItem[]>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<import("./utils").ISearchItem[]>;
        default: () => any[];
    };
    modelValue: {
        type: import("vue").PropType<import("./utils").ISearchValue[]>;
        default: () => any[];
    };
    shrink: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    minHeight: {
        type: NumberConstructor;
        default: number;
    };
    conditions: {
        type: import("vue").PropType<import("./utils").ICommonItem[]>;
        default: () => any[];
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    getMenuList: import("vue").PropType<import("./utils").GetMenuListFunc>;
    validateValues: import("vue").PropType<import("./utils").ValidateValuesFunc>;
    valueSplitCode: {
        type: StringConstructor;
        default: string;
    };
    uniqueSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueBehavior: {
        type: import("vue").PropType<import("./utils").ValueBehavior>;
        default: import("./utils").ValueBehavior;
        validator(v: import("./utils").ValueBehavior): boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    inputRef: import("vue").Ref<import("vue").DefineComponent<{
        data: {
            type: import("vue").PropType<import("./utils").ISearchItem[]>;
            required: true;
        };
        showInputBefore: BooleanConstructor;
        showCondition: BooleanConstructor;
        clickOutside: FunctionConstructor;
        conditions: {
            type: import("vue").PropType<import("./utils").ICommonItem[]>;
            default: () => any[];
        };
        defautUsingItem: import("vue").PropType<import("./utils").SelectedItem>;
        mode: {
            type: import("vue").PropType<import("./utils").SearchInputMode>;
            default: import("./utils").SearchInputMode;
        };
        getMenuList: import("vue").PropType<import("./utils").GetMenuListFunc>;
        validateValues: import("vue").PropType<import("./utils").ValidateValuesFunc>;
        valueBehavior: import("vue").PropType<import("./utils").ValueBehavior>;
    }, {
        popoverRef: import("vue").Ref<HTMLDivElement>;
        inputRef: import("vue").Ref<HTMLDivElement>;
        keyword: import("vue").Ref<string>;
        loading: import("vue").Ref<boolean>;
        remoteMenuList: import("vue").Ref<{
            id: string;
            name: string;
            disabled?: boolean;
            realId?: string;
            value?: {
                name: string;
                id: string;
                realId?: string;
                isSelected?: boolean;
            };
            isSelected?: boolean;
        }[]>;
        menuList: import("vue").Ref<import("./utils").ISearchItem[]>;
        menuHoverId: import("vue").Ref<string>;
        isFocus: import("vue").Ref<boolean>;
        usingItem: import("vue").Ref<import("./utils").SelectedItem>;
        showPopover: import("vue").Ref<boolean>;
        showNoSelectValueError: import("vue").Ref<boolean>;
        debounceSetMenuList: {
            (this: any): any;
            cancel(): void;
        };
        documentArrowEvent: (e: KeyboardEvent) => void;
        handleClickOutside: (e: MouseEvent) => void;
        handleInputFocus: (e: FocusEvent) => void;
        handleInputChange: (event: Event) => void;
        handleInputKeyup: (event: KeyboardEvent) => void;
        handleSelectItem: (item: import("./utils").ICommonItem, type?: import("./utils").SearchItemType) => Promise<void>;
        handleSelectCondtionItem: (item: import("./utils").ICommonItem) => void;
        handleMenuFooterClick: (item: import("./utils").IMenuFooterItem) => void;
        t: import("vue").ComputedRef<{
            pleaseSelect: string;
            loading: string;
            filterQueryMustHasValue: string;
            ok: string;
            cancel: string;
            or: string;
            and: string;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "add" | "delete")[], "focus" | "add" | "delete", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<import("./utils").ISearchItem[]>;
            required: true;
        };
        showInputBefore: BooleanConstructor;
        showCondition: BooleanConstructor;
        clickOutside: FunctionConstructor;
        conditions: {
            type: import("vue").PropType<import("./utils").ICommonItem[]>;
            default: () => any[];
        };
        defautUsingItem: import("vue").PropType<import("./utils").SelectedItem>;
        mode: {
            type: import("vue").PropType<import("./utils").SearchInputMode>;
            default: import("./utils").SearchInputMode;
        };
        getMenuList: import("vue").PropType<import("./utils").GetMenuListFunc>;
        validateValues: import("vue").PropType<import("./utils").ValidateValuesFunc>;
        valueBehavior: import("vue").PropType<import("./utils").ValueBehavior>;
    }>> & {
        onFocus?: (...args: any[]) => any;
        onAdd?: (...args: any[]) => any;
        onDelete?: (...args: any[]) => any;
    }, {
        mode: import("./utils").SearchInputMode;
        conditions: import("./utils").ICommonItem[];
        showInputBefore: boolean;
        showCondition: boolean;
    }>>;
    wrapRef: import("vue").Ref<HTMLDivElement>;
    isFocus: import("vue").Ref<boolean>;
    copyData: import("vue").ShallowRef<import("./utils").ISearchItem[]>;
    selectedList: import("vue").Ref<{
        id: string;
        name: string;
        values: {
            id: string;
            name: string;
            disabled?: boolean;
            realId?: string;
            value?: {
                name: string;
                id: string;
                realId?: string;
                isSelected?: boolean;
            };
            isSelected?: boolean;
        }[];
        condition: string;
        searchItem: {
            id: string;
            name: string;
            children?: {
                id: string;
                name: string;
                disabled?: boolean;
                realId?: string;
                value?: {
                    name: string;
                    id: string;
                    realId?: string;
                    isSelected?: boolean;
                };
                isSelected?: boolean;
            }[];
            multiple?: boolean;
            async?: boolean;
            noValidate?: boolean;
            placeholder?: string;
            disabled?: boolean;
            value?: {
                id: string;
                name: string;
                disabled?: boolean;
                realId?: string;
                value?: {
                    name: string;
                    id: string;
                    realId?: string;
                    isSelected?: boolean;
                };
                isSelected?: boolean;
            };
            isSelected?: boolean;
        };
        type: import("./utils").SearchItemType;
        splitCode: string;
        readonly multiple: boolean;
        readonly placeholder: string;
        readonly children: {
            id: string;
            name: string;
            disabled?: boolean;
            realId?: string;
            value?: {
                name: string;
                id: string;
                realId?: string;
                isSelected?: boolean;
            };
            isSelected?: boolean;
        }[];
        readonly validate: boolean;
        readonly inputInnerHtml: string;
        readonly inputInnerText: string;
        readonly keyInnerHtml: string;
        readonly keyInnerText: string;
        isSpecialType: () => boolean;
        addValue: (item: import("./utils").ICommonItem) => void;
        toValue: () => import("./utils").ISearchValue;
        toValueKey: () => string;
        isInValueList: (item: import("./utils").ICommonItem) => boolean;
    }[]>;
    overflowIndex: import("vue").Ref<number>;
    validateStr: import("vue").Ref<string>;
    splitCode: import("vue").ComputedRef<string>;
    onEditClick: (item: import("./utils").SelectedItem, index: number) => void;
    onEditEnter: (item: import("./utils").SelectedItem, index: number) => void;
    handleWrapClick: () => void;
    handleInputFocus: (v: boolean) => void;
    handleResize: () => void;
    handleClearAll: () => void;
    handleInputOutside: (target: Node) => boolean;
    handleAddSelected: (item: import("./utils").SelectedItem) => void;
    handleDeleteSelected: (index?: number) => void;
    localConditions: import("vue").ComputedRef<import("./utils").ICommonItem[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
    data: import("./utils").ISearchItem[];
    maxHeight: number;
    minHeight: number;
    clearable: boolean;
    modelValue: import("./utils").ISearchValue[];
    conditions: import("./utils").ICommonItem[];
    valueBehavior: import("./utils").ValueBehavior;
    valueSplitCode: string;
    shrink: boolean;
    uniqueSelect: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default BkSearchSelect;
export { BkSearchSelect, };
