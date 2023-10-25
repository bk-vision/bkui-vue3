import { PropType, ShallowRef } from 'vue';
import { GetMenuListFunc, ICommonItem, ISearchItem, ISearchValue, SearchItemType, SelectedItem, ValidateValuesFunc, ValueBehavior } from './utils';
export declare const SearchSelectProps: {
    data: {
        type: PropType<ISearchItem[]>;
        default: () => any[];
    };
    modelValue: {
        type: PropType<ISearchValue[]>;
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
        type: PropType<ICommonItem[]>;
        default: () => any[];
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    getMenuList: PropType<GetMenuListFunc>;
    validateValues: PropType<ValidateValuesFunc>;
    valueSplitCode: {
        type: StringConstructor;
        default: string;
    };
    uniqueSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueBehavior: {
        type: PropType<ValueBehavior>;
        default: ValueBehavior;
        validator(v: ValueBehavior): boolean;
    };
};
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<ISearchItem[]>;
        default: () => any[];
    };
    modelValue: {
        type: PropType<ISearchValue[]>;
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
        type: PropType<ICommonItem[]>;
        default: () => any[];
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    getMenuList: PropType<GetMenuListFunc>;
    validateValues: PropType<ValidateValuesFunc>;
    valueSplitCode: {
        type: StringConstructor;
        default: string;
    };
    uniqueSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueBehavior: {
        type: PropType<ValueBehavior>;
        default: ValueBehavior;
        validator(v: ValueBehavior): boolean;
    };
}, {
    inputRef: import("vue").Ref<import("vue").DefineComponent<{
        data: {
            type: PropType<ISearchItem[]>;
            required: true;
        };
        showInputBefore: BooleanConstructor;
        showCondition: BooleanConstructor;
        clickOutside: FunctionConstructor;
        conditions: {
            type: PropType<ICommonItem[]>;
            default: () => any[];
        };
        defautUsingItem: PropType<SelectedItem>;
        mode: {
            type: PropType<import("./utils").SearchInputMode>;
            default: import("./utils").SearchInputMode;
        };
        getMenuList: PropType<GetMenuListFunc>;
        validateValues: PropType<ValidateValuesFunc>;
        valueBehavior: PropType<ValueBehavior>;
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
        menuList: import("vue").Ref<ISearchItem[]>;
        menuHoverId: import("vue").Ref<string>;
        isFocus: import("vue").Ref<boolean>;
        usingItem: import("vue").Ref<SelectedItem>;
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
        handleSelectItem: (item: ICommonItem, type?: SearchItemType) => Promise<void>;
        handleSelectCondtionItem: (item: ICommonItem) => void;
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
            type: PropType<ISearchItem[]>;
            required: true;
        };
        showInputBefore: BooleanConstructor;
        showCondition: BooleanConstructor;
        clickOutside: FunctionConstructor;
        conditions: {
            type: PropType<ICommonItem[]>;
            default: () => any[];
        };
        defautUsingItem: PropType<SelectedItem>;
        mode: {
            type: PropType<import("./utils").SearchInputMode>;
            default: import("./utils").SearchInputMode;
        };
        getMenuList: PropType<GetMenuListFunc>;
        validateValues: PropType<ValidateValuesFunc>;
        valueBehavior: PropType<ValueBehavior>;
    }>> & {
        onFocus?: (...args: any[]) => any;
        onAdd?: (...args: any[]) => any;
        onDelete?: (...args: any[]) => any;
    }, {
        mode: import("./utils").SearchInputMode;
        conditions: ICommonItem[];
        showInputBefore: boolean;
        showCondition: boolean;
    }>>;
    wrapRef: import("vue").Ref<HTMLDivElement>;
    isFocus: import("vue").Ref<boolean>;
    copyData: ShallowRef<ISearchItem[]>;
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
        type: SearchItemType;
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
        addValue: (item: ICommonItem) => void;
        toValue: () => ISearchValue;
        toValueKey: () => string;
        isInValueList: (item: ICommonItem) => boolean;
    }[]>;
    overflowIndex: import("vue").Ref<number>;
    validateStr: import("vue").Ref<string>;
    splitCode: import("vue").ComputedRef<string>;
    onEditClick: (item: SelectedItem, index: number) => void;
    onEditEnter: (item: SelectedItem, index: number) => void;
    handleWrapClick: () => void;
    handleInputFocus: (v: boolean) => void;
    handleResize: () => void;
    handleClearAll: () => void;
    handleInputOutside: (target: Node) => boolean;
    handleAddSelected: (item: SelectedItem) => void;
    handleDeleteSelected: (index?: number) => void;
    localConditions: import("vue").ComputedRef<ICommonItem[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<ISearchItem[]>;
        default: () => any[];
    };
    modelValue: {
        type: PropType<ISearchValue[]>;
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
        type: PropType<ICommonItem[]>;
        default: () => any[];
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    getMenuList: PropType<GetMenuListFunc>;
    validateValues: PropType<ValidateValuesFunc>;
    valueSplitCode: {
        type: StringConstructor;
        default: string;
    };
    uniqueSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueBehavior: {
        type: PropType<ValueBehavior>;
        default: ValueBehavior;
        validator(v: ValueBehavior): boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    data: ISearchItem[];
    maxHeight: number;
    minHeight: number;
    clearable: boolean;
    modelValue: ISearchValue[];
    conditions: ICommonItem[];
    valueBehavior: ValueBehavior;
    valueSplitCode: string;
    shrink: boolean;
    uniqueSelect: boolean;
}>;
export default _default;
