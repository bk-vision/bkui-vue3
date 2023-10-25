import { Column, TablePropTypes } from './props';
declare const _default: (props: TablePropTypes, targetColumns: Column[]) => {
    initColumns: (column: Column | Column[]) => void;
    getColumns: () => Column[];
};
/**
 * 渲染column settings
 * @param props: TablePropTypes
 * @param targetColumns 解析之后的column配置（主要用来处理通过<bk-column>配置的数据结构）
 */
export default _default;
