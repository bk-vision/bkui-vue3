import type { ComputedRef } from 'vue';
import type { Language } from '../locale';
export declare const enum BORDER_OPTION {
    NONE = "none",
    ROW = "row",
    COL = "col",
    OUTER = "outer",
    HORIZONTAL = "horizontal"
}
/**
 * 鼠标划过行样式
 */
export declare const enum ROW_HOVER {
    HIGHLIGHT = "highlight",
    AUTO = "auto"
}
export declare const ROW_HOVER_OPTIONS: ROW_HOVER[];
/**
 * 边框配置可选项
 */
export declare const BORDER_OPTIONS: BORDER_OPTION[];
export declare const enum EVENTS {
    /** 点击排序事件 */
    ON_SORT_BY_CLICK = "onSortByClick",
    ON_FILTER_CLICK = "onFilterClick",
    ON_SETTING_CHANGE = "onSettingChange",
    ON_ROW_EXPAND_CLICK = "onRowExpandClick",
    ON_ROW_CHECK = "onRowCheck"
}
export declare const enum EMIT_EVENTS {
    COLUMN_PICK = "columnPick",
    COLUMN_SORT = "columnSort",
    COLUMN_FILTER = "columnFilter",
    COLUMN_FILTER_SAVE = "colFilterSave",
    ROW_CLICK = "rowClick",
    ROW_DBL_CLICK = "rowDblclick",
    ROW_EXPAND_CLICK = "rowExpand",
    PAGE_LIMIT_CHANGE = "pageLimitChange",
    PAGE_VALUE_CHANGE = "pageValueChange",
    SETTING_CHANGE = "settingChange",
    SCROLL_BOTTOM = "scrollBottom",
    ROW_SELECT = "select",
    ROW_SELECT_ALL = "selectAll",
    ROW_SELECT_CHANGE = "selectionChange",
    CELL_CLICK = "cellClick",
    CELL_DBL_CLICK = "cellDblclick",
    NATIVE_CLICK = "click",
    NATIVE_DBL_CLICK = "dblclick"
}
export declare const EMIT_EVENT_TYPES: {
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
};
export declare const CELL_EVENT_TYPES: {
    click: (..._args: any[]) => boolean;
    dblclick: (..._args: any[]) => boolean;
};
/**
 * Table Row Attributes
 */
export declare const TABLE_ROW_ATTRIBUTE: {
    ROW_INDEX: string;
    ROW_UID: string;
    ROW_EXPAND: string;
    ROW_SELECTION: string;
    ROW_SELECTION_ALL: string;
    ROW_SELECTION_INDETERMINATE: string;
    ROW_SOURCE_DATA: string;
    ROW_SKIP_CFG: string;
};
export declare const COLUMN_ATTRIBUTE: {
    COL_UID: string;
    COL_SOURCE_DATA: string;
};
/**
 * Y 轴滚动条宽度
 */
export declare const SCROLLY_WIDTH = 6;
/**
 * 默认行高
 */
export declare const LINE_HEIGHT = 42;
export declare const SETTING_SIZE: {
    large: number;
    medium: number;
    small: number;
};
export declare const createDefaultSizeList: (t: ComputedRef<Language['table']>) => {
    value: string;
    label: string;
    height: number;
}[];
/**
 * Provide key: init column when use <column { ...props }> template
 */
export declare const PROVIDE_KEY_INIT_COL = "InitColumns";
/**
 * 排序可选择项
 */
export declare const enum SORT_OPTION {
    ASC = "asc",
    DESC = "desc",
    NULL = "null",
    CUSTOM = "custom"
}
export declare const SORT_OPTIONS: SORT_OPTION[];
/**
 * 列宽最小设置
 */
export declare const COL_MIN_WIDTH = 80;
