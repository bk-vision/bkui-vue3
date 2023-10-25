import { TablePropTypes } from '../props';
/**
 * 处理 Prop中的分页配置
 * prop中的配置会覆盖本地的配置
 * @param propPagination 用户传入的配置
 * @param defVal 默认配置
 * @returns 返回值
 */
export declare const resolvePaginationOption: (propPagination: any, defVal: any) => any;
declare const _default: (props: TablePropTypes, indexData: any[]) => {
    pageData: any[];
    localPagination: any;
    resolvePageData: (filterFn: any, sortFn: any, activeSortColumn: any) => void;
    watchEffectFn: (filterFn: any, sortFn: any, activeSortColumn: any) => void;
};
export default _default;
