import { Column, TablePropTypes } from '../props';
/**
 * 处理Props中的ActiveColumn，解析为统一的数组格式
 * @param props
 * @returns
 */
export declare const resolveActiveColumns: (props: TablePropTypes) => number[];
declare const _default: (props: TablePropTypes, targetColumns: Column[]) => {
    activeColumns: any[];
};
/**
 * table列处理模块
 * @param props
 * @returns
 */
export default _default;
