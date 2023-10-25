import type { ComputedRef } from 'vue';
import type { Language } from '../locale';
import { TablePlugins } from './plugins/index';
import { GroupColumn, IColumnActive, IReactiveProp, TablePropTypes } from './props';
export default class TableRender {
    props: TablePropTypes;
    context: any;
    reactiveProp: any;
    colgroups: GroupColumn[];
    uuid: string;
    events: Map<string, any[]>;
    styleRef: ComputedRef<{
        hasScrollY: boolean;
    }>;
    t: ComputedRef<Language['table']>;
    plugins: TablePlugins;
    constructor(props: any, ctx: any, reactiveProp: IReactiveProp, colgroups: GroupColumn[], styleRef: any, t: ComputedRef<Language['table']>);
    get propActiveCols(): IColumnActive[];
    /**
     * 渲染Table Head
     * @param activeColumns 当前选中的列
     * @returns
     */
    renderTableHeadSchema(): (string | JSX.Element)[];
    /**
     * 渲染Table主体
     * @param activeColumns 当前选中的列
     * @returns
     */
    renderTableBodySchema(rows: any[]): any;
    renderTableFooter(options: any): JSX.Element;
    getRowHeight: (row?: any, rowIndex?: number) => any;
    /**
     * 注册监听事件
     * @param eventName
     * @param watcher
     */
    on(eventName: string, watcher: Function): this;
    destroy(): void;
    /**
     * 派发事件
     * @param eventName
     * @param args
     */
    private emitEvent;
    private handlePageLimitChange;
    private handlePageChange;
    /**
     * 指定列选中状态
     * @param index 指定选中的列Index
     * @param single 是否重置其他列，当只允许选中一列的情况下需要先重置
     */
    private setColumnActive;
    /**
     * 点击选中一列事件
     * @param index 当前选中列Index
     */
    private handleColumnHeadClick;
    /**
     * 获取排序设置表头
     * @param column 当前渲染排序列
     * @param index 排序列所在index
     * @returns
     */
    private getSortCell;
    private getFilterCell;
    /**
     * 渲染Table Header
     * @returns
     */
    private renderHeader;
    /**
     * 渲染Table Body
     * @returns
     */
    private renderTBody;
    private renderExpandRow;
    private getColumnClass;
    private getHeadColumnClass;
    /**
     * table row click handle
     * @param e
     * @param row
     * @param index
     * @param rows
     */
    private handleRowClick;
    /**
     * table row click handle
     * @param e
     * @param row
     * @param index
     * @param rows
     */
    private handleRowDblClick;
    private getExpandCell;
    private handleRowExpandClick;
    private renderCellCallbackFn;
    private renderCheckboxColumn;
    private renderExpandColumn;
    /**
     * 渲染表格Cell内容
     * @param row 当前行
     * @param column 当前列
     * @returns
     */
    private renderCell;
    /**
     * 判定指定列是否为选中状态
     * @param colIndex 指定列Index
     * @returns
     */
    private isColActive;
    /**
   * 渲染表格Col分组
   * @returns
   */
    private renderColGroup;
    /**
     * 过滤当前可渲染的列
     */
    private get filterColgroups();
    /**
     * 当前Table Setting
     */
    private get setting();
}
