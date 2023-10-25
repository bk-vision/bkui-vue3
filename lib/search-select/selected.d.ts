import { PropType } from 'vue';
import { GetMenuListFunc, ICommonItem, ISearchItem, SearchInputMode, SelectedItem, ValidateValuesFunc, ValueBehavior } from './utils';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<ISearchItem[]>;
        required: true;
    };
    selectedList: {
        type: PropType<SelectedItem[]>;
        required: true;
    };
    overflowIndex: {
        type: NumberConstructor;
        default: number;
    };
    conditions: {
        type: PropType<ICommonItem[]>;
        default: () => any[];
    };
    getMenuList: PropType<GetMenuListFunc>;
    validateValues: PropType<ValidateValuesFunc>;
    valueBehavior: PropType<ValueBehavior>;
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
            type: PropType<SearchInputMode>;
            default: SearchInputMode;
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
        handleSelectItem: (item: ICommonItem, type?: import("./utils").SearchItemType) => Promise<void>;
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
    }>>;
    editKey: import("vue").Ref<String>;
    copySeletedItem: (item: SelectedItem) => SelectedItem;
    handleDeleteSelected: (index: number) => void;
    handleEditSeleted: (e: MouseEvent, item: SelectedItem, index: number) => void;
    handleInputOutside: () => boolean;
    handleAddSelected: (item: SelectedItem, index: number) => void;
    handleInputFocus: (isFocus: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "delete"[], "delete", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<ISearchItem[]>;
        required: true;
    };
    selectedList: {
        type: PropType<SelectedItem[]>;
        required: true;
    };
    overflowIndex: {
        type: NumberConstructor;
        default: number;
    };
    conditions: {
        type: PropType<ICommonItem[]>;
        default: () => any[];
    };
    getMenuList: PropType<GetMenuListFunc>;
    validateValues: PropType<ValidateValuesFunc>;
    valueBehavior: PropType<ValueBehavior>;
}>> & {
    onDelete?: (...args: any[]) => any;
}, {
    conditions: ICommonItem[];
    overflowIndex: number;
}>;
export default _default;
