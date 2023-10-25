import { PropType, VNode } from 'vue';
import { ICommonItem, IMenuFooterItem } from './utils';
declare const _default: import("vue").DefineComponent<{
    list: {
        type: PropType<ICommonItem[]>;
    };
    hoverId: StringConstructor;
    keyword: {
        type: StringConstructor;
        default: string;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    selected: {
        type: PropType<string[]>;
        default: () => any[];
    };
    conditions: {
        type: PropType<ICommonItem[]>;
    };
    footerBtns: {
        type: PropType<IMenuFooterItem[]>;
        default: () => any[];
    };
}, {
    handleClick: (item: ICommonItem) => void;
    handleClickCondition: (item: ICommonItem) => void;
    handleClickFooterBtn: (item: IMenuFooterItem) => void;
    filterList: import("vue").ComputedRef<ICommonItem[]>;
    getSearchNode: (item: ICommonItem) => string | (string | VNode)[];
    localFooterBtns: import("vue").ComputedRef<IMenuFooterItem[] | ({
        id: string;
        name: string;
        disabled?: undefined;
    } | {
        id: string;
        name: string;
        disabled: boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("selectItem" | "selectCondition" | "footerClick")[], "selectItem" | "selectCondition" | "footerClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    list: {
        type: PropType<ICommonItem[]>;
    };
    hoverId: StringConstructor;
    keyword: {
        type: StringConstructor;
        default: string;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    selected: {
        type: PropType<string[]>;
        default: () => any[];
    };
    conditions: {
        type: PropType<ICommonItem[]>;
    };
    footerBtns: {
        type: PropType<IMenuFooterItem[]>;
        default: () => any[];
    };
}>> & {
    onSelectItem?: (...args: any[]) => any;
    onSelectCondition?: (...args: any[]) => any;
    onFooterClick?: (...args: any[]) => any;
}, {
    multiple: boolean;
    selected: string[];
    keyword: string;
    footerBtns: IMenuFooterItem[];
}>;
export default _default;
