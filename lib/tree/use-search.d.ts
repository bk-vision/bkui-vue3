import { SearchOption, TreePropTypes } from './props';
declare const _default: (props: TreePropTypes) => {
    searchFn: (itemValue: string | number, item: any) => any;
    refSearch: import("vue").Ref<string | number | boolean | SearchOption>;
    isSearchActive: import("vue").ComputedRef<boolean>;
    isSearchDisabled: boolean;
    openResultNode: boolean;
    resultType: string;
    isTreeUI: boolean;
};
export default _default;
