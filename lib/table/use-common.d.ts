import { Colgroups, Column, Settings, TablePropTypes } from './props';
/**
 * 渲染class settings
 * @param props: TablePropTypes
 * @param targetColumns 解析之后的column配置（主要用来处理通过<bk-column>配置的数据结构）
 * @param root root element
 * @param reactiveProp 组件内部定义的响应式对象
 * @param pageData 当前页数据
 */
export declare const useClass: (props: TablePropTypes, targetColumns: Column[], root?: any, reactiveProp?: any, pageData?: any[]) => {
    tableClass: import("vue").ComputedRef<string>;
    headClass: string;
    contentClass: {
        [x: string]: boolean;
    };
    footerClass: import("vue").ComputedRef<string>;
    wrapperStyle: import("vue").ComputedRef<{
        minHeight: string | number;
        width: string;
        maxWidth: string;
    }>;
    contentStyle: {
        display: string;
        'min-height': string;
        height: string;
        maxHeight: string;
    };
    headStyle: import("vue").ComputedRef<{
        '--row-height': string;
        '--scroll-head-left': string;
        '--scroll-left': string;
    }>;
    resetTableHeight: (rootEl: HTMLElement) => void;
    updateBorderClass: (root: HTMLElement) => void;
    getColumnsWidthOffsetWidth: () => number;
    hasFooter: import("vue").ComputedRef<number>;
    hasScrollY: import("vue").Ref<boolean>;
    hasScrollYRef: import("vue").ComputedRef<boolean>;
};
/**
 * 渲染初始化数据 settings
 * @param props: TablePropTypes
 * @param targetColumns 解析之后的column配置（主要用来处理通过<bk-column>配置的数据结构）
 */
export declare const useInit: (props: TablePropTypes, targetColumns: Column[]) => {
    colgroups: Colgroups[];
    dragOffsetXStyle: import("vue").ComputedRef<{
        readonly position: "absolute";
        readonly top: 0;
        readonly bottom: 0;
        readonly left: 0;
        readonly width: "1px";
        readonly 'background-color': "#ebeef5";
    }>;
    dragOffsetX: import("vue").Ref<number>;
    reactiveSchema: {
        rowActions: Map<any, any>;
        scrollTranslateY: number;
        scrollTranslateX: number;
        pos: {
            bottom: number;
        };
        activeColumns: any[];
        settings: boolean | {
            fields: (() => import("./props").Field[]) | {
                label: string;
                field?: string;
                disabled?: boolean;
            }[];
            checked: string[] | (() => string[]);
            limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
            size: "small" | "large" | "medium";
            sizeList: (object & (() => import("./props").SizeItem[])) | {
                value?: string;
                label?: string;
                height?: number;
            }[];
            showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
        };
        setting: {
            size: string;
            height: any;
        };
        defaultSort: any;
    };
    indexData: any[];
    fixedWrapperClass: string;
    fixedColumns: import("vue").ComputedRef<{
        isExist: boolean;
        colPos: string;
        column: import("./props").GroupColumn;
    }[]>;
    resolveColumnStyle: (colPos: string) => {
        width: string;
        bottom: string;
    };
    resolveColumnClass: (column: import("./props").GroupColumn, scrollX?: any, offsetRight?: any) => {
        column_fixed: boolean;
        column_fixed_left: boolean;
        column_fixed_right: boolean;
        shadow: boolean;
    };
    initIndexData: (keepLocalAction?: boolean) => void;
    updateIndexData: (selectedAll?: boolean) => void;
    setRowExpand: (row: any, expand?: any) => void;
    updateColGroups: (settings?: Settings) => void;
    clearSelection: () => void;
    toggleAllSelection: (checked?: any) => void;
    toggleRowSelection: (row: any, selected: boolean) => void;
    getSelection: () => any[];
    clearSort: () => void;
};
