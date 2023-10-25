import { ComputedRef, InjectionKey, Ref, VNode } from 'vue';
/**
 * @description: 获取menu list方法
 * @param {ISearchItem} item 已选择的key字段 为空则代表当前并未选择key字段
 * @param {string} keyword 已输入的文本
 * @return {*} menu list用于渲染选择弹层列表
 */
export declare enum ValueBehavior {
    ALL = "all",
    NEEDKEY = "need-key"
}
export declare type GetMenuListFunc = (item: ISearchItem, keyword: string) => Promise<ISearchItem[]>;
export declare type ValidateValuesFunc = (item: ISearchItem, values: ICommonItem[]) => Promise<string | true>;
export declare type MenuSlotParams = {
    item: ISearchItem;
    list: ISearchItem[];
    hoverId: string;
    multiple: boolean;
    getSearchNode: (str: string) => string | (string | VNode)[];
};
export interface ISearchSelectProvider {
    onEditClick: (item: SelectedItem, index: number) => void;
    onEditEnter: (item: SelectedItem, index: number) => void;
    onEditBlur: () => void;
    onValidate: (str: string) => void;
    editKey: Ref<String>;
    valueSplitCode: ComputedRef<string>;
}
export declare const SEARCH_SLECT_PROVIDER_KEY: InjectionKey<ISearchSelectProvider>;
export declare const useSearchSelectProvider: (data: ISearchSelectProvider) => void;
export declare const useSearchSelectInject: () => ISearchSelectProvider;
export declare enum SearchInputMode {
    'DEFAULT' = "default",
    'EDIT' = "edit"
}
export interface ICommonItem {
    id: string;
    name: string;
    disabled?: boolean;
    realId?: string;
    value?: Omit<ICommonItem, 'disabled' | 'value'>;
    isSelected?: boolean;
}
export interface ISearchValue extends Omit<ICommonItem, 'disabled' | 'value'> {
    type?: SearchItemType;
    values?: Omit<ICommonItem, 'disabled'>[];
}
export interface ISearchItem {
    id: string;
    name: string;
    children?: ICommonItem[];
    multiple?: boolean;
    async?: boolean;
    noValidate?: boolean;
    placeholder?: string;
    disabled?: boolean;
    value?: ICommonItem;
    isSelected?: boolean;
}
export interface IMenuFooterItem {
    id: 'confirm' | 'cancel';
    name: string;
    disabled?: boolean;
}
export declare type SearchItemType = 'text' | 'default' | 'condition';
export declare class SelectedItem {
    searchItem: ISearchItem;
    type: SearchItemType;
    splitCode: string;
    id: string;
    name: string;
    values: ICommonItem[];
    condition: string;
    constructor(searchItem: ISearchItem, type?: SearchItemType, splitCode?: string);
    get multiple(): boolean;
    get placeholder(): string;
    get children(): ICommonItem[];
    get validate(): boolean;
    get inputInnerHtml(): string;
    get inputInnerText(): string;
    get keyInnerHtml(): string;
    get keyInnerText(): string;
    isSpecialType(): boolean;
    addValue(item: ICommonItem): void;
    toValue(): ISearchValue;
    toValueKey(): string;
    isInValueList(item: ICommonItem): boolean;
}
