import { PropType, Ref } from 'vue';
import { GetMenuListFunc, ICommonItem, IMenuFooterItem, ISearchItem, SearchInputMode, SearchItemType, SelectedItem, ValidateValuesFunc, ValueBehavior } from './utils';
declare const _default: import("vue").DefineComponent<{
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
        type: PropType<SearchInputMode>;
        default: SearchInputMode;
    };
    getMenuList: PropType<GetMenuListFunc>;
    validateValues: PropType<ValidateValuesFunc>;
    valueBehavior: PropType<ValueBehavior>;
}, {
    popoverRef: Ref<HTMLDivElement>;
    inputRef: Ref<HTMLDivElement>;
    keyword: Ref<string>;
    loading: Ref<boolean>;
    remoteMenuList: Ref<{
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
    menuList: Ref<ISearchItem[]>;
    menuHoverId: Ref<string>;
    isFocus: Ref<boolean>;
    usingItem: Ref<SelectedItem>;
    showPopover: Ref<boolean>;
    showNoSelectValueError: Ref<boolean>;
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
    handleMenuFooterClick: (item: IMenuFooterItem) => void;
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
        type: PropType<SearchInputMode>;
        default: SearchInputMode;
    };
    getMenuList: PropType<GetMenuListFunc>;
    validateValues: PropType<ValidateValuesFunc>;
    valueBehavior: PropType<ValueBehavior>;
}>> & {
    onFocus?: (...args: any[]) => any;
    onAdd?: (...args: any[]) => any;
    onDelete?: (...args: any[]) => any;
}, {
    mode: SearchInputMode;
    conditions: ICommonItem[];
    showInputBefore: boolean;
    showCondition: boolean;
}>;
export default _default;
