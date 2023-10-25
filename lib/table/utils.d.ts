import { Column, GroupColumn, TablePropTypes } from './props';
/**
 * 解析Prop值 | 可能为多种类型 & 函数返回的场景
 * @param prop 当前Prop
 * @param key 要处理的Key
 * @param args 如果是函数，传递参数
 * @returns
 */
export declare const resolvePropVal: (prop: any, key: string | string[], args: any[]) => any;
/**
 * 处理Props中的ActiveColumn，解析为统一的数组格式
 * @param props
 * @returns
 */
export declare const resolveActiveColumns: (props: TablePropTypes) => number[];
/**
 * 统一处理数字类型参数
 * @param prop
 * @returns
 */
export declare const resolveNumberToNumArray: (prop: number) => number[];
export declare const resolveWidth: (propWidth: string | number) => string | number;
/**
 * 解析可为数字或者字符串设置的样式配置
 * @param val 配置值
 * @param defaultValue 默认值
 * @param offset 偏移量
 * @returns 标准化px string
 */
export declare const resolveNumberOrStringToPix: (val: string | number, defaultValue?: string | number, offset?: any) => string | number;
/**
 * 格式化Border配置为标准Class
 * @param val
 * @returns
 */
export declare const resolvePropBorderToClassStr: (val: string | string[]) => string;
/**
 * 获取当前列实际宽度
 * width props中设置的默认宽度
 * calcWidth 计算后的宽度
 * resizeWidth 拖拽重置之后的宽度
 * @param colmun 当前列配置
 * @param orders 获取宽度顺序
 * @returns
 */
export declare const getColumnReactWidth: (colmun: GroupColumn, orders?: string[]) => any;
/**
 * 根据Props Column配置计算并设置列宽度
 * @param root 当前根元素
 * @param colgroups Columns配置
 * @param autoWidth 自动填充宽度
 * @param offsetWidth 需要减掉的偏移量（滚动条|外层边框）
 */
export declare const resolveColumnWidth: (root: HTMLElement, colgroups: GroupColumn[], autoWidth?: number, offsetWidth?: number) => void;
/**
 * 监听目标元素的Resize事件
 * @param root 目标元素
 * @param callbackFn 执行函数
 * @param delay 延迟执行时间，默认 60
 * @param immediate 是否立即执行回调函数
 * @param resizerWay 执行方式：debounce | throttle
 * @returns "{ start: () => void, stop: () => void }"
 */
export declare const observerResize: (root: HTMLElement, callbackFn: () => void, delay?: number, immediate?: boolean, resizerWay?: string) => {
    start: () => void;
    disconnect: () => void;
};
/**
 * 判定为数值 | px | %
 * @param val
 * @returns
 */
export declare const isPercentPixOrNumber: (val: string | number) => boolean;
/**
 * Format Table Head Option
 * @param props
 * @returns
 */
export declare const resolveHeadConfig: (props: TablePropTypes) => {
    isShow: boolean;
    height: number;
} & {
    height?: Number;
    isShow?: boolean;
    cellFn?: Function;
};
/**
   * 获取当前行指定列的内容
   * @param row 当前行
   * @param key 指定列名
   * @param column 列配置
   * @param index 当前行Index
   * @returns
   */
export declare const getRowText: (row: any, key: string, column: Column) => any;
/**
 * 格式化prop配置为标准数组格式
 * @param prop prop对象值
 * @param args 如果是function参数
 * @returns
 */
export declare const formatPropAsArray: (prop: string | object | (() => any), args: any[]) => any;
export declare const isRenderScrollBottomLoading: (props: TablePropTypes) => boolean;
export declare const getRowKey: (item: any, props: TablePropTypes, index: number) => any;
export declare const hasRootScrollY: (root: any, querySelector: string, offsetHeight?: number) => boolean;
export declare const getColumnClass: (column: Column, colIndex?: number, uuid?: string) => {
    column_fixed: boolean;
    column_fixed_left: boolean;
    column_fixed_right: boolean;
};
export declare const getElementTextWidth: (element: HTMLElement, text?: string) => any;
export declare const isColumnHidden: (settingFields: any, column: any, checked: any) => boolean;
export declare const resolveColumnSpan: (column: Column, colIndex: number, row: any, rowIndex: number, key: string) => any;
export declare const resolveCellSpan: (column: Column, colIndex: number, row: any, rowIndex: number) => {
    colspan: any;
    rowspan: any;
};
export declare const skipThisColumn: (columns: Column[], colIndex: number, row: any, rowIndex: number) => boolean;
export declare const getSortFn: (column: any, sortType: any) => (() => boolean) | ((_a: any, _b: any) => number);
export declare const getNextSortType: (sortType: string) => string;
export declare const resolveSort: (sort: string | boolean | any) => any;
export declare const isRowSelectEnable: (props: any, { row, index, isCheckAll }: {
    row: any;
    index: any;
    isCheckAll: any;
}) => any;
export declare const getRowId: (row: any, index: any, props: any) => any;
export declare const getRowSourceData: (row: any) => any;
export declare const getColumnSourceData: (column: any) => any;
