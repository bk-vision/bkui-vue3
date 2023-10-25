declare const _default: import("vue").DefineComponent<{
    data: import("vue-types").VueTypeDef<any[]> & {
        default: () => any[];
    };
    columns: import("vue-types").VueTypeDef<import("./props").Column[]> & {
        default: () => import("./props").Column[];
    };
    activeColumn: import("vue-types").VueTypeDef<number | number[]>;
    columnPick: import("vue-types").VueTypeDef<"disabled" | "single" | "multi"> & {
        default: "disabled" | "single" | "multi";
    };
    height: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    minHeight: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    maxHeight: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    rowHeight: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    headHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    showHead: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    thead: import("vue-types").VueTypeShape<import("./props").Thead>;
    virtualEnabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    border: import("vue-types").VueTypeDef<string | ("col" | "none" | "horizontal" | "row" | "outer")[]> & {
        default: string | (() => ("col" | "none" | "horizontal" | "row" | "outer")[]);
    };
    pagination: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }> & {
        default: boolean | (() => {
            [key: string]: any;
        });
    };
    paginationHeihgt: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    remotePagination: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    emptyText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    settings: import("vue-types").VueTypeDef<boolean | {
        fields: import("./props").Field[] | (() => import("./props").Field[]);
        checked: string[] | (() => string[]);
        limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
        size: "small" | "large" | "medium";
        sizeList: import("./props").SizeItem[] | (object & (() => import("./props").SizeItem[]));
        showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
    }> & {
        default: boolean | (() => {
            fields: import("./props").Field[] | (() => import("./props").Field[]);
            checked: string[] | (() => string[]);
            limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
            size: "small" | "large" | "medium";
            sizeList: import("./props").SizeItem[] | (object & (() => import("./props").SizeItem[]));
            showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
        });
    };
    rowClass: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    rowStyle: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    cellStyle: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    cellClass: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    scrollLoading: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }> & {
        default: boolean | (() => {
            [key: string]: any;
        });
    };
    reserveExpand: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    selectionKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    isSelectedFn: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    rowKey: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    showOverflowTooltip: import("vue-types").VueTypeDef<boolean | import("./props").IOverflowTooltip> & {
        default: boolean | (() => import("./props").IOverflowTooltip);
    };
    asyncData: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    rowHover: import("vue-types").VueTypeDef<import("./const").ROW_HOVER> & {
        default: import("./const").ROW_HOVER;
    };
    defaultSort: import("vue-types").VueTypeShape<import("./props").ISortOption> & {
        default: () => Partial<import("./props").ISortOption>;
    };
    isRowSelectEnable: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    resizerWay: import("vue-types").VueTypeDef<"debounce" | "throttle">;
    observerResize: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    columnPick: (..._args: any[]) => boolean;
    columnFilter: (..._args: any[]) => boolean;
    columnSort: (..._args: any[]) => boolean;
    colFilterSave: (..._args: any[]) => boolean;
    rowClick: (..._args: any[]) => boolean;
    rowDblclick: (..._args: any[]) => boolean;
    rowExpand: (..._args: any[]) => boolean;
    select: (..._args: any[]) => boolean;
    selectAll: (..._args: any[]) => boolean;
    selectionChange: (..._args: any[]) => boolean;
    pageLimitChange: (..._args: any[]) => boolean;
    pageValueChange: (..._args: any[]) => boolean;
    settingChange: (..._args: any[]) => boolean;
    scrollBottom: (..._args: any[]) => boolean;
    cellClick: (..._args: any[]) => boolean;
    cellDblclick: (..._args: any[]) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: import("vue-types").VueTypeDef<any[]> & {
        default: () => any[];
    };
    columns: import("vue-types").VueTypeDef<import("./props").Column[]> & {
        default: () => import("./props").Column[];
    };
    activeColumn: import("vue-types").VueTypeDef<number | number[]>;
    columnPick: import("vue-types").VueTypeDef<"disabled" | "single" | "multi"> & {
        default: "disabled" | "single" | "multi";
    };
    height: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    minHeight: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    maxHeight: import("vue-types").VueTypeDef<string | number> & {
        default: string | number;
    };
    rowHeight: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    headHeight: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    showHead: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    thead: import("vue-types").VueTypeShape<import("./props").Thead>;
    virtualEnabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    border: import("vue-types").VueTypeDef<string | ("col" | "none" | "horizontal" | "row" | "outer")[]> & {
        default: string | (() => ("col" | "none" | "horizontal" | "row" | "outer")[]);
    };
    pagination: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }> & {
        default: boolean | (() => {
            [key: string]: any;
        });
    };
    paginationHeihgt: import("vue-types").VueTypeValidableDef<number> & {
        default: number;
    } & {
        default: number;
    };
    remotePagination: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    emptyText: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    };
    settings: import("vue-types").VueTypeDef<boolean | {
        fields: import("./props").Field[] | (() => import("./props").Field[]);
        checked: string[] | (() => string[]);
        limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
        size: "small" | "large" | "medium";
        sizeList: import("./props").SizeItem[] | (object & (() => import("./props").SizeItem[]));
        showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
    }> & {
        default: boolean | (() => {
            fields: import("./props").Field[] | (() => import("./props").Field[]);
            checked: string[] | (() => string[]);
            limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
            size: "small" | "large" | "medium";
            sizeList: import("./props").SizeItem[] | (object & (() => import("./props").SizeItem[]));
            showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
        });
    };
    rowClass: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    rowStyle: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    cellStyle: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    cellClass: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    scrollLoading: import("vue-types").VueTypeDef<boolean | {
        [key: string]: any;
    }> & {
        default: boolean | (() => {
            [key: string]: any;
        });
    };
    reserveExpand: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    selectionKey: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    isSelectedFn: import("vue-types").VueTypeValidableDef<(...args: any[]) => any> & {
        default: (...args: any[]) => any;
    } & {
        default: (...args: any[]) => any;
    };
    rowKey: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    showOverflowTooltip: import("vue-types").VueTypeDef<boolean | import("./props").IOverflowTooltip> & {
        default: boolean | (() => import("./props").IOverflowTooltip);
    };
    asyncData: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    rowHover: import("vue-types").VueTypeDef<import("./const").ROW_HOVER> & {
        default: import("./const").ROW_HOVER;
    };
    defaultSort: import("vue-types").VueTypeShape<import("./props").ISortOption> & {
        default: () => Partial<import("./props").ISortOption>;
    };
    isRowSelectEnable: import("vue-types").VueTypeDef<any> & {
        default: any;
    };
    resizerWay: import("vue-types").VueTypeDef<"debounce" | "throttle">;
    observerResize: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
}>> & {
    onSelect?: (...args: any[]) => any;
    onColumnPick?: (...args: any[]) => any;
    onColumnSort?: (...args: any[]) => any;
    onColumnFilter?: (...args: any[]) => any;
    onColFilterSave?: (...args: any[]) => any;
    onRowClick?: (...args: any[]) => any;
    onRowDblclick?: (...args: any[]) => any;
    onRowExpand?: (...args: any[]) => any;
    onPageLimitChange?: (...args: any[]) => any;
    onPageValueChange?: (...args: any[]) => any;
    onSettingChange?: (...args: any[]) => any;
    onScrollBottom?: (...args: any[]) => any;
    onSelectAll?: (...args: any[]) => any;
    onSelectionChange?: (...args: any[]) => any;
    onCellClick?: (...args: any[]) => any;
    onCellDblclick?: (...args: any[]) => any;
}, {
    data: any[];
    pagination: boolean | {
        [key: string]: any;
    };
    height: string | number;
    maxHeight: string | number;
    border: string | ("col" | "none" | "horizontal" | "row" | "outer")[];
    minHeight: string | number;
    columns: import("./props").Column[];
    headHeight: number;
    rowKey: any;
    scrollLoading: boolean | {
        [key: string]: any;
    };
    showOverflowTooltip: boolean | import("./props").IOverflowTooltip;
    columnPick: "disabled" | "single" | "multi";
    rowHeight: any;
    showHead: boolean;
    virtualEnabled: boolean;
    paginationHeihgt: number;
    remotePagination: boolean;
    emptyText: string;
    settings: boolean | {
        fields: import("./props").Field[] | (() => import("./props").Field[]);
        checked: string[] | (() => string[]);
        limit: (number | object | (() => number) | ((props: Record<string, unknown>) => number)) & number;
        size: "small" | "large" | "medium";
        sizeList: import("./props").SizeItem[] | (object & (() => import("./props").SizeItem[]));
        showLineHeight: (boolean | object | (() => boolean) | ((props: Record<string, unknown>) => boolean)) & boolean;
    };
    rowClass: any;
    rowStyle: any;
    cellStyle: any;
    cellClass: any;
    reserveExpand: boolean;
    selectionKey: string;
    isSelectedFn: (...args: any[]) => any;
    asyncData: boolean;
    rowHover: import("./const").ROW_HOVER;
    defaultSort: import("./props").ISortOption;
    isRowSelectEnable: any;
    observerResize: boolean;
}>;
export default _default;
